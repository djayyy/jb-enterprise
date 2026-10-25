import {
  fragmentSlug,
  equipmentAnchor,
  partAnchor,
  scopeAnchor,
} from "./navigation.mjs";

/**
 * @typedef {{title: string, url: string}} Breadcrumb
 * @typedef {Object} CatalogNode
 * @property {string} kind
 * @property {string} level
 * @property {string} slug
 * @property {string} title
 * @property {string} summary
 * @property {string} image
 * @property {string} source
 * @property {string} url
 * @property {string} parentUrl
 * @property {string} parentTitle
 * @property {string} parentSummary
 * @property {string} categoryTitle
 * @property {string} categoryUrl
 * @property {Breadcrumb[]} breadcrumbs
 * @property {CatalogNode[]} children
 * @property {string} quoteUrl
 * @typedef {{kind: string, title: string, url: string, breadcrumbs: Breadcrumb[], children: CatalogNode[], summary?: string, categoryTitle?: string, categoryUrl?: string}} CatalogParent
 * @typedef {{serviceGroups: Record<string,string>, serviceItems: Record<string,string>, serviceHashes: Record<string,string>, equipmentGroups: Record<string,string>, equipmentHashes: Record<string,string>, detailHashes: Record<string,string>}} LegacyMap
 */

/** @param {string} text @param {string} fallback @returns {string} */
export function catalogImage(text, fallback) {
  /** @type {[RegExp, string][]} */
  const rules = [
    [
      /3d|drawing|simulation|design validation|material science/i,
      "catalog-scanning",
    ],
    [/rewind/i, "catalog-rewinding"],
    [/retaining ring/i, "catalog-retaining-ring"],
    [/winding|stator|\bbar[s]?\b|wedging/i, "catalog-windings"],
    [/bearing/i, "catalog-bearing"],
    [/blade|vane|runner/i, "catalog-blading"],
    [/diaphragm|seal segment/i, "catalog-diaphragm"],
    [/casing|chamber|enclosure|cover/i, "catalog-casing"],
    [/fastener|bolt|stud|nut|washer/i, "catalog-fastener"],
    [/welding/i, "catalog-welding"],
    [/machining|journal|shaft/i, "catalog-machining"],
    [/balanc|vibration|runout/i, "catalog-balancing"],
    [/transformer|bushing/i, "catalog-transformer"],
    [/bus duct|busbar/i, "catalog-busduct"],
    [/switchgear|panel/i, "catalog-switchgear"],
    [/cool|fan|blower/i, "catalog-cooling"],
    [
      /lubric|\boil\b|filtrat|varnish|tribology|viscosity|contamination/i,
      "catalog-lubrication",
    ],
    [/valve|piping|pressure|pump|water/i, "catalog-pipework"],
    [
      /instrument|control|relay|cable|plc|dcs|calibrat|excitation/i,
      "catalog-controls",
    ],
    [/test|inspection|assessment|measurement/i, "catalog-rotor-testing"],
    [/rotor|pole|spider|rim/i, "catalog-rotor"],
    [/turbine/i, "catalog-turbine-assembly"],
    [/generator/i, "generator-hero"],
  ];
  return rules.find(([match]) => match.test(text))?.[1] || fallback;
}

/** @param {import('../data/services').Service[]} services
 * @param {{group: string, title: string, source: string, items: {title: string, parts: string[]}[]}[]} equipment
 */
export function buildCatalog(services, equipment) {
  /** @type {Record<string, CatalogParent>} */
  const roots = Object.fromEntries(
    ["services", "equipment"].map((kind) => [
      kind,
      {
        kind,
        title: kind === "services" ? "All services" : "All equipment",
        url: `/${kind}/`,
        breadcrumbs: [{ title: "Home", url: "/" }],
        children: [],
      },
    ]),
  );
  /** @type {CatalogNode[]} */
  const allPages = [];
  /** @param {string} kind @param {string} level @param {string} slug
   * @param {string} title @param {string} summary @param {string} image
   * @param {CatalogParent} parent @param {string} source @returns {CatalogNode}
   */
  const make = (kind, level, slug, title, summary, image, parent, source) => {
    /** @type {CatalogNode} */
    const node = {
      kind,
      level,
      slug,
      title,
      summary,
      image,
      source,
      url: `/${kind}/${slug}/`,
      parentUrl: parent.url,
      parentTitle: parent.title,
      parentSummary: parent.summary || "",
      categoryTitle: parent.categoryTitle || title,
      categoryUrl: parent.categoryUrl || `/${kind}/${slug}/`,
      breadcrumbs: [
        ...parent.breadcrumbs,
        { title: parent.title, url: parent.url },
      ],
      children: [],
      quoteUrl: `/request-a-quote/?${kind === "services" ? "service" : "part"}=${encodeURIComponent(level === "leaf" ? `${parent.title} — ${title}` : title)}`,
    };
    parent.children.push(node);
    allPages.push(node);
    return node;
  };
  const serviceMeta = [
    [
      "Thermal",
      "thermal",
      "Thermal Power Plant",
      "Turbine, generator, boiler, electrical and control & instrumentation services.",
      "thermal-plant",
    ],
    [
      "Hydro",
      "hydro",
      "Hydro Power Plant",
      "Hydro turbine, generator, electrical and control-system services.",
      "hydro-plant",
    ],
    [
      "Specialist",
      "specialist",
      "Specialist Engineering",
      "Testing, refurbishment, reverse engineering, lubrication reliability and OEM sourcing.",
      "catalog-refurbishment",
    ],
  ];
  const serviceImages = {
    "thermal/turbine": "catalog-turbine-assembly",
    "thermal/generator": "generator-hero",
    "thermal/boiler": "thermal-plant",
    "thermal/electrical": "catalog-switchgear",
    "thermal/control-instrumentation": "catalog-controls",
    "hydro/turbine": "hydro-plant",
    "hydro/generator": "stator",
    "hydro/electrical-controls": "catalog-transformer",
    "testing-inspection": "catalog-rotor-testing",
    refurbishment: "catalog-refurbishment",
    "reverse-engineering": "catalog-scanning",
    "lubrication-reliability": "catalog-lubrication",
    "oem-sourcing": "rotor",
  };
  /** @type {LegacyMap} */
  const legacy = {
    serviceGroups: {},
    serviceItems: {},
    serviceHashes: {},
    equipmentGroups: {},
    equipmentHashes: {},
    detailHashes: {},
  };
  for (const [group, slug, title, summary, image] of serviceMeta) {
    const cat = make(
      "services",
      "category",
      slug,
      title,
      summary,
      image,
      roots.services,
      "S1/S2 service categories",
    );
    legacy.serviceGroups[group] = cat.url;
    if (group === "Specialist") legacy.serviceHashes["specialist"] = cat.url;
    for (const service of services.filter((s) => s.group === group)) {
      const node = make(
        "services",
        "item",
        service.slug,
        service.title,
        service.summary,
        serviceImages[service.slug] || service.image,
        cat,
        service.source,
      );
      legacy.serviceItems[service.slug] = node.url;
      legacy.serviceHashes[`scope-${service.slug.replaceAll("/", "-")}`] =
        node.url;
      for (const [i, title] of service.scope.entries()) {
        const leaf = make(
          "services",
          "leaf",
          `${service.slug}/${fragmentSlug(title)}`,
          title,
          `${title} is part of ${service.title.toLowerCase()} within ${cat.title}.`,
          catalogImage(title, node.image),
          node,
          service.source,
        );
        legacy.detailHashes[`${node.url}#${scopeAnchor(i)}`] = leaf.url;
        if (
          service.slug === "reverse-engineering" &&
          title === "Critical component development"
        )
          legacy.detailHashes[`${node.url}#critical-components`] = leaf.url;
      }
    }
  }
  const images = {
    thermal: "thermal-plant",
    hydro: "hydro-plant",
    other: "catalog-pipework",
  };
  for (const group of equipment) {
    const cat = make(
      "equipment",
      "category",
      group.group,
      group.title,
      group.items.map((i) => i.title).join(" · "),
      images[group.group],
      roots.equipment,
      group.source,
    );
    legacy.equipmentGroups[group.group] = cat.url;
    legacy.equipmentHashes[group.group] = cat.url;
    for (const item of group.items) {
      const slug = `${group.group}/${fragmentSlug(item.title)}`;
      const node = make(
        "equipment",
        "item",
        slug,
        item.title,
        `Explore ${item.title.toLowerCase()} within ${cat.title.toLowerCase()}.`,
        catalogImage(item.title, cat.image),
        cat,
        group.source,
      );
      legacy.equipmentHashes[equipmentAnchor(group.group, item.title)] =
        node.url;
      for (const part of item.parts) {
        const leaf = make(
          "equipment",
          "leaf",
          `${slug}/${fragmentSlug(part)}`,
          part,
          `${part} is listed under ${item.title.toLowerCase()} in ${cat.title.toLowerCase()}.`,
          catalogImage(part, node.image),
          node,
          group.source,
        );
        legacy.equipmentHashes[partAnchor(group.group, item.title, part)] =
          leaf.url;
      }
    }
  }
  return {
    roots,
    serviceCategories: roots.services.children,
    equipmentCategories: roots.equipment.children,
    allPages,
    servicePages: allPages.filter((p) => p.kind === "services"),
    equipmentPages: allPages.filter((p) => p.kind === "equipment"),
    legacy,
  };
}

/** @param {string} pathname @param {string} search @param {string} hash @param {LegacyMap} map */
export function legacyCatalogDestination(pathname, search, hash, map) {
  const lookup = (entries, key) =>
    Object.hasOwn(entries, key) && typeof entries[key] === "string"
      ? entries[key]
      : null;
  const path = pathname.replace(/\/?$/, "/");
  const params = new URLSearchParams(search);
  let fragment = "";
  try {
    fragment = decodeURIComponent(hash.replace(/^#/, ""));
  } catch {
    return null;
  }
  if (fragment === "main") return null;
  if (path === "/services/")
    return (
      lookup(map.serviceItems, params.get("service")) ||
      lookup(map.serviceHashes, fragment) ||
      lookup(map.serviceGroups, params.get("group"))
    );
  if (path === "/equipment/")
    return (
      lookup(map.equipmentHashes, fragment) ||
      lookup(map.equipmentGroups, params.get("group"))
    );
  return lookup(map.detailHashes, `${path}#${fragment}`);
}

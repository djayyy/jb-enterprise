// Stable IDs and deterministic URL selection, shared by templates and browser code.
export const fragmentSlug = (value) =>
  String(value)
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
export const equipmentAnchor = (group, title) =>
  `parts-${fragmentSlug(group)}-${fragmentSlug(title)}`;
export const partAnchor = (group, title, part) =>
  `${equipmentAnchor(group, title)}--${fragmentSlug(part)}`;
export const scopeAnchor = (index) => `scope-item-${index + 1}`;
export const serviceDetailUrl = (slug, index) =>
  `/services/${slug}/${Number.isInteger(index) ? `#${scopeAnchor(index)}` : ""}`;
export const equipmentItemUrl = (group, title, part) =>
  `/equipment/?group=${encodeURIComponent(group)}#${part ? partAnchor(group, title, part) : equipmentAnchor(group, title)}`;
export function resolveServiceSelection(search, hash, entries) {
  const p = new URLSearchParams(search);
  const matching =
    entries.find((e) => e.slug === p.get("service")) ||
    entries.find((e) => `#scope-${e.slug.replaceAll("/", "-")}` === hash);
  const query = (p.get("q") || "").slice(0, 150);
  const requested = p.get("group");
  const family =
    matching?.group ||
    (entries.some((e) => e.group === requested)
      ? requested
      : hash === "#specialist"
        ? "Specialist"
        : "Thermal");
  return {
    family,
    selected:
      matching?.slug || entries.find((e) => e.group === family)?.slug || "",
    // A copied filter must never hide the service explicitly requested by URL.
    query:
      matching && !(matching.search || "").includes(query.trim().toLowerCase())
        ? ""
        : query,
  };
}
export function resolveEquipmentSelection(search, hash, entries) {
  const p = new URLSearchParams(search);
  const fragment = hash.replace(/^#/, "");
  const item = entries.find((e) => e.anchors.includes(fragment));
  const requested = p.get("group") || fragment;
  const group =
    item?.group ||
    (entries.some((e) => e.group === requested) ? requested : "thermal");
  return { group, query: item ? "" : (p.get("q") || "").slice(0, 150) };
}
export function equipmentArrivalTarget(hash, ids) {
  const id = hash.replace(/^#/, "");
  if (["thermal", "hydro", "other"].includes(id)) return "equipment-workspace";
  return ids.includes(id) ? id : "equipment-workspace";
}

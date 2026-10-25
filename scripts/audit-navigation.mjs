import fs from "node:fs";
import path from "node:path";
import assert from "node:assert/strict";
import { buildCatalog } from "../src/lib/catalog-tree.mjs";
import { sourceData } from "./source-data.mjs";
import { enquiryContext } from "../src/lib/forms.mjs";
const { services } = await sourceData("src/data/services.ts");
const { equipment } = await sourceData("src/data/equipment.ts");
const { coreCapabilities } = await sourceData("src/data/company.ts");
const catalog = buildCatalog(services, equipment);
const walk = (dir) =>
  fs
    .readdirSync(dir, { withFileTypes: true })
    .flatMap((e) =>
      e.isDirectory() ? walk(path.join(dir, e.name)) : [path.join(dir, e.name)],
    );
const pages = walk("dist").filter((f) => f.endsWith(".html"));
const destinations = new Map(),
  external = new Set(),
  rows = [];
let mapped = 0;
const read = (route) =>
  fs.readFileSync(path.join("dist", route, "index.html"), "utf8");
const escape = (s) =>
  s
    .replaceAll("&", "&amp;")
    .replaceAll('"', "&quot;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");
for (const file of pages) {
  const route =
    "/" +
    path
      .relative("dist", file)
      .replaceAll(path.sep, "/")
      .replace(/index\.html$/, "");
  const html = fs.readFileSync(file, "utf8");
  let count = 0;
  for (const match of html.matchAll(/\b(?:href|data-url)="([^"]*)"/g)) {
    const ref = match[1].replaceAll("&amp;", "&");
    assert.ok(ref && ref !== "#", `Empty link ${file}`);
    if (!ref.startsWith("/") && !ref.startsWith("#")) {
      external.add(ref);
      continue;
    }
    const url = new URL(ref, "https://preview.invalid" + route);
    destinations.set(url.pathname + url.search + url.hash, url);
    count++;
    if (/^\/(services|equipment)(\/|$)/.test(url.pathname)) {
      assert.ok(
        !url.searchParams.has("group") && !url.searchParams.has("service"),
        `Legacy category link ${ref}`,
      );
      assert.ok(
        !/^#(?:scope-|parts-)/.test(url.hash),
        `Legacy child anchor ${ref}`,
      );
    }
    if (
      ["/contact/", "/request-a-quote/"].includes(url.pathname) &&
      url.search
    ) {
      const expected = ["service", "part", "need"]
        .map((k) => url.searchParams.get(k))
        .filter(Boolean)
        .join(" · ")
        .slice(0, 200);
      assert.equal(enquiryContext(url.search), expected);
      assert.ok(read(url.pathname).includes('id="need"'));
      mapped++;
    }
  }
  rows.push({ route, links: count });
}
for (const node of catalog.allPages) {
  const html = read(node.url);
  assert.ok(destinations.has(node.url), `Orphan page ${node.url}`);
  assert.ok(
    html.includes(`<h1>${escape(node.title)}</h1>`),
    `Wrong heading ${node.url}`,
  );
  assert.ok(
    html.includes(`src="/images/${node.image}.webp"`),
    `Missing photo ${node.url}`,
  );
  assert.ok(html.includes(escape(node.summary)), `Missing text ${node.url}`);
  assert.ok(
    html.includes(`href="${node.parentUrl}"`),
    `Missing parent ${node.url}`,
  );
  for (const child of node.children) {
    assert.ok(
      html.includes(`class="catalog-card" href="${child.url}"`),
      `Missing child card ${child.url}`,
    );
    mapped++;
  }
  for (const b of node.breadcrumbs) assert.ok(html.includes(`href="${b.url}"`));
  mapped++;
}
const home = read("/");
for (const c of coreCapabilities) {
  const href = c.anchor
    ? catalog.legacy.detailHashes[`/services/${c.slug}/#${c.anchor}`]
    : `/services/${c.slug}/`;
  assert.ok(
    home.includes(`class="catalog-card" href="${href}"`),
    `Home capability ${c.title}`,
  );
}
for (const c of catalog.equipmentCategories)
  assert.ok(home.includes(`class="catalog-card" href="${c.url}"`));
let cssAssets = 0;
for (const file of walk("dist").filter((f) => f.endsWith(".css"))) {
  for (const m of fs
    .readFileSync(file, "utf8")
    .matchAll(/url\(["']?([^\s)'";]+)["']?\)/g)) {
    if (/^(data:|https?:|#)/.test(m[1])) continue;
    const clean = m[1].split(/[?#]/)[0];
    const dest = clean.startsWith("/")
      ? path.join("dist", clean)
      : path.resolve(path.dirname(file), clean);
    assert.ok(fs.existsSync(dest), `Missing CSS asset ${m[1]}`);
    cssAssets++;
  }
}
assert.equal(
  fs
    .readFileSync("dist/downloads/jbael-brochure.pdf")
    .subarray(0, 5)
    .toString(),
  "%PDF-",
);
console.log(
  JSON.stringify(
    {
      pages: rows,
      uniqueDestinations: destinations.size,
      semanticChecks: mapped,
      serviceScopes: services.reduce((n, s) => n + s.scope.length, 0),
      partTargets: catalog.equipmentPages.filter((n) => n.level !== "category")
        .length,
      cssAssets,
      externalDestinations: [...external],
      browserInteraction: "NOT RUN",
    },
    null,
    2,
  ),
);
if (process.argv.includes("--http")) {
  const base = process.env.JBAEL_PREVIEW_URL || "http://127.0.0.1:4322";
  const requests = [
    ...new Set([
      ...rows.map((r) => r.route),
      ...[...destinations.values()].map((u) => u.pathname + u.search),
    ]),
  ];
  const results = [];
  for (let i = 0; i < requests.length; i += 4) {
    results.push(
      ...(await Promise.all(
        requests.slice(i, i + 4).map(async (route) => {
          const response = await fetch(base + route, {
            signal: AbortSignal.timeout(10000),
          });
          assert.equal(response.status, 200, `HTTP destination ${route}`);
          await response.arrayBuffer();
          return { route, status: response.status };
        }),
      )),
    );
  }
  const missing = await fetch(base + "/__jbael_missing_page__", {
    signal: AbortSignal.timeout(10000),
  });
  assert.equal(missing.status, 404, "Missing URL must return 404");
  assert.ok((await missing.text()).includes("Home"), "404 recovery navigation");
  for (const route of ["/services?group=Hydro", "/equipment?group=other"]) {
    const response = await fetch(base + route, {
      signal: AbortSignal.timeout(10000),
    });
    assert.equal(response.status, 200);
    assert.equal(
      new URL(response.url).search,
      new URL(base + route).search,
      "Canonical redirect preserves query",
    );
    await response.arrayBuffer();
    results.push({ route, finalURL: response.url, status: response.status });
  }
  console.log(
    "PASS HTTP audit: " +
      JSON.stringify({ checked: results.length, missingRoute: 404, results }),
  );
}

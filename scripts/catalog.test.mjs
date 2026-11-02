import test from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import { createHash } from "node:crypto";
import { catalogPhotos } from "../src/data/catalog-photos.mjs";
import {
  buildCatalog,
  catalogImage,
  legacyCatalogDestination,
} from "../src/lib/catalog-tree.mjs";
import { sourceData } from "./source-data.mjs";
const { services } = await sourceData("src/data/services.ts");
const { equipment } = await sourceData("src/data/equipment.ts");
const tree = buildCatalog(services, equipment);
const resolve = (path, query = "", hash = "") =>
  legacyCatalogDestination(path, query, hash, tree.legacy);

test("requested turbine and critical-component photos survive reviewed catalogue replacements", () => {
  const page = (url) => tree.servicePages.find((node) => node.url === url);
  const reverse = page("/services/reverse-engineering/");
  const critical = page(
    "/services/reverse-engineering/critical-component-development/",
  );
  assert.equal(reverse.image, "catalog-scanning");
  assert.equal(critical.image, "critical-component");
  assert.equal(critical.parentUrl, reverse.url);
  assert.equal(
    reverse.children.find((node) => node.url === critical.url),
    critical,
    "Indexes, child cards and the leaf page share the same node",
  );
  assert.equal(page("/services/thermal/turbine/").image, "turbine-services");
  assert.equal(page("/services/thermal/").image, "thermal-plant");
  assert.equal(
    page("/services/thermal/boiler/").image,
    "detail-reference-3286",
  );
  assert.equal(
    catalogImage("Blade repair", "turbine-services"),
    "catalog-blading",
    "A named scope retains its specific photo",
  );
  assert.equal(
    tree.equipmentCategories.find((node) => node.slug === "thermal").image,
    "thermal-plant",
  );
});

test("every supplied service scope and part has one distinct page under its parent", () => {
  assert.equal(tree.allPages.length, 177);
  assert.equal(new Set(tree.allPages.map((n) => n.url)).size, 177);
  for (const service of services) {
    const page = tree.servicePages.find(
      (n) => n.url === `/services/${service.slug}/`,
    );
    assert.deepEqual(
      page.children.map((n) => n.title),
      service.scope,
    );
  }
  for (const group of equipment) {
    const cat = tree.equipmentCategories.find((n) => n.slug === group.group);
    assert.deepEqual(
      cat.children.map((n) => n.title),
      group.items.map((n) => n.title),
    );
    for (const item of group.items)
      assert.deepEqual(
        cat.children
          .find((n) => n.title === item.title)
          .children.map((n) => n.title),
        item.parts,
      );
  }
});
test("catalogue pages have valid parent paths, images and source context", () => {
  const urls = new Set([
    "/",
    "/services/",
    "/equipment/",
    ...tree.allPages.map((n) => n.url),
  ]);
  const dimensions = JSON.parse(
    fs.readFileSync("src/data/image-metadata.json", "utf8"),
  );
  for (const node of tree.allPages) {
    assert.ok(urls.has(node.parentUrl));
    assert.ok(
      node.breadcrumbs.every((b) => urls.has(b.url) && b.url !== node.url),
    );
    assert.ok(node.summary && node.source);
    assert.ok(fs.existsSync(`public/images/${node.image}.webp`));
    assert.ok(dimensions[node.image]?.width > 0);
    assert.ok(node.children.every((c) => c.parentUrl === node.url));
    if (node.level === "leaf") assert.ok(node.parentSummary);
  }
});
test("every prior category, service, scope and part destination maps to its canonical page", () => {
  for (const [key, url] of Object.entries(tree.legacy.serviceGroups))
    assert.equal(resolve("/services", `?group=${key}`), url);
  for (const [key, url] of Object.entries(tree.legacy.serviceItems))
    assert.equal(
      resolve("/services/", `?group=wrong&service=${key}&q=unmatched`),
      url,
    );
  for (const [key, url] of Object.entries(tree.legacy.serviceHashes))
    assert.equal(resolve("/services/", "", `#${key}`), url);
  for (const [key, url] of Object.entries(tree.legacy.equipmentGroups))
    assert.equal(resolve("/equipment", `?group=${key}`), url);
  for (const [key, url] of Object.entries(tree.legacy.equipmentHashes))
    assert.equal(resolve("/equipment/", "?group=wrong", `#${key}`), url);
  for (const [key, url] of Object.entries(tree.legacy.detailHashes)) {
    const [path, hash] = key.split("#");
    assert.equal(resolve(path, "", `#${hash}`), url);
  }
});
test("compatibility resolver rejects unknown, malformed and prototype keys and retains generic main anchor", () => {
  for (const key of [
    "__proto__",
    "constructor",
    "toString",
    "https://example.com",
    "unknown",
  ]) {
    assert.equal(
      resolve("/services/", `?group=${key}&service=${key}`, `#${key}`),
      null,
    );
    assert.equal(resolve("/equipment/", `?group=${key}`, `#${key}`), null);
  }
  assert.equal(resolve("/services/", "?group=Thermal", "#main"), null);
  assert.equal(resolve("/equipment/", "?group=hydro", "#%E0%A4%A"), null);
  assert.equal(resolve("/about/", "?group=Thermal"), null);
});
test("equipment fragment takes precedence over a stale group; explicit service takes precedence over stale fragment", () => {
  const part = tree.equipmentPages.find((n) => n.level === "leaf");
  const key = Object.keys(tree.legacy.equipmentHashes).find(
    (k) => tree.legacy.equipmentHashes[k] === part.url,
  );
  assert.equal(
    resolve("/equipment/", "?group=hydro&q=missing", `#${key}`),
    part.url,
  );
  assert.equal(
    resolve("/services/", "?service=hydro/turbine", "#scope-thermal-generator"),
    "/services/hydro/turbine/",
  );
});
test("photo matching does not confuse boiler with oil equipment", () => {
  assert.equal(
    catalogImage("Boiler & pressure parts", "thermal-plant"),
    "catalog-pipework",
  );
  assert.equal(
    catalogImage("Oil filtration", "thermal-plant"),
    "catalog-lubrication",
  );
  assert.equal(
    catalogImage("Generator spares & components", "thermal-plant"),
    "generator-hero",
  );
});

test("catalogue siblings have distinct supplied photos and explicit choices target real routes", () => {
  const urls = new Set(tree.allPages.map((node) => node.url));
  for (const url of Object.keys(catalogPhotos))
    assert.ok(urls.has(url), `Stale photo override: ${url}`);
  for (const node of tree.allPages.filter((node) => node.children.length > 1)) {
    const photos = node.children.map((child) =>
      createHash("sha256")
        .update(fs.readFileSync(`public/images/${child.image}.webp`))
        .digest("hex"),
    );
    assert.equal(
      new Set(photos).size,
      photos.length,
      `Repeated sibling photo: ${node.url}`,
    );
  }
});

import test from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
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

test("every supplied service scope and part has one distinct page under its parent", () => {
  assert.equal(tree.allPages.length, 178);
  assert.equal(new Set(tree.allPages.map((n) => n.url)).size, 178);
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

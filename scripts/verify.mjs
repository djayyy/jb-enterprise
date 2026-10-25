import fs from "node:fs";
import path from "node:path";
import assert from "node:assert/strict";
const root = path.resolve("dist");
function walk(dir) {
  return fs
    .readdirSync(dir, { withFileTypes: true })
    .flatMap((e) =>
      e.isDirectory() ? walk(path.join(dir, e.name)) : [path.join(dir, e.name)],
    );
}
const files = walk(root),
  pages = files.filter((f) => f.endsWith(".html")),
  titles = new Set();
let links = 0;
for (const page of pages) {
  const html = fs.readFileSync(page, "utf8");
  const ids = [...html.matchAll(/\sid="([^"]+)"/g)].map((m) => m[1]);
  assert.equal(new Set(ids).size, ids.length, `Duplicate IDs: ${page}`);
  for (const control of html.matchAll(/\saria-controls="([^"]+)"/g)) {
    for (const id of control[1].split(/\s+/))
      assert.ok(ids.includes(id), `Missing controlled element ${id}: ${page}`);
  }
  assert.equal(
    (html.match(/class="nav-dropdown(?: is-current)?"/g) || []).length,
    2,
    `Both grouped navigation menus: ${page}`,
  );
  const title = html.match(/<title>(.*?)<\/title>/s)?.[1];
  assert.ok(title, `Missing title: ${page}`);
  assert.ok(!titles.has(title), `Duplicate title: ${title}`);
  titles.add(title);
  assert.equal((html.match(/<h1[\s>]/g) || []).length, 1, `One h1: ${page}`);
  assert.match(html, /<meta name="robots" content="noindex,nofollow"/);
  assert.match(html, /<meta name="description" content="[^"]+"/);
  assert.doesNotMatch(html, /lorem ipsum|XX MW|action="#"/i);
  for (const image of html.matchAll(/<img\b[^>]*>/g)) {
    assert.match(image[0], /\balt="/);
    assert.match(image[0], /\bwidth="\d+"/);
    assert.match(image[0], /\bheight="\d+"/);
  }
  for (const match of html.matchAll(/\b(?:href|src|data-url)="([^"]+)"/g)) {
    const ref = match[1].replaceAll("&amp;", "&");
    if (!ref.startsWith("/") && !ref.startsWith("#")) continue;
    const pageRoute =
      "/" +
      path
        .relative(root, page)
        .replaceAll(path.sep, "/")
        .replace(/index\.html$/, "");
    const url = new URL(ref, "https://preview.invalid" + pageRoute);
    let target = path.join(root, decodeURIComponent(url.pathname));
    if (url.pathname.endsWith("/")) target = path.join(target, "index.html");
    assert.ok(fs.existsSync(target), `Broken link ${ref} in ${page}`);
    links++;
    if (url.hash && target.endsWith(".html")) {
      const targetHtml = fs.readFileSync(target, "utf8");
      assert.ok(
        targetHtml.includes(`id="${decodeURIComponent(url.hash.slice(1))}"`),
        `Missing anchor ${ref} in ${page}`,
      );
    }
  }
  if (/<form\b/.test(html)) {
    assert.match(html, /<form[^>]*method="dialog"/);
    assert.match(html, /Nothing is sent, uploaded or saved/);
  }
}
assert.equal(pages.length, 188, "Expected review routes");
assert.ok(
  !files.some((f) => /\/requirement\/|\/spec\//.test(f)),
  "Private source documents must not be deployed",
);
console.log(
  `PASS: ${pages.length} pages; ${links} local links/assets; unique titles; metadata; image attributes; preview form safeguards.`,
);

const home = fs.readFileSync(path.join(root, "index.html"), "utf8");
const about = fs.readFileSync(path.join(root, "about/index.html"), "utf8");
const hub = fs.readFileSync(path.join(root, "services/index.html"), "utf8");
for (const text of [
  "Turbine, Generator, Boiler",
  "OEM &amp; Non-OEM Turbine Generator Expertise",
  "Retrofitting &amp; Modernization Engineering",
  "Welcome to JB Advanced Engineering",
  "Why JBAEL?",
  "Core Engineering Services",
  "Industry Certifications",
]) {
  assert.ok(home.includes(text), `Missing source homepage section: ${text}`);
}
for (const text of [
  "What We Do",
  "Leadership Message",
  "Vision",
  "Mission",
  "Goal",
  "Skilled Field Services",
  "Inspection, Diagnostics",
]) {
  assert.ok(
    about.toLowerCase().includes(text.toLowerCase()),
    `Missing About source content: ${text}`,
  );
}
assert.equal(
  (home.match(/data-slide="/g) || []).length,
  3,
  "Three source hero themes",
);
assert.equal(
  (home.match(/<a[^>]*data-catalog-card/g) || []).length,
  13,
  "Ten core engineering capabilities and three equipment categories",
);
assert.equal(
  (home.match(/class="certificate-card"/g) || []).length,
  3,
  "Three certificate images",
);
for (const html of [home, about, hub]) {
  assert.match(html, /linkedin\.com\/company\/jbenterpriseindia/);
  for (const name of ["YouTube", "Facebook", "Instagram", "X \/ Twitter"])
    assert.ok(html.includes(name));
  assert.doesNotMatch(html, /href="#"/, "No fake destinations");
}
const parts = fs.readFileSync(path.join(root, "equipment/index.html"), "utf8");
for (const [html, count, label] of [
  [hub, 13, "services"],
  [parts, 12, "equipment groups"],
]) {
  assert.equal(
    (html.match(/<a[^>]*data-catalog-card/g) || []).length,
    count,
    `All ${label} listed`,
  );
  assert.equal(
    (html.match(/<section[^>]*data-catalog-group/g) || []).length,
    3,
    "Three source categories",
  );
  assert.doesNotMatch(
    html,
    /role="tabpanel"|data-family=/,
    "No hidden in-page category browser",
  );
  assert.match(html, /data-catalog-search/);
  assert.match(html, /data-catalog-empty/);
}
console.log(
  "PASS: source homepage, About, certificates, social destinations and complete service/equipment indexes.",
);

assert.doesNotMatch(
  home,
  /class="(?:core-index|industry-number)"|<span>0[123]<\/span>/,
  "No decorative home numbering",
);
assert.doesNotMatch(
  home,
  /Auto-rotate|Stop auto-rotate|data-play|data-rotation-status|equipment-shortcuts/,
);

assert.ok(
  home.indexOf('class="hero-pagination"') > home.indexOf('class="hero-stage"'),
  "Pagination follows artwork inside the hero stage",
);
assert.doesNotMatch(
  home,
  /class="(?:container hero-navigation|hero-theme-tabs)"/,
);
console.log(
  "PASS: V0.6 catalogue consistency, cascading menus, ARIA targets and retained in-banner pagination.",
);

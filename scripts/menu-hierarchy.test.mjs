import test from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import { pathToFileURL } from "node:url";
import ts from "typescript";
import { Element } from "domhandler";
import { appendChild, removeElement } from "domutils";
import { selectAll, selectOne, is } from "css-select";

// Semantic DOM + EventTarget fixture: executes the production Astro controller.
// This does not render CSS or simulate browser pointer geometry/native scrolling.
function node(tag, attrs = {}, children = []) {
  const n = new Element(tag, attrs, []),
    events = new EventTarget();
  const styles = new Map();
  Object.assign(n, {
    style: {
      setProperty: (k, v) => styles.set(k, v),
      removeProperty: (k) => styles.delete(k),
      getPropertyValue: (k) => styles.get(k) || "",
    },
    scrollHeight: 160,
    getBoundingClientRect() {
      const left = parseFloat(styles.get("left") || "400"),
        top = parseFloat(styles.get("top") || "100"),
        width = parseFloat(styles.get("width") || "272");
      return {
        left,
        top,
        width,
        bottom: top + 40,
        right: left + width,
        height: 40,
      };
    },
    removeAttribute: (k) => {
      delete n.attribs[k];
    },
    addEventListener: events.addEventListener.bind(events),
    dispatchEvent: events.dispatchEvent.bind(events),
    querySelector: (s) => selectOne(s, n.children),
    querySelectorAll: (s) => selectAll(s, n.children),
    matches: (s) => is(n, s, { pseudos: { hover: () => false } }),
    closest(s) {
      for (let p = n; p; p = p.parent) if (is(p, s)) return p;
      return null;
    },
    contains(other) {
      for (let p = other; p; p = p.parent) if (p === n) return true;
      return false;
    },
    getAttribute: (k) => n.attribs[k] ?? null,
    setAttribute: (k, v) => {
      n.attribs[k] = String(v);
    },
    append(child) {
      removeElement(child);
      appendChild(n, child);
    },
    focus() {
      globalThis.document.activeElement = n;
      send(n, "focus");
      for (let p = n; p; p = p.parent) send(p, "focusin", { target: n });
    },
    classList: { remove() {} },
    dataset: Object.fromEntries(
      Object.entries(attrs)
        .filter(([k]) => k.startsWith("data-"))
        .map(([k, v]) => [
          k.slice(5).replace(/-([a-z])/g, (_, c) => c.toUpperCase()),
          v,
        ]),
    ),
  });
  for (const name of ["hidden", "open"])
    Object.defineProperty(n, name, {
      get: () => name in n.attribs,
      set: (value) => {
        if (value) n.attribs[name] = "";
        else delete n.attribs[name];
      },
    });
  children.forEach((c) => n.append(c));
  return n;
}
function send(n, type, props = {}) {
  const e = new Event(type, { cancelable: true });
  for (const [k, v] of Object.entries({ target: n, ...props }))
    Object.defineProperty(e, k, { value: v });
  n.dispatchEvent(e);
  return e;
}
const click = (n, props = {}) =>
  send(n, "click", { button: 0, detail: 1, pointerType: "touch", ...props });
function dropdown(kind) {
  const summary = node("summary");
  const categories = [0, 1, 2].map((g) =>
    node(
      "div",
      { class: "menu-category-row", "data-menu-category-row": String(g) },
      [
        node("a", {
          href: `/${kind}/${g}/`,
          "data-menu-category": String(g),
          "aria-expanded": "false",
        }),
        node("button", {
          "data-menu-category-toggle": String(g),
          "aria-expanded": "false",
        }),
      ],
    ),
  );
  const groups = categories.map((_, g) => {
    const items = [0, 1].map((i) =>
      node("li", { "data-menu-item": `${g}-${i}` }, [
        node("a", {
          href: `/${kind}/${g}/${i}/`,
          "data-menu-item-link": "",
          "aria-expanded": "false",
        }),
        node("button", { "aria-expanded": "false" }),
      ]),
    );
    const scopes = items.map((_, i) =>
      node("div", { "data-menu-scope": `${g}-${i}` }, [
        node("p", {}, [node("a", { href: `/${kind}/${g}/` })]),
        node("ul", {}, [
          node("li", {}, [node("a", { href: `/${kind}/${g}/${i}/leaf/` })]),
        ]),
      ]),
    );
    return node("section", { "data-menu-group-panel": String(g) }, [
      node("ul", {}, items),
      ...scopes,
    ]);
  });
  const browser = node("div", { class: "menu-browser" }, [
    node("div", {}, categories),
    ...groups,
  ]);
  return {
    root: node("details", { "data-nav-dropdown": "" }, [
      summary,
      node("div", { class: "mega-menu" }, [browser]),
    ]),
    summary,
    categories,
    groups,
    browser,
  };
}
async function fixture(t, mobile) {
  const saved = ["document", "matchMedia", "window"].map((k) => [
    k,
    Object.getOwnPropertyDescriptor(globalThis, k),
  ]);
  const menus = [dropdown("services"), dropdown("equipment")];
  const doc = node(
    "main",
    {},
    menus.map((m) => m.root),
  );
  const compact = Object.assign(new EventTarget(), { matches: mobile });
  const desktop = Object.assign(new EventTarget(), { matches: !mobile });
  doc.documentElement = { clientWidth: 1440 };
  globalThis.document = doc;
  globalThis.window = Object.assign(new EventTarget(), { innerHeight: 900 });
  globalThis.matchMedia = (q) => (q.includes("max-width") ? compact : desktop);
  t.after(() =>
    saved.forEach(([k, d]) =>
      d ? Object.defineProperty(globalThis, k, d) : delete globalThis[k],
    ),
  );
  let code = fs
    .readFileSync("src/components/NavigationDropdown.astro", "utf8")
    .match(/<script>([\s\S]*?)<\/script>/)[1];
  code = code.replace(
    '"../lib/menu-interaction.mjs"',
    JSON.stringify(
      pathToFileURL(process.cwd() + "/src/lib/menu-interaction.mjs").href,
    ),
  );
  code = code.replace(
    '"../lib/menu-position.mjs"',
    JSON.stringify(
      pathToFileURL(process.cwd() + "/src/lib/menu-position.mjs").href,
    ),
  );
  code = ts.transpileModule(code, {
    compilerOptions: {
      module: ts.ModuleKind.ESNext,
      target: ts.ScriptTarget.ES2022,
    },
  }).outputText;
  await import(
    `data:text/javascript;base64,${Buffer.from(code).toString("base64")}#${t.name}`
  );
  return {
    menus,
    doc,
    resize(mobile) {
      compact.matches = mobile;
      desktop.matches = !mobile;
      compact.dispatchEvent(new Event("change"));
      desktop.dispatchEvent(new Event("change"));
    },
  };
}
const items = (g) => g.querySelectorAll("[data-menu-item]");
const scopes = (g) => g.querySelectorAll("[data-menu-scope]");
const expanded = (n) => n.getAttribute("aria-expanded") === "true";

test("both mobile menus nest every group and scope under its own parent and toggle independently", async (t) => {
  const f = await fixture(t, true);
  for (const m of f.menus) {
    click(m.summary);
    assert.equal(m.root.open, true);
    m.groups.forEach((g, gi) => {
      assert.equal(g.parent, m.categories[gi]);
      assert.equal(g.hidden, true);
      scopes(g).forEach((s) =>
        assert.equal(s.parent.dataset.menuItem, s.dataset.menuScope),
      );
    });
    click(m.categories[0].querySelector("button"));
    assert.equal(m.groups[0].hidden, false);
    assert.equal(expanded(m.categories[0].querySelector("a")), true);
    assert.ok(scopes(m.groups[0]).every((s) => s.hidden));
    const rows = items(m.groups[0]);
    click(rows[0].querySelector("button"));
    assert.equal(scopes(m.groups[0])[0].hidden, false);
    click(rows[1].querySelector("button"));
    assert.equal(scopes(m.groups[0])[0].hidden, true);
    assert.equal(expanded(rows[0].querySelector("a")), false);
    assert.equal(scopes(m.groups[0])[1].hidden, false);
    click(m.categories[1].querySelector("button"));
    assert.equal(m.groups[0].hidden, true);
    assert.ok(scopes(m.groups[0]).every((s) => s.hidden));
    assert.ok(scopes(m.groups[1]).every((s) => s.hidden));
    click(m.categories[1].querySelector("button"));
    assert.ok(m.groups.every((g) => g.hidden));
    assert.equal(
      f.doc.activeElement,
      undefined,
      "taps never move focus programmatically",
    );
  }
  assert.equal(f.menus[0].root.open, false);
});
test("desktop fleeting hover preserves the branch, sustained hover reveals it, dismiss cancels pending work", async (t) => {
  t.mock.timers.enable({ apis: ["setTimeout"] });
  const {
    menus: [m],
  } = await fixture(t, false);
  send(m.root, "pointerenter", { pointerType: "mouse" });
  send(m.categories[1], "pointerenter", { pointerType: "mouse" });
  t.mock.timers.tick(100);
  send(m.categories[1], "pointerleave");
  t.mock.timers.tick(200);
  assert.ok(m.groups.every((g) => g.hidden));
  send(m.categories[1], "pointerenter", { pointerType: "mouse" });
  t.mock.timers.tick(180);
  assert.equal(m.groups[1].hidden, false);
  const rows = items(m.groups[1]);
  send(rows[1], "pointerenter", { pointerType: "mouse" });
  t.mock.timers.tick(180);
  assert.equal(scopes(m.groups[1])[1].hidden, false);
  assert.equal(expanded(m.categories[1].querySelector("a")), true);
  assert.equal(expanded(rows[1].querySelector("a")), true);
  send(m.categories[2], "pointerenter", { pointerType: "mouse" });
  send(m.root, "keydown", { key: "Escape" });
  t.mock.timers.tick(300);
  assert.equal(m.root.open, false);
  assert.equal(m.groups[2].hidden, true);
});
test("keyboard previews immediately, category changes reset child context and touch does not trigger hover", async (t) => {
  t.mock.timers.enable({ apis: ["setTimeout"] });
  const {
    menus: [m],
  } = await fixture(t, false);
  click(m.summary);
  m.categories[1].querySelector("a").focus();
  assert.equal(m.groups[1].hidden, false);
  items(m.groups[1])[1].querySelector("a").focus();
  assert.equal(scopes(m.groups[1])[1].hidden, false);
  const row = items(m.groups[1])[1];
  send(row, "keydown", { key: "ArrowRight", target: row.querySelector("a") });
  assert.equal(
    globalThis.document.activeElement,
    scopes(m.groups[1])[1].querySelector("li a"),
    "Right arrow enters a real child link, not an ancestor heading",
  );
  send(scopes(m.groups[1])[1], "keydown", { key: "ArrowLeft" });
  assert.equal(globalThis.document.activeElement, row.querySelector("a"));
  m.categories[2].querySelector("a").focus();
  m.categories[1].querySelector("a").focus();
  assert.ok(scopes(m.groups[1]).every((s) => s.hidden));
  send(m.categories[0], "pointerenter", { pointerType: "touch" });
  t.mock.timers.tick(500);
  assert.equal(m.groups[1].hidden, false);
});
test("resizing restores the same nodes and links without duplication; modified clicks remain native", async (t) => {
  const f = await fixture(t, false),
    m = f.menus[0];
  const nodes = m.root.querySelectorAll("a");
  const urls = nodes.map((n) => n.getAttribute("href")).sort();
  for (const mobile of [true, false, true, false]) {
    f.resize(mobile);
    m.groups.forEach((g, i) => {
      assert.equal(g.parent, mobile ? m.categories[i] : m.browser);
      scopes(g).forEach((s) =>
        assert.equal(
          mobile ? s.parent.dataset.menuItem : s.parent,
          mobile ? s.dataset.menuScope : g,
        ),
      );
    });
    assert.deepEqual(
      m.root
        .querySelectorAll("a")
        .map((n) => n.getAttribute("href"))
        .sort(),
      urls,
    );
    assert.ok(nodes.every((n) => m.root.contains(n)));
  }
  click(m.summary);
  const link = scopes(m.groups[0])[0].querySelector("a");
  assert.equal(click(link, { metaKey: true }).defaultPrevented, false);
  assert.equal(m.root.open, true);
  assert.equal(click(link).defaultPrevented, false);
  assert.equal(m.root.open, false);
});

test("both menus open sequentially with no default category, item or remembered branch", async (t) => {
  const f = await fixture(t, false);
  for (const mobile of [false, true]) {
    f.resize(mobile);
    for (const m of f.menus) {
      click(m.summary);
      assert.ok(m.groups.every((g) => g.hidden));
      assert.ok(
        m.root.querySelectorAll("[aria-expanded]").every((n) => !expanded(n)),
      );
      click(m.categories[2].querySelector("button"));
      assert.equal(m.groups[2].hidden, false);
      assert.ok(
        scopes(m.groups[2]).every((s) => s.hidden),
        "category opens only one level",
      );
      click(items(m.groups[2])[1].querySelector("button"));
      assert.equal(scopes(m.groups[2])[1].hidden, false);
      assert.equal(scopes(m.groups[2])[0].hidden, true);
      click(m.categories[0].querySelector("button"));
      assert.ok(
        m.groups.every((g) => scopes(g).every((s) => s.hidden)),
        "changing category clears descendants",
      );
      click(items(m.groups[0])[0].querySelector("button"));
      send(m.root, "keydown", { key: "Escape" });
      click(m.summary);
      assert.equal(m.root.open, true);
      assert.ok(
        m.groups.every((g) => g.hidden),
        "reopening does not restore a default or previous branch",
      );
    }
  }
});

test("desktop dropdown is anchored to its trigger and mobile removes all fixed placement", async (t) => {
  const f = await fixture(t, false);
  for (const m of f.menus) {
    click(m.summary);
    const menu = m.root.querySelector(".mega-menu");
    assert.equal(menu.style.getPropertyValue("left"), "400px");
    assert.equal(menu.style.getPropertyValue("top"), "140px");
    assert.equal(menu.style.getPropertyValue("width"), "272px");
    click(m.categories[0].querySelector("button"));
    click(items(m.groups[0])[0].querySelector("button"));
    assert.ok(m.groups[0].style.getPropertyValue("left"));
    assert.ok(scopes(m.groups[0])[0].style.getPropertyValue("left"));
  }
  f.resize(true);
  for (const m of f.menus) {
    for (const panel of [
      m.root.querySelector(".mega-menu"),
      ...m.groups,
      ...m.root.querySelectorAll("[data-menu-scope]"),
    ]) {
      for (const key of [
        "position",
        "left",
        "top",
        "width",
        "max-height",
        "--menu-available-height",
      ])
        assert.equal(panel.style.getPropertyValue(key), "", key);
    }
  }
});

test("open menu remains beneath its trigger after header alignment and child expansion", async (t) => {
  const f = await fixture(t, false);
  const m = f.menus[1];
  m.summary.style.setProperty("left", "900px");
  click(m.summary);
  const menu = m.root.querySelector(".mega-menu");
  assert.equal(menu.style.getPropertyValue("left"), "900px");
  m.summary.style.setProperty("left", "768px");
  f.doc.dispatchEvent(new Event("navigationlayout"));
  assert.equal(menu.style.getPropertyValue("left"), "768px");
  click(m.categories[0].querySelector("button"));
  click(items(m.groups[0])[0].querySelector("button"));
  assert.equal(menu.style.getPropertyValue("left"), "768px");
  const group = m.groups[0];
  assert.equal(parseFloat(group.style.getPropertyValue("left")), 968);
  assert.equal(
    parseFloat(scopes(group)[0].style.getPropertyValue("left")),
    1168,
  );
});

import test from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import { pathToFileURL } from "node:url";
import ts from "typescript";

// Execute the actual Astro controller in an event fixture, not a rendering engine.
function element() {
  const el = new EventTarget(),
    classes = new Set(),
    attrs = new Map();
  Object.assign(el, {
    dataset: {},
    textContent: "",
    href: "",
    clientWidth: 390,
    classList: {
      add: (...names) => names.forEach((n) => classes.add(n)),
      remove: (...names) => names.forEach((n) => classes.delete(n)),
      contains: (name) => classes.has(name),
      toggle: (name, on) => (on ? classes.add(name) : classes.delete(name)),
    },
    style: {
      setProperty(name, value) {
        this[name] = value;
      },
      removeProperty(name) {
        delete this[name];
      },
    },
    setAttribute: (name, value) => attrs.set(name, value),
    getAttribute: (name) => attrs.get(name),
    focus: () => {},
    setPointerCapture: () => {},
    hasPointerCapture: () => false,
    animate: () => ({ finished: Promise.resolve(), cancel: () => {} }),
  });
  return el;
}
function send(el, type, props = {}) {
  const event = new Event(type, { cancelable: true });
  for (const [key, value] of Object.entries(props))
    Object.defineProperty(event, key, { value });
  el.dispatchEvent(event);
  return event;
}
async function fixture(t, reduced = false) {
  const previous = Object.fromEntries(
    ["document", "window", "matchMedia", "ResizeObserver"].map((k) => [
      k,
      Object.getOwnPropertyDescriptor(globalThis, k),
    ]),
  );
  const root = element(),
    stage = element(),
    title = element(),
    description = element(),
    link = element(),
    status = element();
  const next = element(),
    back = element(),
    photos = [element(), element(), element()],
    dots = [element(), element(), element()];
  const titles = [
    "Turbine, Generator, Boiler",
    "OEM & Non-OEM Turbine Generator Expertise",
    "Retrofitting & Modernization Engineering",
  ];
  const urls = [
    "/services/thermal/",
    "/services/specialist/",
    "/services/refurbishment/",
  ];
  dots.forEach((dot, i) =>
    Object.assign(dot.dataset, {
      title: titles[i],
      description: `Description ${i}`,
      url: urls[i],
    }),
  );
  const nodes = {
    ".hero-stage": stage,
    "#hero-title": title,
    "#hero-description": description,
    "[data-hero-service]": link,
    "[data-slide-status]": status,
    "[data-next]": next,
    "[data-previous]": back,
  };
  root.querySelector = (selector) => nodes[selector];
  root.querySelectorAll = (selector) =>
    selector === "[data-slide]" ? dots : photos;
  const media = Object.assign(new EventTarget(), { matches: reduced });
  globalThis.document = {
    querySelector: (selector) => (selector === "[data-carousel]" ? root : null),
  };
  globalThis.window = new EventTarget();
  globalThis.matchMedia = () => media;
  globalThis.ResizeObserver = class {
    observe() {}
  };
  t.after(() => {
    for (const [key, desc] of Object.entries(previous)) {
      if (desc) Object.defineProperty(globalThis, key, desc);
      else delete globalThis[key];
    }
  });
  let code = fs
    .readFileSync("src/components/HeroSlider.astro", "utf8")
    .match(/<script>([\s\S]*?)<\/script>/)[1];
  code = code.replace(
    '"../lib/swipe.mjs"',
    JSON.stringify(pathToFileURL(process.cwd() + "/src/lib/swipe.mjs").href),
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
  const assertSlide = (i) => {
    assert.equal(title.textContent, titles[i]);
    assert.equal(description.textContent, `Description ${i}`);
    assert.equal(link.href, urls[i]);
    assert.equal(status.textContent, titles[i]);
    dots.forEach((d, j) =>
      assert.equal(d.getAttribute("aria-pressed"), String(i === j)),
    );
    photos.forEach((p, j) =>
      assert.equal(p.classList.contains("is-active"), i === j),
    );
  };
  const swipe = (dx) => {
    const pointer = {
      pointerId: 1,
      isPrimary: true,
      button: 0,
      clientX: 200,
      clientY: 100,
    };
    send(stage, "pointerdown", pointer);
    send(stage, "pointermove", { ...pointer, clientX: 200 + dx });
    send(stage, "pointerup", { ...pointer, clientX: 200 + dx });
  };
  return { stage, photos, dots, next, back, assertSlide, swipe };
}
test("actual hero controller wraps all three banners and synchronizes headings, CTA and dots", async (t) => {
  const f = await fixture(t);
  send(f.next, "click");
  f.assertSlide(1);
  send(f.next, "click");
  f.assertSlide(2);
  send(f.next, "click");
  f.assertSlide(0);
  send(f.back, "click");
  f.assertSlide(2);
  send(f.dots[0], "click");
  f.assertSlide(0);
  send(f.dots[0], "keydown", { key: "End" });
  f.assertSlide(2);
  send(f.dots[2], "keydown", { key: "Home" });
  f.assertSlide(0);
  await new Promise((resolve) => setImmediate(resolve));
  assert.equal(f.stage.classList.contains("is-changing"), false);
});
test("actual hero swipe wraps, short drag returns and reduced motion skips animation", async (t) => {
  const f = await fixture(t, true);
  let animations = 0;
  f.photos.forEach(
    (p) =>
      (p.animate = () => {
        animations++;
        throw new Error("Reduced motion must not animate");
      }),
  );
  f.swipe(-100);
  f.assertSlide(1);
  f.swipe(-100);
  f.assertSlide(2);
  f.swipe(-100);
  f.assertSlide(0);
  f.swipe(100);
  f.assertSlide(2);
  f.swipe(-20);
  f.assertSlide(2);
  assert.equal(animations, 0);
  assert.equal(f.stage.classList.contains("is-dragging"), false);
});

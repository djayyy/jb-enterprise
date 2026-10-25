import test from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import ts from "typescript";

// Unit fixtures for delayed arrival scheduling, not a browser/geometry test.
const code = ts.transpileModule(
  fs.readFileSync("src/lib/scroll-target.ts", "utf8"),
  {
    compilerOptions: {
      module: ts.ModuleKind.ESNext,
      target: ts.ScriptTarget.ES2022,
    },
  },
).outputText;
async function fixture(t) {
  const original = Object.fromEntries(
    ["window", "document", "requestAnimationFrame", "matchMedia"].map((k) => [
      k,
      Object.getOwnPropertyDescriptor(globalThis, k),
    ]),
  );
  const scrolls = [];
  let ready;
  const fonts = new Promise((resolve) => {
    ready = resolve;
  });
  const win = new EventTarget();
  Object.assign(win, {
    scrollY: 0,
    scrollTo: (options) => scrolls.push(options.top),
  });
  globalThis.window = win;
  globalThis.document = {
    readyState: "complete",
    fonts: { ready: fonts },
    querySelector: () => ({ getBoundingClientRect: () => ({ height: 90 }) }),
    getElementById: (id) => ({
      getClientRects: () => [1],
      getBoundingClientRect: () => ({ top: id === "first" ? 500 : 900 }),
    }),
  };
  globalThis.requestAnimationFrame = (fn) => fn();
  globalThis.matchMedia = () => ({ matches: false });
  const mod = await import(
    `data:text/javascript;base64,${Buffer.from(code).toString("base64")}#${t.name}`
  );
  t.after(() => {
    mod.cancelPendingArrival();
    for (const [key, desc] of Object.entries(original)) {
      if (desc) Object.defineProperty(globalThis, key, desc);
      else delete globalThis[key];
    }
  });
  return {
    mod,
    win,
    scrolls,
    ready: async () => {
      ready();
      await fonts;
      await Promise.resolve();
    },
  };
}
test("a newer destination replaces a pending font-dependent arrival", async (t) => {
  const f = await fixture(t);
  f.mod.settleTarget("first");
  f.mod.settleTarget("second");
  await f.ready();
  assert.deepEqual(f.scrolls, [786]);
});
test("visitor interaction cancels a deferred automatic scroll", async (t) => {
  const f = await fixture(t);
  f.mod.settleTarget("first");
  f.win.dispatchEvent(new Event("wheel"));
  await f.ready();
  assert.deepEqual(f.scrolls, []);
});
test("explicit category navigation cancels an older automatic arrival", async (t) => {
  const f = await fixture(t);
  f.mod.settleTarget("first");
  f.mod.revealTarget("second");
  await f.ready();
  assert.deepEqual(f.scrolls, [786]);
});

import test from "node:test";
import assert from "node:assert/strict";
import {
  cascadeLayout,
  flyoutPosition,
  navigationMargin,
  alignHeaderNavigation,
} from "../src/lib/menu-position.mjs";

test("the root stays under its trigger and the full branch opens right", () => {
  const p = cascadeLayout(1600, 300);
  assert.equal(p.left, 300);
  assert.equal(p.side, "right");
  assert.equal(p.groupWidth, 256);
  assert.equal(p.scopeWidth, 320);
});
test("a crowded anchor stays vertically aligned while child widths adapt", () => {
  const p = cascadeLayout(1440, 800);
  assert.equal(p.side, "right");
  assert.equal(p.left, 800);
  assert.ok(Math.abs(p.groupWidth - 200 * (628 / 660)) < 1e-8);
  assert.ok(Math.abs(p.scopeWidth - 260 * (628 / 660)) < 1e-8);
  assert.equal(p.left + p.rootWidth + p.groupWidth + p.scopeWidth, 1428);
});
test("viewport-edge and central triggers keep all three panels in bounds without ancestor overlap", () => {
  for (const viewport of [1001, 1024, 1280, 1440, 1920]) {
    for (const anchor of [
      0,
      200,
      viewport / 2 - 136,
      viewport - 150,
      viewport,
    ]) {
      const p = cascadeLayout(viewport, anchor);
      assert.equal(p.side, "right");
      const groupLeft = p.left + p.rootWidth;
      const scopeLeft = groupLeft + p.groupWidth;
      for (const [left, width] of [
        [p.left, p.rootWidth],
        [groupLeft, p.groupWidth],
        [scopeLeft, p.scopeWidth],
      ]) {
        assert.ok(left >= 12 - 1e-8);
        assert.ok(left + width <= viewport - 12 + 1e-8);
      }
      if (anchor >= 12 && anchor < viewport - 13) {
        assert.equal(p.left, anchor, "root stays beneath its actual trigger");
      }
      assert.ok(p.groupWidth > 0 && p.scopeWidth > p.groupWidth);
    }
  }
});
test("short panels align with the parent row; long ones fit below the header with a scroll cap", () => {
  const args = {
    parentLeft: 500,
    parentWidth: 272,
    rowTop: 300,
    width: 256,
    viewportHeight: 900,
    side: "right",
    topBoundary: 140,
  };
  assert.deepEqual(flyoutPosition({ ...args, height: 180 }), {
    left: 772,
    top: 300,
    maxHeight: 748,
  });
  assert.deepEqual(flyoutPosition({ ...args, height: 1200 }), {
    left: 772,
    top: 140,
    maxHeight: 748,
  });
  assert.equal(flyoutPosition({ ...args, height: 180, rowTop: 850 }).top, 708);
  assert.equal(flyoutPosition({ ...args, height: 180 }).left, 772);
});

test("header shifts only enough to fit the branch and preserves logo clearance", () => {
  const metrics = {
    viewportWidth: 1440,
    equipmentLeft: 900,
    firstLinkLeft: 640,
    brandRight: 350,
  };
  const margin = navigationMargin(metrics);
  assert.equal(margin, 132);
  const layout = cascadeLayout(1440, metrics.equipmentLeft - margin);
  assert.equal(layout.left, 768);
  assert.equal(layout.rootWidth + layout.groupWidth + layout.scopeWidth, 660);
  assert.ok(metrics.firstLinkLeft - margin - metrics.brandRight >= 32);
  assert.equal(navigationMargin({ ...metrics, equipmentLeft: 700 }), 56);
  assert.equal(navigationMargin({ ...metrics, firstLinkLeft: 400 }), 18);
  assert.equal(navigationMargin({ ...metrics, firstLinkLeft: 370 }), 0);
});

test("header measurement is repeatable and mobile clears its spacing override", () => {
  let margin = 0;
  let inline = "";
  const quote = {
    style: {
      setProperty(name, value) {
        assert.equal(name, "margin-left");
        inline = value;
        margin = parseFloat(value);
      },
      removeProperty(name) {
        assert.equal(name, "margin-left");
        inline = "";
        margin = 0;
      },
    },
  };
  const firstLink = { getBoundingClientRect: () => ({ left: 640 - margin }) };
  const equipment = { getBoundingClientRect: () => ({ left: 900 - margin }) };
  const nav = {
    querySelector: (selector) =>
      selector.includes(".button") ? quote : firstLink,
    querySelectorAll: () => [{}, equipment],
  };
  const brand = { getBoundingClientRect: () => ({ right: 350 }) };
  const args = { nav, brand, viewportWidth: 1440, compact: false };
  alignHeaderNavigation(args);
  assert.equal(inline, "132px");
  alignHeaderNavigation(args);
  assert.equal(inline, "132px", "no cumulative left drift");
  alignHeaderNavigation({ ...args, viewportWidth: 1920 });
  assert.equal(inline, "56px", "extra shift released on wider screens");
  alignHeaderNavigation({ ...args, compact: true });
  assert.equal(inline, "");
  alignHeaderNavigation(args);
  assert.equal(inline, "132px", "desktop restored after mobile");
});

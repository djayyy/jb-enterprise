import test from "node:test";
import assert from "node:assert/strict";
import {
  bindDropdownTrigger,
  bindMenuFocusDismissal,
} from "../src/lib/menu-interaction.mjs";
const emit = (target, type, props = {}) => {
  const e = new Event(type, { cancelable: true });
  for (const [k, v] of Object.entries(props))
    Object.defineProperty(e, k, { value: v });
  target.dispatchEvent(e);
  return e;
};
test("mobile focus loss never dismisses an open menu, including a null focus target", () => {
  const container = new EventTarget();
  container.contains = () => false;
  let closes = 0;
  bindMenuFocusDismissal(
    container,
    () => false,
    () => closes++,
  );
  emit(container, "focusout", { relatedTarget: null });
  emit(container, "focusout", { relatedTarget: {} });
  assert.equal(closes, 0);
});
test("desktop focus only dismisses when a real external destination receives focus", () => {
  const container = new EventTarget(),
    inside = {};
  container.contains = (n) => n === inside;
  let closes = 0;
  bindMenuFocusDismissal(
    container,
    () => true,
    () => closes++,
  );
  emit(container, "focusout", { relatedTarget: null });
  emit(container, "focusout", { relatedTarget: inside });
  assert.equal(closes, 0);
  emit(container, "focusout", { relatedTarget: {} });
  assert.equal(closes, 1);
});
test("mobile summary taps toggle synchronously and prevent a second native toggle", () => {
  const summary = new EventTarget(),
    details = { open: false };
  bindDropdownTrigger(summary, details, {
    hoverMode: () => false,
    open: () => (details.open = true),
    close: () => (details.open = false),
  });
  assert.equal(
    emit(summary, "click", { detail: 1, pointerType: "touch" })
      .defaultPrevented,
    true,
  );
  assert.equal(details.open, true);
  emit(summary, "click", { detail: 1, pointerType: "touch" });
  assert.equal(details.open, false);
});
test("rapid switching between Services and Equipment keeps only the requested menu open", () => {
  const items = [0, 1].map(() => ({ summary: new EventTarget(), open: false }));
  for (const d of items)
    bindDropdownTrigger(d.summary, d, {
      hoverMode: () => false,
      open: () => items.forEach((x) => (x.open = x === d)),
      close: () => (d.open = false),
    });
  for (const index of [0, 1, 0, 1]) {
    emit(items[index].summary, "click", { detail: 1, pointerType: "touch" });
    assert.equal(items[index].open, true);
    assert.equal(items[1 - index].open, false);
  }
});
test("desktop pointer click preserves hover opening while keyboard and touch can toggle closed", () => {
  const summary = new EventTarget(),
    details = { open: true };
  bindDropdownTrigger(summary, details, {
    hoverMode: () => true,
    open: () => (details.open = true),
    close: () => (details.open = false),
  });
  emit(summary, "click", { detail: 1, pointerType: "mouse" });
  assert.equal(details.open, true);
  emit(summary, "click", { detail: 0 });
  assert.equal(details.open, false);
  emit(summary, "click", { detail: 1, pointerType: "touch" });
  assert.equal(details.open, true);
  emit(summary, "click", { detail: 1, pointerType: "touch" });
  assert.equal(details.open, false);
});

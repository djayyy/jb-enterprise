import test from "node:test";
import assert from "node:assert/strict";
import { bindSwipe } from "../src/lib/swipe.mjs";

function fixture(width = 390) {
  const surface = new EventTarget();
  const captured = new Set(),
    moves = [],
    ends = [];
  let starts = 0,
    cancels = 0;
  Object.assign(surface, {
    clientWidth: width,
    setPointerCapture: (id) => captured.add(id),
    hasPointerCapture: (id) => captured.has(id),
    releasePointerCapture: (id) => captured.delete(id),
  });
  const cancel = bindSwipe(surface, {
    onStart: () => starts++,
    onMove: (x) => moves.push(x),
    onEnd: (...args) => ends.push(args),
    onCancel: () => cancels++,
  });
  const send = (type, props = {}) => {
    const event = new Event(type, { cancelable: true });
    for (const [key, value] of Object.entries({
      pointerId: 1,
      isPrimary: true,
      button: 0,
      clientX: 200,
      clientY: 100,
      detail: 1,
      ...props,
    }))
      Object.defineProperty(event, key, { value });
    surface.dispatchEvent(event);
    return event;
  };
  return {
    send,
    cancel,
    captured,
    moves,
    ends,
    get starts() {
      return starts;
    },
    get cancels() {
      return cancels;
    },
  };
}
test("touch swipe and mouse drag select the corresponding direction once", () => {
  for (const pointerType of ["touch", "mouse", "pen"]) {
    const f = fixture();
    f.send("pointerdown", { pointerType });
    assert.equal(
      f.send("pointermove", { pointerType, clientX: 100 }).defaultPrevented,
      true,
    );
    f.send("pointerup", { pointerType, clientX: 100 });
    assert.deepEqual(f.ends, [[1, -100]]);
    assert.equal(f.captured.size, 0);
    f.send("pointerdown", { pointerType });
    f.send("pointermove", { clientX: 300 });
    f.send("pointerup");
    assert.deepEqual(f.ends.at(-1), [-1, 100]);
  }
});
test("vertical and ambiguous diagonal movements remain native page scrolling", () => {
  for (const [clientX, clientY] of [
    [205, 170],
    [220, 120],
  ]) {
    const f = fixture();
    f.send("pointerdown");
    assert.equal(
      f.send("pointermove", { clientX, clientY }).defaultPrevented,
      false,
    );
    f.send("pointermove", { clientX: 20 });
    f.send("pointerup");
    assert.equal(f.starts, 0);
    assert.deepEqual(f.ends, []);
    assert.equal(f.captured.size, 0);
  }
});
test("tap does not start a gesture; short horizontal motion returns to current slide", () => {
  const f = fixture();
  f.send("pointerdown");
  f.send("pointermove", { clientX: 197 });
  f.send("pointerup");
  assert.equal(f.starts, 0);
  assert.deepEqual(f.ends, []);
  f.send("pointerdown");
  f.send("pointermove", { clientX: 175 });
  f.send("pointerup");
  assert.deepEqual(f.ends, [[0, -25]]);
});
test("links and controls retain their native taps/clicks", () => {
  for (const tag of ["a", "button", "input", "summary"]) {
    const f = fixture();
    f.send("pointerdown", { target: { closest: () => ({ tagName: tag }) } });
    f.send("pointermove", { clientX: 50 });
    f.send("pointerup");
    assert.deepEqual(f.ends, []);
    assert.equal(f.send("click").defaultPrevented, false);
  }
});
test("right button, unrelated pointer and pinch do not change a slide", () => {
  const f = fixture();
  f.send("pointerdown", { button: 2 });
  f.send("pointermove", { clientX: 20 });
  f.send("pointerup");
  assert.deepEqual(f.ends, []);
  f.send("pointerdown");
  f.send("pointermove", { pointerId: 2, clientX: 20 });
  assert.equal(f.starts, 0);
  f.send("pointermove", { clientX: 100 });
  f.send("pointerdown", { pointerId: 2, isPrimary: false });
  f.send("pointerup");
  assert.equal(f.cancels, 1);
  assert.deepEqual(f.ends, []);
  assert.equal(f.captured.size, 0);
});
test("pointer cancellation, capture loss and resize cancellation discard active drag", () => {
  for (const reason of ["pointercancel", "lostpointercapture", "external"]) {
    const f = fixture();
    f.send("pointerdown");
    f.send("pointermove", { clientX: 100 });
    if (reason === "external") f.cancel();
    else f.send(reason);
    f.send("pointerup");
    assert.equal(f.cancels, 1);
    assert.deepEqual(f.ends, []);
  }
});
test("drag completion suppresses its synthetic click but allows keyboard and next genuine click", () => {
  const f = fixture();
  f.send("pointerdown");
  f.send("pointermove", { clientX: 100 });
  f.send("pointerup");
  assert.equal(f.send("click", { detail: 0 }).defaultPrevented, false);
  assert.equal(f.send("click").defaultPrevented, true);
  f.send("pointerdown", { target: { closest: () => ({ tagName: "a" }) } });
  assert.equal(f.send("click").defaultPrevented, false);
});
test("desktop threshold is capped; leaving before a drag does not capture or navigate", () => {
  const f = fixture(1440);
  f.send("pointerdown");
  f.send("pointermove", { clientX: 90 });
  f.send("pointerup");
  assert.deepEqual(f.ends, [[1, -110]]);
  f.send("pointerdown");
  f.send("pointerleave");
  f.send("pointermove", { clientX: 10 });
  f.send("pointerup");
  assert.equal(f.ends.length, 1);
});

/** Primary-pointer horizontal swipe recognizer; no browser globals or timers. */
export function bindSwipe(surface, { onStart, onMove, onEnd, onCancel }) {
  let gesture = null;
  let suppressClick = false;
  const release = (id) => {
    if (surface.hasPointerCapture?.(id)) surface.releasePointerCapture(id);
  };
  const cancel = () => {
    if (!gesture) return;
    const previous = gesture;
    gesture = null;
    release(previous.id);
    if (previous.axis === "horizontal") onCancel();
  };
  surface.addEventListener("pointerdown", (event) => {
    suppressClick = false;
    if (!event.isPrimary) {
      cancel();
      return;
    }
    if (event.button !== 0 || gesture) return;
    if (
      event.target.closest?.(
        "a,button,input,select,textarea,summary,[contenteditable=true]",
      )
    )
      return;
    gesture = {
      id: event.pointerId,
      x: event.clientX,
      y: event.clientY,
      dx: 0,
      axis: "pending",
    };
  });
  surface.addEventListener(
    "pointermove",
    (event) => {
      if (!gesture || gesture.id !== event.pointerId) return;
      const dx = event.clientX - gesture.x,
        dy = event.clientY - gesture.y;
      if (gesture.axis === "pending") {
        if (Math.max(Math.abs(dx), Math.abs(dy)) < 12) return;
        if (Math.abs(dx) < Math.abs(dy) * 1.5) {
          cancel();
          return;
        }
        gesture.axis = "horizontal";
        surface.setPointerCapture?.(event.pointerId);
        onStart();
      }
      event.preventDefault();
      gesture.dx = Math.max(
        -surface.clientWidth,
        Math.min(surface.clientWidth, dx),
      );
      onMove(gesture.dx);
    },
    { passive: false },
  );
  surface.addEventListener("pointerup", (event) => {
    if (!gesture || gesture.id !== event.pointerId) return;
    const previous = gesture;
    gesture = null;
    release(previous.id);
    if (previous.axis !== "horizontal") return;
    suppressClick = true;
    const threshold = Math.max(40, Math.min(100, surface.clientWidth * 0.15));
    onEnd(
      Math.abs(previous.dx) >= threshold ? (previous.dx < 0 ? 1 : -1) : 0,
      previous.dx,
    );
  });
  surface.addEventListener("pointercancel", (event) => {
    if (gesture?.id === event.pointerId) cancel();
  });
  surface.addEventListener("lostpointercapture", (event) => {
    if (gesture?.id === event.pointerId) cancel();
  });
  surface.addEventListener("pointerleave", () => {
    if (gesture?.axis === "pending") cancel();
  });
  surface.addEventListener(
    "click",
    (event) => {
      if (suppressClick && event.detail > 0) {
        event.preventDefault();
        event.stopPropagation();
        suppressClick = false;
      }
    },
    true,
  );
  return cancel;
}

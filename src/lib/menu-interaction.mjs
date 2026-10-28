/** Touch browsers can blur controls without focusing another element. */
export function bindMenuFocusDismissal(container, hoverMode, close) {
  container.addEventListener("focusout", (event) => {
    if (
      hoverMode() &&
      event.relatedTarget &&
      !container.contains(event.relatedTarget)
    )
      close();
  });
}

/** Handle disclosure immediately instead of racing queued native toggle events. */
export function bindDropdownTrigger(
  summary,
  details,
  { hoverMode, open, close },
) {
  summary.addEventListener("click", (event) => {
    event.preventDefault();
    if (hoverMode() && event.detail > 0 && event.pointerType !== "touch")
      open();
    else if (details.open) close();
    else open();
  });
}

/** Ignore passing pointer travel; only a sustained hover previews a branch. */
export function bindHoverPreview(element, enabled, preview, delay = 180) {
  let timer;
  const cancel = () => {
    clearTimeout(timer);
    timer = undefined;
  };
  element.addEventListener("pointerenter", (event) => {
    cancel();
    if (!enabled() || event.pointerType === "touch") return;
    timer = setTimeout(() => {
      timer = undefined;
      if (enabled()) preview();
    }, delay);
  });
  element.addEventListener("pointerleave", cancel);
  return cancel;
}

/** Native hashes can fire before a filtered destination becomes visible. */
let pendingArrival: AbortController | undefined;
function queueScroll(id: string, smooth = false, signal?: AbortSignal) {
  requestAnimationFrame(() => {
    if (signal?.aborted) return;
    const target = document.getElementById(id);
    if (!target || !target.getClientRects().length) return;
    const header = document.querySelector<HTMLElement>(".header");
    const offset = (header?.getBoundingClientRect().height || 90) + 24;
    const top = target.getBoundingClientRect().top + window.scrollY - offset;
    window.scrollTo({
      top: Math.max(0, top),
      behavior:
        smooth && !matchMedia("(prefers-reduced-motion: reduce)").matches
          ? "smooth"
          : "instant",
    });
  });
}
export function cancelPendingArrival() {
  pendingArrival?.abort();
}
export function revealTarget(id: string, smooth = false) {
  cancelPendingArrival();
  queueScroll(id, smooth);
}
export function settleTarget(id: string) {
  cancelPendingArrival();
  const arrival = new AbortController();
  pendingArrival = arrival;
  // Do not drag visitors back to an old target after they start interacting.
  for (const type of ["wheel", "touchstart", "pointerdown", "keydown"])
    window.addEventListener(type, () => arrival.abort(), {
      once: true,
      passive: true,
      signal: arrival.signal,
    });
  const reveal = () => {
    void document.fonts.ready.then(() =>
      queueScroll(id, false, arrival.signal),
    );
  };
  if (document.readyState === "complete") reveal();
  else
    window.addEventListener("load", reveal, {
      once: true,
      signal: arrival.signal,
    });
}

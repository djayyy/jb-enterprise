const clamp = (value, min, max) =>
  Math.max(min, Math.min(value, Math.max(min, max)));

/** Move links only as far as needed, without crowding the logo. */
export function navigationMargin({
  viewportWidth,
  equipmentLeft,
  firstLinkLeft,
  brandRight,
  preferred = 56,
  clearance = 32,
}) {
  const available = Math.max(0, firstLinkLeft - brandRight - clearance);
  const needed = equipmentLeft + 660 + 12 - viewportWidth;
  return clamp(Math.max(preferred, needed), 0, available);
}

export function alignHeaderNavigation({ nav, brand, viewportWidth, compact }) {
  const quote = nav?.querySelector(":scope > .button");
  const firstLink = nav?.querySelector(":scope > a");
  const summaries = nav?.querySelectorAll("[data-nav-dropdown] > summary");
  const equipment = summaries?.[1];
  if (!quote || !firstLink || !equipment || !brand) return;
  if (compact) {
    quote.style.removeProperty("margin-left");
    return;
  }
  // Always measure from zero so repeated updates never accumulate an offset.
  quote.style.setProperty("margin-left", "0px");
  const margin = navigationMargin({
    viewportWidth,
    equipmentLeft: equipment.getBoundingClientRect().left,
    firstLinkLeft: firstLink.getBoundingClientRect().left,
    brandRight: brand.getBoundingClientRect().right,
    preferred: viewportWidth <= 1100 ? 20 : 56,
  });
  quote.style.setProperty("margin-left", `${margin}px`);
}

/** Keep the root under its trigger and all children to its right. */
export function cascadeLayout(viewportWidth, anchorLeft, margin = 12) {
  const minimumWidth = 200 + 200 + 260;
  const left = clamp(anchorLeft, margin, viewportWidth - margin - 1);
  const available = viewportWidth - margin - left;
  const scale = Math.min(1, available / minimumWidth);
  const growth = clamp((available - minimumWidth) / (848 - minimumWidth), 0, 1);
  return {
    left,
    rootWidth: (200 + 72 * growth) * scale,
    side: "right",
    groupWidth: (200 + 56 * growth) * scale,
    scopeWidth: (260 + 60 * growth) * scale,
  };
}

export function flyoutPosition({
  parentLeft,
  parentWidth,
  rowTop,
  height,
  viewportHeight,
  margin = 12,
  topBoundary = margin,
}) {
  const minTop = Math.max(margin, topBoundary);
  const maxHeight = Math.max(0, viewportHeight - margin - minTop);
  const actualHeight = Math.min(height, maxHeight);
  return {
    left: parentLeft + parentWidth,
    top: clamp(rowTop, minTop, viewportHeight - margin - actualHeight),
    maxHeight,
  };
}

/** Measure only open desktop panels; the mobile tree keeps normal document flow. */
export function positionMenu({
  root,
  summary,
  groups,
  categoryRows,
  viewportWidth,
  viewportHeight,
}) {
  const plan = cascadeLayout(
    viewportWidth,
    summary.getBoundingClientRect().left,
  );
  const top = summary.getBoundingClientRect().bottom;
  root.style.setProperty("position", "fixed");
  root.style.setProperty("left", `${plan.left}px`);
  root.style.setProperty("top", `${top}px`);
  root.style.setProperty("width", `${plan.rootWidth}px`);
  root.style.setProperty(
    "--menu-available-height",
    `${Math.max(0, viewportHeight - top - 12)}px`,
  );
  root.setAttribute("data-flyout-side", plan.side);
  const place = (panel, width, anchor, rowTop) => {
    panel.style.setProperty("width", `${width}px`);
    // scrollHeight includes clipped content. Keep the cap in place so measuring
    // during a scroll never expands the panel and resets its scroll position.
    const p = flyoutPosition({
      parentLeft: anchor.left,
      parentWidth: anchor.width,
      rowTop,
      height: panel.scrollHeight + 2,
      viewportHeight,
      topBoundary: top,
    });
    panel.style.setProperty("left", `${p.left}px`);
    panel.style.setProperty("top", `${p.top}px`);
    panel.style.setProperty("max-height", `${p.maxHeight}px`);
  };
  groups.forEach((group, index) => {
    if (group.hidden) return;
    place(
      group,
      plan.groupWidth,
      { left: plan.left, width: plan.rootWidth },
      categoryRows[index].getBoundingClientRect().top,
    );
    const scope = group.querySelector("[data-menu-scope]:not([hidden])");
    if (!scope) return;
    const row = [...group.querySelectorAll("[data-menu-item]")].find(
      (n) => n.dataset.menuItem === scope.dataset.menuScope,
    );
    if (row)
      place(
        scope,
        plan.scopeWidth,
        group.getBoundingClientRect(),
        row.getBoundingClientRect().top,
      );
  });
}

export function clearMenuPosition(root, groups) {
  const panels = [
    root,
    ...groups,
    ...root.querySelectorAll("[data-menu-scope]"),
  ];
  panels.forEach((panel) => {
    for (const property of [
      "position",
      "left",
      "top",
      "width",
      "max-height",
      "--menu-available-height",
    ])
      panel.style.removeProperty(property);
  });
  root.removeAttribute("data-flyout-side");
}

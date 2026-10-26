# Mobile presentation audit — CHG-012

26 October2026 · R38/T40–T41/A34–A35 · Current local build: http://127.0.0.1:4322/.

## Presentation ownership
- src/styles/responsive/mobile.css: mobile/tablet layouts up to1000px, including the carousel, stacked touch navigation, catalogue reflow and form/control refinements.
- src/styles/responsive/desktop.css: carousel overlay and navigation panes above1000px. Both files are loaded after shared styles.
- Content, routes, images and semantic Astro templates remain shared. No duplicate website or user-agent detection. Existing base component styles remain in global/v02/v03/v05/v06; future device-specific changes belong in the named responsive files.

## Findings and fixes
| Area | Source finding | Implemented correction | Evidence / limit |
| --- | --- | --- | --- |
| Banner title | global.css hid .hero-caption below1100px, and later styles did not restore display | Removed obsolete rule; shared caption is block; mobile caption stays in normal flow | Built-CSS cascade fixtures pass; actual rendering pending |
| Banner actions | Legacy600px rule stacked .hero-actions vertically | Mobile uses two columns; desktop uses a horizontal flex row | Built-CSS fixtures pass at13 widths |
| Long banner text | Absolutely placed text/buttons could collide in short viewports or enlarged text | Mobile grid separates caption, image/arrow area, actions and dots; auto height grows with content | Source/CSS reviewed; text zoom and clipping require browser check |
| Catalogue cards | Old30px/26px card padding compounded current inner copy padding | Mobile outer padding reset, full-width copy; larger body/action text | Cascade fixtures pass; visual photo crops pending |
| Navigation scope | Mobile breakdown appeared after the complete service list | Move existing scope node directly into its matching item row on compact screens; restore desktop pane on resize | Typecheck/source review; tapping, focus and resize execution NOT RUN |
| Header/menu height | Fixed header height and menu viewport subtraction did not follow actual content height | Auto header height, measured CSS height variable, bounded scrollable menu, outside-tap/focus/resize dismissal | Source review; keyboard/scroll geometry NOT RUN |
| Navigation style leakage | Global nav rules applied header hiding/positioning to unrelated nav elements | Scope header rules to #main-nav; breadcrumbs/category links remain in flow | Static fixtures pass |
| Forms/long content |14px text, native select/file controls and unbroken filenames could constrain narrow grids |16px input/search/file text, min-width0, bounded fields and wrapping help/error text | Static form font fixtures pass; native phone controls pending |
| Certificates | Close controls could scroll away inside a long dialog; compact controls | Sticky dialog bar,44px close target, bounded viewer | Source review; opening/pinch/scroll NOT RUN |
| Utility/footer | Tiny social controls and narrow footer columns | Larger controls, wrapping utility row, single-column narrow footer and larger links | Source review; actual target spacing/reflow pending |

A very short screen may need vertical scrolling to preserve readable content. No claim of zero overflow or universal first-screen fit is made without rendered checks. The mobile hero still uses cover images; full original image pixels are not guaranteed on every aspect ratio.

## Completed checks
- 36-file Astro check:0 errors/warnings/hints.26 existing logic tests pass.
- 188-page build;45287 local link/asset references; source sections, unique titles/IDs, one h1, ARIA targets, image attributes and disconnected-form safeguards pass.
- 562 distinct destinations;855 tree/enquiry-context checks;376 HTTP requests pass, plus branded404 for an unknown URL.
- 164 static CSS-cascade assertions over320,360,390,430,600,650,768,900,1000,1001,1024,1100,1440px fixtures. Covers caption visibility, horizontal action mode, menu open/closed rules, breadcrumbs/category flow, card padding, input font size, menu target and reduced-motion rule.
- These assertions parse generated CSS and match representative DOM fixtures; they do not execute a browser, resolve pixel geometry, load fonts, click controls or prove visual accessibility. The fixture was corrected to support build-minified media range syntax before final results. No production dependency added.
- Index-only search and absence of catalogue sidebars remain verified. No source ZIP generated. Existing data/routes/assets/forms remain unchanged.

## Browser review still required
No authorised browser tool is available in this session; local and cloud browser discovery returned no callable browser controller. Do not reuse old browser results as proof of this revision.

Check all three slides at320/390/430px, tablet768/1000px and desktop1024/1440px; horizontal and vertical orientation;200% text; reduced motion. Check menu open/close, each category, item disclosure, child links, Escape/Tab, resize and scroll containment. Check catalogue index/category/item/leaf, About/leadership, certificates/viewer, Contact/Quote/Careers form fields and file errors, footer and404. Confirm no horizontal page overflow, title/button/dot overlap or clipped focus rings. All these rendered/interaction checks are NOT RUN.

Logs: .review/mobile/{check,tests,build,verify,navigation}.txt; static fixture/result: .review/mobile/audit-css.mjs and css-audit.json. Source/spec state is bound by checkpoint.json. No commit, push or deployment performed in this change.

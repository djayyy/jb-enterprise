# V0.6.1 separate service and equipment pages

CHG-010 ·26 October2026 · Website source review. Git/GitHub is now configured; CHG-011 removes obsolete ZIP snapshots and uses Git history. Historical acceptance evidence is retained; this cleanup does not deploy.

## Implemented routes

| Route | Pages | Content |
| --- | ---: | --- |
| `/services/`, `/equipment/` |2| Complete grouped lists with category links and local search |
| `/services/{thermal,hydro,specialist}/` |3| Category overview and linked service cards |
| Existing `/services/{service-slug}/` |13| Individual service and linked source scopes |
| `/services/{service-slug}/{scope-slug}/` |100| Source scope, parent context, enquiry |
| `/equipment/{thermal,hydro,other}/` |3| Equipment categories and component groups |
| `/equipment/{category}/{group}/` |12| Individual component group and linked parts |
| `/equipment/{category}/{group}/{part}/` |47| Individual part, parent context, enquiry |
| `/`, `/about/`, `/certifications/`, `/careers/`, `/contact/`, `/request-a-quote/`, `/privacy/`, `/404.html` |8| Existing source homepage, company, certificate and disconnected enquiry pages |

188 generated HTML pages. All catalogue pages/cards use a mapped supplied photo and readable text. Shared templates implement the same hierarchy for services and equipment. Homepage capabilities and equipment categories are real links. Navy menu category labels navigate; hover/focus/touch controls preview source breakdowns. Old preview query/hash links are mapped by a compatibility script; new navigation works with plain anchors.

## Coverage and remaining work
R33–R36 implementation is complete for static review. The original13 service/100 scope and12 equipment/47 part entries remain intact. Leaf content is limited to supplied facts and parent context; no specifications or unsupported capabilities invented. Representative images are reused when exact component photography is absent.

R03–R12 source branding/home/About/leadership/services/equipment/certificate presentation remain available; company content, contact details, asset rights and issuer verification need approval. R13–R16 are disconnected form interfaces and metadata checks only;2GB uploads remain future implementation. R17 project stories/resources and R18 global search remain deferred. Only LinkedIn has a sourced social destination; four other icons remain pending. No competitor-superiority, WCAG compliance or performance claim.

## Verification
36-file typecheck0 diagnostics;188-page build;45287 local link/asset references;562 distinct destinations;855 tree/context checks;376 HTTP checks plus branded404. Full route inventory: [navigation-audit.md](navigation-audit.md). Preview http://127.0.0.1:4322/.

Browser visual/hover/scroll/keyboard/touch and client redirect execution remain NOT RUN because no authorised browser-control tool is available. Static/HTTP checks do not prove these behaviours. Original production-site redirects, real email/upload/CAPTCHA and deployment remain separate release tasks.

Source/spec hashes: checkpoint.json; Git records source history. CHG-011 removes all eight generated source ZIPs. dist/ is the ignored, replaceable static build output used for publishing. Original requirement inputs remain untouched.

V0.6.1: search only on the two catalogue indexes; nested pages have no sidebar, sibling/related cards or duplicate parent-list actions. Breadcrumbs and own child cards remain. All178 nested pages were inspected in generated HTML for A32. Existing26 unit-test results belong to V0.6, not rerun for this presentation-only removal.

## Current CHG-012 responsive refinement
Mobile/tablet and desktop presentation are maintained separately with shared content. Banner titles are restored, mobile hero actions stay horizontal, content can grow without absolute text/button collision, touch breakdowns appear under their own items, and narrow cards/forms/footer/certificate controls are refined. Complete source findings: mobile-audit.md.
Current evidence:36-file check0 diagnostics,26 tests,188-page build,45287 references,376 HTTP checks and164 static CSS-cascade assertions at13 widths. Actual browser visual/interaction checks remain NOT RUN. No new source ZIP, route, business content, asset or live integration.

## Current CHG-013 interaction repair
Mobile Services/Equipment now ignore blur dismissal and expand/collapse without automatic focus jumps; summary switching is synchronous. Banner supports touch swipe and mouse/pen drag in both layouts, preserving vertical page scrolling and native links/controls. Arrows/dots/keyboard remain.
Latest verification:38-file check0 diagnostics,41 tests,188-page build,45475 local references,376 HTTP checks and164 static CSS fixtures. Actual browser acceptance remains NOT RUN; see mobile-audit.md. No route/content/assets/dependencies/live integration changed.

## CHG-014 current menu refinement
Both catalogues now share navy/white parent-path highlighting, explicit scope ancestry, cancellable hover intent and nested mobile category/item disclosure.45 tests,38-file check0 diagnostics,188-page build,50175 references,376 HTTP checks plus404 and284 static CSS checks pass. Actual browser/mobile visual/interaction acceptance remains NOT RUN. Existing business content, banner, routes and disconnected integrations retained.

CHG-015: sequential menu disclosure replaces default Thermal/first-item opening.46 tests,38-file check0 diagnostics,188-page build and50175 references pass; generated initial menu state verified on every page. Actual browser acceptance remains pending.

CHG-016: compact trigger-anchored desktop menus replace the oversized fixed-height container. Panels cascade right where the full branch fits, otherwise left; mobile remains nested.51 tests,39-file check0 diagnostics,188-page build,50175 references,376 HTTP checks plus404 and316 static CSS assertions pass. Actual browser visual/pointer/touch acceptance remains pending.

CHG-017: rightward-only flyouts, left-aligned desktop navigation and list-only dropdown roots implemented.51 tests;39-file check0 diagnostics;188-page build;49799 references;376 HTTP checks plus404;352 CSS checks pass. Actual browser verification pending.

CHG-018: restored the original centred, single-row desktop header with right-aligned navigation and only a12–28px margin before Quote. Retains rightward/list-only menus.51 tests,188-page build,49799 references and381 static CSS checks pass; rendered browser acceptance remains pending.

CHG-019: root dropdowns stay beneath their header labels; measured header spacing moves Home–Contact farther left only within logo clearance, while child widths adapt to remaining space.54 tests,39-file check0 diagnostics,188-page build,49987 local references and381 static CSS checks pass. Rendered browser fit/legibility remains pending.

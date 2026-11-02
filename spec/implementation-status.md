# V0.6.1 separate service and equipment pages

CHG-034 current review: service/equipment cards use common240px desktop/220px narrow photos,23px titles/15px descriptions and per-row aligned text/action tracks. Full copy retained without clipping.360 all-page cases/394 card instances plus40 responsive cases pass;56 tests,41-file check,188-page build and49,990 link/asset checks pass. A67 records browser evidence/limits. Local uncommitted review; no deployment.


CHG-033 current review: removed added light photo frames/padding from catalogue heroes and non-Home cards. Photos fill their media areas edge to edge; source-proportional bounded heroes and adaptive180–280px card areas use cover fitting without hover zoom. All178 detail pages plus2 indexes pass1440/390px checks (360 cases/750 media instances), plus40 responsive cases.56 tests,41-file check,188-page build and link/navigation checks pass. A66 records evidence/limits; local uncommitted review, no deployment.


CHG-032 current review: catalogue heroes and non-Home cards now show complete bounded photos without cover cropping or enlargement past intrinsic CSS dimensions. All178 catalogue pages plus2 indexes pass desktop/mobile checks, with40 extra responsive cases and83 formerly unloaded images rechecked after loading.56 tests,41-file check,188-page build and link/navigation checks pass. A65 records evidence/source-resolution limits; checkpoint refreshed after reconnecting. Local uncommitted review; no deployment.


CHG-030 current review: all three About compositions fit five tested desktop screen sizes, with reduced opening top space and full circular actions/Leadership. Service/equipment heroes and component cards are permanently clearer.157 explicit photo mappings change131 nodes;31 sibling groups have zero repeated images.56 tests,41-file check,188-page build and link/navigation checks pass; evidence/limits in A61–A63. Separate CHG-031 download rollback retained. Local uncommitted review; no deployment.


CHG-028 current correction: desktop About opening fills the remaining first screen beneath the unchanged header; What We Do starts exactly at the viewport bottom at four tested sizes and appears on scroll. Full objective remains visible. A59 records responsive/menu/command evidence and limits; no deployment.


CHG-027 current correction: opening About section through the full objective now fits normal desktop landing screens at1024×768,1280×720 and1440×756/812 without reducing text size. Opening brochure removed; footer link retained. Mobile/200% zoom keep natural readable flow. A58 records evidence/limits; build/typecheck/link checks pass, no deployment.


CHG-026 current supplement (1 November 2026): reference About pages10–12 implemented with supplied red/grey watermarks, two-column capabilities/circular actions, industrial leadership background and gold values. Shared thin company-name rule preserves measured header/footer/nav geometry. Six-width Chrome and actual200% zoom checks pass, with33 source strings retained;40-file check,55 tests,188-page build and link/navigation checks pass. A56–A57 record scope/limits. Package0.6.1 retained; local uncommitted changes, no deployment.

CHG-024 current supplement (1 November 2026): the clear photograph, readable scrim and larger copy are always visible across Home and shared service/equipment cards. Hover/focus no longer changes images or typography; outlines remain. Nine Home widths and 30 catalogue cases pass; all Home cards retain 370px height. Build/typecheck/55 tests/static links pass. See A55 in acceptance.md for evidence and limits. No deployment.

Current CHG-023 supplement (1 November 2026): baseline header/footer/navigation/catalogue presentation restored while retaining supplied images and Welcome. All 17 homepage offering cards share 370px height and matching responsive widths, with clear text and hover/focus image reveal. Nine Home widths and 30 additional template/width combinations pass; 55 tests, 40-file check, 188-page build and full static link/navigation checks pass. See current acceptance.md; older presentation results below are historical.

Current refinement — CHG-022, 1 November 2026: nine supplied images integrated using 20 optimised WebP derivatives; stacked Welcome/Why, complete header/footer logo, four industry photos, distinct Critical Component, bounded turbine image and About motif implemented. Compact-menu viewport height repaired. 55 tests, 40-file typecheck, 188-page build, 49,989 link/asset references and 855 navigation semantic checks pass. Chrome responsive/200% zoom/selected journeys pass as detailed in acceptance.md; physical-device/cross-browser and production integration limits remain. Earlier browser-pending statements below are historical.

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

CHG-035: blue quote-reference banner and 20-logo CSS client marquee implemented; existing static forms/direct downloads preserved.42-file check/56 tests/188-page build/50,030 local references pass. Scoped Chrome desktop/mobile/narrow review and pause/resume/navigation pass; reduced-motion verified in CSS only, full-cycle/OS-motion checks not run. See A68–A69.

CHG-036: normal client animation always running, no pause UI or hover/focus stop. Footer upward icon replaces visible text. A70 scoped checks pass; reduced-motion unchanged.

CHG-037: canonical brochure download updated to24-page1st November revision on all188 pages; exact source/output bytes and links verified (A71). Local build only.

CHG-038: Careers phone mandatory with Phone * label/native required validation; other form kinds unchanged. A72 generated-form/build/type/link checks pass; browser validation interaction not rerun.

CHG-039: shared footer Resources exposes Executed Projects, Spares supply, Reverse Engineering & Manufacturing Portfolio PDF links after brochure. All188 pages verified with exact source/public/build equality; A73 checks pass.

CHG-040: footer Resources width now keeps full portfolio label/arrow horizontal on desktop/tablet, with natural phone wrapping. A74 scoped Chrome/build/link checks pass.

CHG-041: mock Contact/Quote thank-you modal and shared resource-details gate implemented on188 routes. Four required client fields; session grant only, no stored personal details/mail/backend. Certificate viewer/download and PDF new-tab actions resume after mock; later documents bypass in same tab.45-file check/60 tests/188-page build/50,782 references and scoped Chrome desktop/mobile flows pass; A75–A76 limits.

CHG-042: demo form labels removed; neutral thanks/contact text and required arithmetic human verification on every form. Browser-only validation, no real email/backend.48-file check/62 tests/188-page build/50,973 references plus scoped Chrome blank/refresh/mobile checks pass. A77 success-path browser limitation applies.

CHG-043: captcha now compact4-letter lowercase code with icon refresh; arithmetic removed. A78 build/test/type/link and desktop/mobile visual checks pass; browser-only limitation unchanged.

CHG-044: navy/orange themed resource/confirmation forms and captcha; larger clearer refresh icon. A79 scoped Chrome/build/link checks pass.

CHG-045: friendly distinct Contact/Quote confirmations, cross-only close and compact spacing implemented; A80 generated-copy/build/type/link checks pass. Email integration unchanged.

CHG-046: shared corrected offices data feeds Contact and all3 addresses beneath footer logo; pending-social note removed. A81 generated-content/build/type/link and scoped responsive Chrome checks pass.

CHG-047: complete company-facing Privacy Policy and shared labels replace preview/development wording.13 sections, date/contact and accurate local-only form/session disclosures; A82 build/type/link/content/responsive checks pass. No email/runtime/deployment change; operational/legal approval not claimed.

CHG-048: all188 rendered pages audited for internal/unfinished public copy, with0 remaining targeted findings; review notes/provenance labels/pending social controls removed, Careers/file messages polished. A83 build/type/test/link/scoped browser checks pass. Email backend and staging SEO remain unchanged; full operational readiness not claimed.

CHG-049: footer tagline below logo/above3 offices;5 header/footer social icons restored without pending labels. A84 build/type/link/all-route order and desktop visual checks pass.

CHG-050: header uses existing emblem without embedded company text; footer complete logo unchanged. A85 build/type/link/all188 route assertions and desktop visual pass; mobile not rerun.

CHG-051: duplicate footer company-name wordmark removed; complete footer logo, tagline/offices and header preserved. A86 build/type/link/all188 markup checks pass; browser visual checks not rerun.

CHG-052: review rows1–4 implemented using3 local supplied images across4 component routes/cards and activating Facebook/Instagram/supplied YouTube homepage in shared header/footer. A87 build/type/test/link/all-route and scoped desktop/mobile checks pass. Actual company YouTube channel remains follow-up; no deployment.

CHG-053: footer logo centred over intrinsic tagline width; offices/socials left-aligned. A88 desktop/mobile geometry,188 route wrapper/build/link checks pass.

CHG-054: final supplied transparent footer logo replaces previous artwork, centred above tagline. A89 build/type/link/all-route/alpha and desktop visual pass; mobile not rerun.

CHG-055: footer logo enlarged to120px desktop/104px compact, proportional and centred; header unchanged. A90 build/link/desktop visual/mobile geometry checks pass.

CHG-056: header/footer YouTube now links supplied company channel; previous homepage follow-up resolved. A91 build/link/all188 destination assertions pass.

CHG-057: X / Twitter activated in header/footer at supplied URL; all5 social icons now links. A92 build/link/all188 route checks pass.

CHG-058: corrected X company handle/HTTPS URL in header/footer; A93 build/link/all188 destination checks pass. Committing as requested; no push/deployment.

CHG-059: Hydro generator components uses supplied2November image on group detail and listing cards; child photos unchanged. A94 build/link/mapping checks pass; browser crop not rerun.

CHG-060: Hydro generator services uses supplied November2 image on group detail/listing cards; equipment and child images unchanged. A95 build/link/mapping checks pass; committing as requested.

CHG-061: supplied shaft image used on Hydro turbine Shaft inspection and alignment detail and parent card; A96 build/link/mapping checks pass. Browser crop not rerun.

CHG-062: Technical visit and pre-inspection uses supplied November 2 image on detail hero and Reverse engineering card. A97 build/link/mapping checks pass; browser crop not rerun.

CHG-063: 3D models and engineering drawings uses supplied November 2 image on detail hero and parent card; A98 build/link/mapping checks pass. Browser crop not rerun.

CHG-064: Simulation and engineering analysis uses supplied November 2 image on detail hero and parent card; A99 build/link/mapping checks pass. Browser crop not rerun.

CHG-065: Design validation uses supplied November 2 image; A100 build/link/mapping checks pass for all four pending replacements. Committing CHG-062–065 as requested; no push/deployment.

CHG-066: Material science and testing uses supplied material science.jpeg on detail hero and parent card; A101 build/link/mapping checks pass. Browser crop not rerun.

CHG-067: Hydro generator stator service uses supplied stator core.jpeg on detail hero and parent card; A102 build/link/mapping checks pass. Browser crop not rerun.

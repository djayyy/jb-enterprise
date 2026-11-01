# Acceptance and verification

## Consistent catalogue cards — CHG-034

A67 (R65/T79), PASS for scoped Chrome review on1 November2026.

- All178 detail pages and2 indexes checked at effective CSS viewport widths1440/390px:360 page/width cases,394 card instances.40 additional page/width cases at320/768/1024/1280px cover mixed photo ratios, categories, indexes and long component copy. Photo height consistently240px above1000px and220px below; images fill the complete media bounds with0 padding/cover fitting. No horizontal overflow or text outside its card.
- Within each visual row, card heights and label/title/summary/action top positions match exactly. Titles remain23px and descriptions15px across both catalogues. Longer text wraps fully and sets the shared row height; independent rows may differ naturally. Source-photo identity/proportions preserved through cover, with edge crop as needed. No white frames or hover transform introduced.
- Specialist screenshot visually confirms the user's mismatched examples now align. Equipment index search for turbine leaves2 results with240px images and zero overflow; clearing restores the grid. Keyboard focus retains3px outline and Enter opens /services/testing-inspection/. Home17 cards remain370px and headers83/97px at390/1440px; no overflow.
-41-file check0 diagnostics;56 tests;188-page build and49,990 link/asset references pass. Compared with CHG-033 checkpoint, only CatalogCard.astro, v06.css and responsive/mobile.css implementation changed. Heroes, header/footer, Home/About, data/assets/photo mappings, route/content/dependency/backend contracts unchanged.
- Evidence: .review/card-consistency/{all-pages,responsive,regression,search}.json, build/check/tests/verify.txt and specialist-desktop.png; final source/spec hashes in checkpoint.json. Browser zoom affected viewport overrides, so actual innerWidth was measured and controls compensated to reach the stated CSS widths. Physical hardware/Safari/screen-reader/legacy browsers not tested. CSS subgrid support is required for row alignment. No commit/push/deployment.


## Edge-to-edge catalogue photographs — CHG-033

A66 (R64/T78), PASS for scoped Chrome review on1 November2026.

- All178 catalogue pages plus2 indexes checked at1440/390px:360 cases and750 media instances. Every media element has zero padding, transparent background, cover fitting and image bounds matching the full area within1px; no horizontal overflow or transforms.40 additional cases at320/768/1024/1280px cover categories, indexes, small/portrait/ultrawide photos and long copy; no gaps, overflow or text outside its panel/card.
- Thermal desktop hero/cards and mobile hero visually inspected; fresh screenshots saved. Source-proportional hero area is capped at360px tall on desktop/280px narrow. Card media height adapts within180–280px and may crop image edges to fill the area; original encoded photo backgrounds remain untouched. The previous strict contain/native-size policy in A65 is historical and superseded by this requested fill treatment.
- Actual hover uses cover, transform:none and0s transition; keyboard focus preserves3px outline. Home remains17 cards at370px, zero framed Home cards and no overflow at390/1440px; headers83/97px. About, header/footer, image assets, photo mappings and source data exactly match CHG-032 hashes. Only CatalogPage/Card and shared/mobile catalogue styles changed.
-41-file Astro check:0 diagnostics;56 tests;188-page build;49,990 local references;562 navigation destinations/855 semantic checks. No route/content/dependency/backend changes. Existing download rollback retained.
- Evidence: .review/image-framing/fill-{all-pages,responsive,regression,hover}.json, fill-{build,check,tests,verify}.txt, fill-navigation.json and fill-thermal-{desktop,cards,mobile}.jpg. Source/spec hashes in checkpoint.json. Physical devices, Safari, screen reader and current actual200% zoom not rerun; source resolution still limits detail. No commit/push/deployment.


## Catalogue photo framing — CHG-032

A65 (R63/T76–T77), PASS for scoped Chrome review, completed after reconnecting the workspace on1 November2026.

- All178 catalogue pages and both indexes checked at1440/390px:360 page/width cases and750 hero/card image instances. All356 hero instances loaded, covering all104 catalogue photos.40 additional cases at320/768/1024/1280px cover categories, long scopes, portrait/ultrawide/small photos and both indexes. No horizontal overflow or text outside its containing panel/card.
- Saved audit initially contained83 off-screen, unloaded or unmeasured card-image instances in23 page/width cases. On resumption, each was brought into view using keyboard focus and remeasured after loading. All83 now have positive dimensions and pass; no unresolved measurements remain. Original raw observations are preserved alongside lazy-loaded.json rather than treating missing values as passes.
- Every measured loaded photo uses contain fitting with preserved aspect ratio, no transform and no clipping outside its padded frame. Maximum CSS enlargement factor1.0; maximum fractional aspect-ratio error0.0000703 (browser subpixel rounding). All source dimensions/metadata remain those verified in CHG-030. Off-screen lazy cards were explicitly checked after loading as above.
- Specialist and Thermal Turbine examples visually inspected on desktop, plus mobile Turbine and mixed portrait/landscape component cards. Desktop hero places the complete photo in a bounded light frame beside navy copy; narrow screens stack photo above text. Non-Home cards similarly separate photo from readable copy; type labels no longer cover the machinery. Whole provided photos are shown, including any crop already present in the original source.
- Requested Thermal Turbine remains480×249 and renders480×249 CSSpx on the tested desktop, instead of an estimated3× cover enlargement at1440px. Specialist715×329 is reduced into its frame. These source-size caps do not create missing detail or guarantee high-DPR/zoom sharpness from small originals.
- Actual normal/hover/keyboard-focus checks preserve image size132×176px, contain fitting, zero transition and no transform; keyboard focus retains3px outline. Enter opens the correct Turbine erection/assembly leaf. Home remains17 cards at370px at390/1440px, with zero framed Home cards and no overflow; header remains83/97px. About What/Leadership still fit1280×720 (content bottoms658.15/646.51px).
- Current commands rerun after reconnection:41-file Astro check0 diagnostics;56 tests;188-page build;49,990 local links/assets;562 destinations/855 semantic navigation checks. Assets, photo mappings, metadata and business data match the CHG-030 source hashes. No public-asset, canonical route, source-copy, dependency, form or backend changes in this change.
- Evidence: .review/image-framing/{before-audit,all-pages,responsive,pending-lazy-checks,lazy-loaded,states,regression,summary}.json; command logs; Specialist/Turbine desktop/mobile/cards screenshots. Final source/spec hashes recorded in checkpoint.json. Source-resolution limits remain; physical-device/Safari/screen-reader/current actual200% zoom/full accessibility review not run.

This supersedes CHG-030 catalogue background/cover framing evidence, retaining its supplied-image mappings, distinct siblings and unaffected About/Home acceptance. The earlier disconnection interrupted final documentation only; the resumed lazy-image checks required no additional code changes. Local uncommitted review; no commit/push/deployment.


## About density and catalogue clarity — CHG-030
A61 (R60/T72,T74), PASS for scoped Chrome review: all three complete About compositions fit the five tested desktop screens. Opening starts13–16px below header, rather than leaving a large centred top gap, while What stays below its first-screen boundary. What/Leadership use compact padding/gaps, smaller circular actions and more efficient value/message layouts;1001–1200px uses rounded value panels. All33 original strings,7 approach points,6 capabilities,3 values and5 commitments retained. No fixed-height clipping or hidden copy.

| Viewport | Who / objective bottom | What content / links bottom | Leadership content bottom |
| --- | ---: | ---: | ---: |
|1440×812|658.53px|716.20px|652.51px|
|1440×756|657.41px|716.20px|652.51px|
|1280×720|645.28px|658.15px|646.51px|
|1024×768|741.95px|723.68px|678.09px|
|1440×650|643.88px|632.44px|646.39px|

These are actual content bottoms relative to each viewport after normal opening entry or section-anchor arrival. Both circular links and the complete Leadership panel are within the screen.320/390/768/720px About checks show full copy, natural scrolling and no horizontal overflow/clipping. Actual200% browser zoom was not rerun;720px reflow checked. Very narrow/short/zoomed screens may grow naturally rather than compress text below readable sizes.

A62 (R61/T73–T74), PASS: bright catalogue heroes with bounded72% text scrim on desktop; narrow screens show the full image above readable navy copy. No full-photo dark shade. Catalogue child cards use the same permanent bright-photo/bottom-scrim treatment as Home:23px title/15px body, brightness1.06, no image transform/transition. Normal/actual hover/keyboard focus measurements match; focus shows3px outline. Enter opens the correct Stator inspection leaf.60 final page/width cases (10 routes ×320/390/768/1024/1280/1440) have no horizontal overflow or text extending outside card/panel bounds. Initial heading scrollHeight rounding was checked using actual text ranges inside containing panels/cards; no actual clipping. Hero/card screenshots visually inspected. Conservative worst-white-photo contrast: card body5.82:1, hero summary5.59:1, breadcrumbs5.28:1, eyebrow4.55:1, title6.84:1, card action4.91:1. About contrast underlays remain CHG-026 values.

A63 (R62/T73–T74), PASS: reviewed127 supplied-folder images and95 PDF candidates.157 explicit route mappings change131 actual node images; catalogue unique image count30→104. All31 sibling groups now use distinct images (22 previously repeated), checked by keys and actual WebP byte hashes. Requested Thermal Turbine/Critical Component photos retained.178 node titles/summaries/URLs/quote destinations/source context unchanged.76 new WebP derivatives total6,671,336bytes, no upscaling, full provenance/intrinsic dimensions; original requirement files untouched. Reuse across related pages remains intentional; reference images do not establish exact part/project identification, and small source resolution remains a limit.

Final commands PASS on current source, including separate CHG-031 download rollback:41-file Astro check0 diagnostics;56 tests;188-page build;49,990 local links/assets;562 destinations/855 semantic navigation checks. New regression test protects distinct sibling photos/canonical override keys; existing requested-image assertion updated for the now-explicit Boiler replacement. Home regression at390/1440 retains17 cards at370px with no overflow; header remains97px desktop/83px mobile. No user-facing business copy, canonical route, dependency or form behaviour changed by this task.

Evidence: .review/catalog-clarity/{about-final,about-narrow,catalog-layout,card-states,home-regression,photo-audit,new-assets,contrast}.json, command logs and desktop/mobile JPGs. Full-source checkpoint recorded after spec sync. Physical devices/Safari/screen reader/full accessibility audit not run; no production/commit/push change. Earlier affected About density/catalogue clarity/image-mapping results superseded. CHG-031's independently requested download rollback is preserved, not attributed to this task.


## About landing boundary — CHG-028

A59 (R58/T69), PASS for scoped Chrome review. At normal entry scrollY0, What We Do begins exactly at the bottom of the initial desktop viewport and the complete objective remains visible:

| Viewport | What We Do top / opening bottom | Objective bottom |
| --- | ---: | ---: |
|1440×812|812px|727.15px|
|1440×756|756px|699.15px|
|1280×720|720px|681.15px|
|1024×768|768px|747.29px|

Existing header97px and total utility/header137px retained. Minimum-height section grows naturally if needed, with no hidden content or fixed-height clipping. Normal page scroll reveals What We Do; observed scrollY756 shows its heading at59px and body in the viewport. Opening height remains619px when scrolling at1440×756; the layout uses total chrome height, not its changing scroll position, so no boundary jump occurs.

390/768px layouts and720×378 narrow reflow have no horizontal overflow/clipped copy; all objective text remains. Desktop minimum height does not apply to narrow layouts (computed0px). Mobile Menu at390×844 opens with bottom477.87px inside viewport and Escape dismisses; header remains83px. Actual200% zoom was not repeated this follow-up; CHG-027's actual200% result is historical, while its720px reflow path was checked here.

PASS:40-file Astro check0 diagnostics;55 tests;188-page build;49,990 local references/source/ARIA checks; diff whitespace/Markdown links. Evidence: .review/about-compact/boundary-responsive.json, desktop-landing.jpg and boundary-*.txt logs. Source hashes in checkpoint.json. No physical-device/Safari/full accessibility review, commit/push or production deployment. CHG-027's short opening height is superseded; text sizes, compact spacing, brochure removal and other source content stay unchanged.


## Compact About opening — CHG-027

A58 (R57/T68), PASS for scoped Chrome review: full About Us/Who We Are opening, seven approach points and complete objective fit at scrollY0 below the unchanged utility/header. Desktop body remains18px, approach16px, objective17px; no text-size reduction. Brochure action beneath objective removed; footer brochure retained.

| Viewport | Opening bottom | Objective bottom | Fits first screen |
| --- | ---: | ---: | --- |
|1440×812|674.77px|658.53px|PASS|
|1440×756|672.53px|657.41px|PASS|
|1280×720|671.09px|656.70px|PASS|
|1024×768|757.30px|741.95px|PASS|

No horizontal overflow or clipped paragraph/list copy in the above or320/390/768px mobile/tablet checks. All33 source strings and seven approach points retained; no company-data changes. Header remains97px desktop,83px at390/768 and87.59px at320. Actual200% Chrome zoom gives720 CSSpx at1440 physical width; natural scrolling, full copy, no clipping/overflow. Mobile font sizes and What/Leadership treatment unchanged. Only section/title/paragraph/list spacing is tightened on desktop; no fixed-height box or content hiding.

PASS:40-file Astro check0 diagnostics,188-page build,49,990 local references and existing source/menu/ARIA verifier. Diff whitespace and local Markdown links checked. Prior55 unit tests and855 navigation checks belong to CHG-026 and were not rerun for this presentation/link-removal correction. Evidence: .review/about-compact/{responsive,zoom}.json and desktop-opening.jpg; command logs .review/about-implementation/compact-*.txt. No physical-device/Safari/full accessibility review or production deployment. This supersedes CHG-026 opening spacing and local brochure expectations; remaining evidence is historical.


## About implementation evidence — CHG-026, 1 November 2026

R55–R56 / T66–T67 / A56–A57: PASS for the scoped local Chrome review below. Supersedes CHG-025 pending implementation and affected earlier About layout evidence; other route acceptance remains historical unless explicitly rerun.

- A56 PASS: 1px orange pseudo-rule beneath ENGINEERING LIMITED in shared header/footer. Before/after measurements at 320/390/768/1024/1280/1440px show zero delta in header height, header brand width/height, name width, nav x/width, footer brand width/height. Existing gap used; no new layout height. Header remains 97px desktop, 83px at390/768 and87.59375px at320 (same baseline).
- A57 PASS: visually inspected three desktop sections and mobile opening/stacked values against the approved PDF composition. Who uses the supplied red head with wide three-column approach (2/2/3); What uses grey head/two text columns and permanent clear Services/Spare Parts image links; Leadership uses source industrial/world-map background, triangular gold value circles beside the light message panel. Navy text on gold replaces reference white for contrast. Through360px values become rounded natural-height panels.
- Source integrity PASS: all33 expected company strings preserved, including7 approach points,6 capabilities,3 values and5 commitments. No company-data changes. One h1; decorative images have empty alt; retained who-title, added who-we-are, existing what-we-do/leadership/quality anchors and brochure/services/equipment/certifications/contact destinations. Generated references and source-copy assertions pass.
- Responsive PASS: About at six widths above, no horizontal overflow, all images loaded, no clipped paragraphs/list/value content. Heading scrollHeight rounding exceeds clientHeight slightly but overflow is visible; headings visually verified, not treated as clipping. Desktop columns and mobile stacking inspected. Actual200% Chrome zoom at1440 physical pixels gives720 CSSpx/DPR2; full content fits without horizontal overflow or value clipping.
- Keyboard/journeys PASS: circular Services activated by Enter to/services/; Spare Parts clicked to/equipment/, Back returns correctly. Focus outline3px visible with no image transform. Mobile Menu opens and Escape dismisses. Header/footer metrics preserved; Home at390/1440 retains all17 cards at370px, no transforms or horizontal overflow.
- Conservative contrast bounds (black watermark/underlay, white photo for light labels): Who body8.04:1, What body8.20:1, gold values5.51:1, Leadership body8.97:1/title4.86:1, circular-link label13.24:1. These bound the CSS underlays rather than claim a full accessibility audit.
- Commands PASS:40-file Astro check0 errors/warnings/hints;55/55 tests;188-page build;49,991 local references;562 destinations/855 navigation semantic checks. No dependency, route, form or deployment changes.
- Evidence: .review/about-implementation/{baseline,geometry,responsive,zoom,home-regression,actions,source-coverage,contrast}.json and desktop/mobile/zoom JPGs. Exact source/public/config hashes in checkpoint.json. No physical devices, Safari, screen-reader or full WCAG/Lighthouse audit; OS reduced motion not rerun (new About has no animations/hover reveals). Brochure/certification/contact targets statically checked; no live delivery/integration claim. Current uncommitted local preview: http://127.0.0.1:4322/about/.


## Planning evidence — CHG-025, 1 November 2026

T65 complete: full PDF pages 10–12 freshly rendered/read, current About/Brand/company data inspected, eight embedded image candidates inspected on a contact sheet and the exact original source hash recorded in [the plan](about-reference-2026-11-01-plan.md). Application source/public assets remain CHG-024; its code checks are not invalidated by this planning-only change.

A56 (R55/T66–T67), NOT RUN: thin orange rule below the company-name line/above tagline, proportional to the wordmark; current header/footer brand dimensions, header height and navigation clearance retained.

A57 (R56/T66–T67), NOT RUN: /about/ follows the source page-10/11/12 compositions and background subjects, preserving all seven approach points, six capability descriptions, three value statements and five commitments. Live accessible text, circular actions, retained anchors/closing links, 320–1440px and 200% zoom/contrast/keyboard checks require actual implementation evidence. PDF typos are corrected without inventing leaders or facts.

No application tests/build/browser checks rerun for this plan. Documentation link/traceability and unchanged application-file hash checks recorded in CHG-025.

## Current evidence — CHG-024, 1 November 2026

A55 (R54/T64): PASS for scoped Chrome review. Industry/Core Services/Equipment image cards show the former clear state at rest: brightness(1.06), 72% navy text scrim, 23px heading and 15px body. No image scale/reveal/typography change on pointer hover or keyboard focus. The keyboard outline remains. Shared catalogue cards also use permanently bright images, the same readable scrim and 15px body, preserving their existing grid/template and source content.

Browser evidence: all 17 Home cards at 320/390/600/768/1000/1024/1100/1280/1440px retain 370px height and full copy, with no horizontal overflow; each reports 23/15px fonts, no transform and zero image-transition duration. Actual pointer and keyboard checks confirm identical resting/hover/focus presentation on an industry card and identical focus/hover presentation on a shared service catalogue card. Thirty service/equipment index/category/child-page and width combinations show no overflow/clipped copy, consistent brightness and 15px body with no image motion. Screenshots and measurements: .review/always-clear/{home-responsive,catalogue-responsive,interaction,catalogue-interaction}.json and saved desktop/mobile images.

Checks PASS: 40-file Astro check with zero diagnostics; 55 tests; 188-page build; 49,989 local link/asset references; 562 destinations/855 navigation semantic checks. Logs in .review/always-clear/. Existing image mappings, compact responsive grids, restored brand/navigation and Welcome remain. No new assets, source copy, routes, dependencies or runtime scripts. The unchanged 72% scrim/foreground combination retains CHG-023's conservative 5.85:1 body contrast bound against a pure-white source image.

The prior CHG-023 hover-dependent presentation is superseded. Physical devices/Safari/screen-reader, actual OS motion and current 200% browser zoom were not rerun in this CSS pass; browser evidence uses Chrome viewport sizing. No production deployment or live-integration change.


## Current evidence — CHG-023, 1 November 2026

A53 (R53/T62–T63): PASS for the tested local Chrome review. Complete supplied logo retained; original responsive brand sizing/type/spacing and visible footer tagline restored, added underline/oversized footer treatment removed. At 1024px, settled brand and navigation rectangles/styles match the deployed Render baseline (baseline-1024.json). Header logo is 57px on wide desktop, 48px on tablet/narrow desktop and 42px on phone; footer inherits original 57/48/43px rules. Original desktop menu declarations restored; only homepage card rules are appended. CatalogPage matches the baseline full-background hero template; contained/split treatments removed. Shared supplied-image overrides and Welcome/About imagery retained. Global palette/fonts, banner, business copy, forms and routes preserved.

A54 (R53/T62–T63): PASS for measured Chrome viewports. All 17 homepage cards have matching widths across the three sections and measure 370px high at 320/390/600/768/1000/1024/1100/1280/1440px. At 1440px they are 293.5×370px. No horizontal page overflow or clipped title/body/action in those nine layouts. Industries section is about 578px high, with heading and four cards fitting below the sticky header in the tested 1440×812 view. All 17 keyboard-focus checks retain 370px height, full copy and 23px headings/15px descriptions. Actual pointer hover verified clearer image, brightness(1.06), 23/15px text, unchanged height and contained copy. Mobile needs no hover to read descriptions or activate links. Equipment retains its three categories, centred at the common card width; no source entries added.

Regression checks PASS: 55 tests; 40-file Astro check with zero errors/warnings/hints; 188-page build; 49,989 local link/asset references; 562 destinations/855 navigation semantic checks. No new implementation-mirroring CSS tests. Browser reflow across six additional templates and five widths (30 combinations) found no overflow. Restored turbine/component hero images use absolute full-width cover backgrounds on desktop/mobile. Compact Equipment disclosure at 390×844 fits the viewport (menu bottom 843px); Escape dismissal works. Evidence: `.review/compact-cards/` logs, baseline-1024.json, responsive.json, focus.json, pages.json, hover.json and screenshots.

Conservative source/colour contrast bound: normal body 10.84:1, hover/focus body 5.85:1 and hover/focus title 6.88:1, assuming pure-white photo pixels beneath the text scrim. Copy starts 18px below its surface, where the scrim reaches full opacity. Actual text content is not hidden/truncated. Reduced-motion CSS removes image movement/transitions; actual OS reduced-motion and current 200% browser zoom were not rerun in this pass (prior CHG-022 zoom evidence is historical). Physical devices, Safari and screen-reader checks remain outside the tested Chrome viewport scope.

CHG-022's enlarged-brand, tall-card and contained-catalogue presentation evidence is superseded; its source-image provenance/mapping and unchanged Welcome remain applicable. The 480×249 turbine original now follows the explicitly requested full-background catalogue presentation, with its inherent resolution limit retained. No commit/push/deployment or live-integration change.

## Current evidence — CHG-022, 1 November 2026

Current state: V0.6.1 local image/layout refinement; source hashes in checkpoint.json. This supersedes affected CHG-019 visual evidence and CHG-021's planning-only status. R46,R47,R52 / T54,T60,T61 are implemented; R38,R45 compact-menu height regression also fixed.

| Criterion | Current result |
| --- | --- |
| A47 | PASS: exact Critical Component override shared across Home/parent/detail; Reverse Engineering retained. Thermal Turbine uses supplied photo; explicit unrelated scope/part imagery preserved. Mapping regression passes. Detail photos are contained, with turbine width bounded at 480px. |
| A52 | PASS for local Chrome review: all nine originals mapped to 20 WebP derivatives with provenance/dimensions; stacked Welcome/Why, supplied backgrounds, complete header/footer logo, four industry photos and About motif implemented. Seven-width reflow, 200% zoom and menu evidence below. |
| A45 | PASS for this image/layout subset; other workbook CTA/top-control work remains pending. No full WCAG conformance claim. |
| A35/A44 | PASS for measured responsive geometry and keyboard/click menus in the tested Chrome viewports. Physical touch and passive pointer traversal are not established by these measurements. |
| A46/A48–A51 | Wider workbook work remains pending: career phone/office edits, resource gating/live mail/private delivery, revised brochure/portfolios/clients and complete feedback closure. Accepted industry destinations/context retained. |

Command checks PASS: Astro check 40 files, zero errors/warnings/hints; all 55 tests; 188-page build; 49,989 local link/asset references; 562 distinct navigation destinations, 855 semantic checks and 9 CSS assets. Static verifier checks metadata, image attributes, ARIA references, catalogue consistency and disconnected-form safeguards. No dependency changes. Logs: `.review/image-feedback-final/{check,tests,build,verify}.txt`, navigation.json. Full terminal HTTP crawl NOT RUN: shell loopback access failed; actual browser journeys below used the existing local preview at http://127.0.0.1:4322/.

Actual browser checks PASS (Chrome): Home measured at 320/390/768/1000/1024/1280/1440px; eleven additional templates at those widths (77 combinations), with no horizontal page overflow or loaded-image failures. Includes About, service/equipment indexes, turbine and Critical Component details, Contact, Quote, Careers, Certificates, Privacy and branded 404. Six pages reflow at actual 200% Chrome zoom (1440px physical viewport → 720 CSS px), without horizontal overflow. Brand/header and selected photo crops visually inspected. Screenshots and measurements: home-widths.json, route-widths.json, zoom-200.json, desktop-welcome.jpg, desktop-industries.jpg, mobile-welcome.jpg.

Both desktop cascades at 1024/1280/1440px retain trigger alignment, rightward non-overlapping panes and viewport bounds. Enter opens and Escape closes with focus return. Compact Services/Equipment categories start collapsed, reveal only the requested branch and navigate to the canonical equipment leaf with menu dismissal. Menu scroll area fits at 320×568, 390×844, 844×390 and 768×1024. The visible utility strip previously made the menu extend 47px below the screen; current header-bottom measurement fixes it. desktop-menus.json and compact-menus.json retain measured rectangles.

Browser interactions PASS: three carousel slides and wrap via Next, horizontal mouse drag in both directions at a mobile-sized viewport; catalogue no-match and clear recovery; Gas Contact Us preserves `Gas turbine support`; empty Contact preview focuses the first required input; valid fake data reports that nothing was sent/saved/uploaded; certificate viewer opens, Escape closes and focus returns. New-tab console warnings/errors: none observed. interaction-results.json records scope. Actual physical touch/pinch, Safari/iOS/Android, screen-reader testing and OS-level reduced-motion browser testing remain NOT RUN; gesture cancellation/reduced-motion logic remains covered by the passing controller tests.

Contrast calculations PASS: industry title 16:1, body 13.42:1, action 11.33:1 against the opaque navy text surface. Welcome body conservative minimum 6.22:1 and introduction 8.13:1, assuming black source pixels, the lowest light-wash opacity and both decorative shapes. Browser confirms text sits in these intended treatments; these are relative-luminance/compositing bounds, not sampled glyph pixels or a full accessibility audit. contrast.json records calculation method.

Release limits: live email/uploads, resource delivery, company content approval and production cutover remain separate work. No production deployment, Git commit/push, new source ZIP or copied version folder. The 480×249 turbine original remains a source-quality limit, bounded rather than upscaled to a full-screen image.

## Planning follow-up — CHG-021, 31 October 2026

Application remains CHG-019/V0.6.1. This documentation change does not invalidate existing application results. The earlier company-review plan reserved A45–A51; registered below as planned criteria, all **NOT RUN**:

- A45: source-reference visual treatment on Home/About/header/footer, readable live text, accessible controls and responsive/zoom/reduced-motion review. Latest welcome composition and image selection follow the 31 October plan.
- A46: career requires phone; only intended office headings change with addresses preserved; four industry actions/context remain correct.
- A47: distinct Reverse Engineering/Critical Component images and correct shared Thermal Turbine replacement, with routes/breadcrumbs retained.
- A48: intended document resources share a required name/phone/company/email workflow with correct resource identity, keyboard/error/focus handling and honest disconnected preview.
- A49: live server validation/allowlist, controlled recipients, fail-closed mail/private delivery and expired/tampered-link rejection; full documents absent from public output. Actual provider/file tests required.
- A50: approved new documents/revisions and client names only; accessible ticker pause/focus/reduced-motion; no fake actions for absent files.
- A51: every FB01–FB22 has evidence or an explicit blocker; actual browser review and relevant regressions recorded for implemented state.

A52 (R52/T60–T61): all nine feedback-folder images map to the exact sections in [image-feedback-2026-10-31-plan.md](image-feedback-2026-10-31-plan.md). Centred stacked welcome/Why uses the specified plant background/faint shapes and readable live text; shared logo retains proportions/readable name and usable header clearance; industry text meets planned contrast targets with recognisable crops; Critical Component differs from Reverse Engineering on shared surfaces; Thermal Turbine and About motif use their supplied images. Source metadata is accurate, no unrelated catalogue-image replacements, no overflow at planned widths or 200% text enlargement. Current status **NOT RUN**: no implementation in this turn.

T59 planning evidence: nine originals enumerated and dimensions read using Pillow; visually inspected contact sheet at `.review/image-feedback-plan/contact-sheet.jpg`; checked current Home/About/Layout/CatalogCard/CatalogPage and shared catalogue image source. Turbine source is 480×249, Critical Component is portrait and logo is a white-background JPG. These are source-inspection findings, not browser verification. Documentation link/traceability/diff checks are recorded in CHG-021; application tests/build were not required for planning-only edits.

Status: CHG-004 V0.3 has passed current checks below; CHG-003 V0.2 previously passed the recorded source-alignment review checks below; CHG-002 is historical. Full criteria remain partial or pending as specified. Preview completion is distinct from production readiness.

| ID | Requirements | Test / expected result |
| --- | --- | --- |
| A01 | R01,R03-R12,R16-R17 | Compare every source section with page map: all documented topics represented or explicitly deferred with reason; consistent JBAEL identity |
| A02 | R06-R11,R20 | From desktop and mobile menus reach each main category within two selections; detail pages and breadcrumbs work; no dead controls |
| A03 | R03-R21 | Audit claims/images: no XX MW, filler, invented jobs/results, wrong lubrication copy or unverified contact details in release |
| A04 | R20 | At 320,375,768,1280px no horizontal page overflow or clipped forms; keyboard menus, focus order, Escape and reduced-motion behaviour verified |
| A05 | R20 | Check WCAG 2.2 AA as target: labels, contrast, focus, semantics, alternative text and error announcements; automated checks plus manual keyboard review; no claim of certification |
| A06 | R20-R21 | Production build succeeds; links/assets resolve; image dimensions prevent major shifts; representative mobile Lighthouse performance target >=90, record settings/results; failure requires fix or documented tradeoff |
| A07 | R02,R13-R14 | Valid contact/quote reaches configured test inbox with correct subject/context and Reply-To; invalid/malicious input rejected; provider failure does not show success; no database writes |
| A08 | R15 | Under approved limit upload succeeds via private direct storage; over-limit/type violations fail server-side; interrupted transfer retry works; unauthorised/expired downloads fail; no public bucket; cleanup/retention verified |
| A09 | R16 | Careers accurately says future opportunities unless real jobs provided; valid resume reaches recipient; invalid files rejected; disconnected preview never claims sent |
| A10 | R10-R11,R18 | Part/service selection prepopulates enquiry; static search returns relevant results and usable empty state; no private form data in index |
| A11 | R12,R17,R21 | Certificate/brochure downloads open and are readable; project facts trace to source; asset permission/validity reviewed |
| A12 | R20 | Unique titles/descriptions/canonical URLs and sitemap; replaced legacy URLs redirect to relevant pages; preview not indexed; 404 provides recovery |
| A13 | R02,R20 | Secret scan clean; server-controlled recipients; CAPTCHA verified server-side; throttling exercised; private data excluded from routine logs; privacy text matches operation |
| A14 | R01 | Previous release identified and rollback rehearsed in preview; production DNS/email settings preserved; release and form smoke checks recorded |

## Evidence record template
- Acceptance ID / version / commit:
- Environment / device / date:
- Procedure and observed result:
- Evidence (test output or screenshot location):
- Status: PASS / FAIL / BLOCKED / NOT RUN
- Remaining risk or approved exception:

V0.1 gate: A01-A06,A10-A11 as applicable to review; disconnected integrations disclosed. V1.0 gate: all criteria assessed, no unresolved critical failure or fabricated result. External mail/storage access may block integration tests without blocking review pages.

## Evidence freshness
Follow [workflow.md](workflow.md). Every result must cite a CHG ID and the tested commit or an explicit uncommitted file-state description. Preserve past results as history; when affected code changes, mark current criteria NOT RUN until reverified. A prior-version PASS is not a current-version PASS.

## CHG-002 — V0.1 local review evidence, 2026-10-24 UTC
Environment: macOS, Node.js 26.5.0, Astro 7.4.2, connected Chrome, loopback production-build preview. No Git repository; tested source/public/config/script state is recorded by SHA-256 in checkpoint.json. Logs in .review/ are intermediate and not shipped in the source archive.

| ID | Current status | Observed evidence / remaining scope |
| --- | --- | --- |
| A01 | PARTIAL | 22 routes cover service/equipment groups; documented omissions in implementation-status.md. About expansion, verified certificates/projects/resources pending. |
| A02 | PASS for reviewed flows; PARTIAL overall | Mobile menu opened/closed; Escape returned focus to Menu; services -> generator -> quote and equipment -> quote worked. Generated link checker resolved 710 local href/src references and anchors. |
| A03 | PARTIAL | Output checker found no Lorem ipsum/XX MW/action="#"; no fabricated job entries. Provisional contacts and certificate verification visibly disclosed. Company factual/asset-rights review pending. |
| A04 | PARTIAL | Home, generator, quote, equipment checked at 320/375/768/1280, zero horizontal overflow in all 16 observations. Careers at 320 also passed. Desktop/mobile screenshots visually inspected. Full-page keyboard order, all browsers/pages and reduced-motion emulation not run. |
| A05 | PARTIAL / automated scan NOT RUN | Semantic heading/alt checks passed; native field labels and error/status areas inspected; keyboard menu checked. No WCAG compliance claim or full automated contrast/target/focus audit. |
| A06 | PARTIAL | Build passed with 22 pages; Astro check 19 files, 0 errors/warnings/hints; links/assets checked. Lighthouse score not measured. |
| A07 | NOT RUN / disconnected by design | No email endpoint/provider configured; browser valid-form check explicitly says nothing sent/uploaded/saved. Native empty-field submission rejected. |
| A08 | NOT RUN for uploads | Seven Node tests include 2 GB aggregate and 5 MB resume boundaries, types/count/zero-byte handling. Tests use file metadata, not actual uploads. Private storage, interrupted uploads, scanning/access/expiry unimplemented. |
| A09 | PARTIAL | Careers future-opportunity wording and preview form implemented; required-resume and format/size rules tested as metadata. Real resume delivery not configured. |
| A10 | PASS for implemented scope; PARTIAL broader search | Chrome Hydro filter returned 3 capabilities; impossible term showed empty state. Generator prefill and turbine-parts prefill observed. Bounded query context unit tests passed. Equipment/resource/global search pending. |
| A11 | PARTIAL | Copied supplied 32-page brochure and valid download link. Certificate downloads, company rights and project facts remain pending. |
| A12 | PARTIAL | All 22 pages have unique titles, descriptions, noindex and recovery navigation; link checker validates 404 links. Final canonicals, sitemap and legacy redirect map pending. |
| A13 | PARTIAL | npm audit reports 0 vulnerabilities for installed lockfile. No mail credentials, recipients, enquiry logging or API/storage code added. Production CAPTCHA/throttling/privacy/security checks not run. |
| A14 | NOT RUN | No deployment, Git release or production cutover; local source snapshot exists. Rollback rehearsal remains a launch task. |

### Exact observed command results
- `npm run check`: 19 files; 0 errors, 0 warnings, 0 hints.
- `npm test`: 7 tests; 7 pass; 0 fail.
- `npm run build`: 22 pages; completed successfully.
- `npm run verify`: PASS, 22 pages, 710 local links/assets; metadata/image/form checks.
- `npm audit --json`: metadata vulnerabilities total = 0.
- `curl -I http://127.0.0.1:4321/`: HTTP 200.
- Chrome quote empty submission: 6 required fields invalid; no preview confirmation. After synthetic example values: “The required fields pass the preview checks. Nothing has been sent, uploaded or saved. Live enquiries will be enabled in a later version.”

File-selection checks are client-only and cannot be used as security enforcement in production. Form browser tests used synthetic example data and did not send email. No previous full PASS results existed to invalidate. Future implementation changes must refresh affected evidence.

## V0.2 additional acceptance — CHG-003
A15: all three source hero themes selectable; first slide names turbine/generator/boiler; visible welcome, ten capabilities, source navigation and five social icons; only supplied social URLs enabled. Carousel pause/manual/keyboard work.
A16: all six What We Do areas, Vision/Mission/Goal and Leadership Message visible; three certificate originals readable/enlarge/download; dialog Escape and focus recovery.
A17: Thermal/Hydro background-image controls reveal scoped services; specialist selection available; family/service changes do not reload document, scroll to page top or lose focus; direct service URLs/contextual quote still work.


## CHG-003 — V0.2 current evidence, 25 October 2026
Environment: macOS, Node 26.5.0, Astro 7.4.2, connected Chrome, loopback static production build. Uncommitted tested source is bound to SHA-256 in checkpoint.json. No original requirement inputs modified. Intermediate command logs and desktop screenshot are in .review/v02/; they are excluded from the source archive.

| ID | Current status | Observations and limits |
| --- | --- | --- |
| A01 | PASS for corrected source sections; PARTIAL whole scope | Output verification covers three source hero themes, ten core capabilities, full About sections, three certificates and 13 scopes. Projects/resources/global search remain deferred. |
| A02 | PASS for reviewed flows; PARTIAL overall | Source navigation and mobile Menu/Escape work. Hydro service deep-link, scope tabs, enquiry context and 799 generated local links/assets verified. All-device/full journey audit pending. |
| A03 | PARTIAL | S1/S2 content and assets traced, no invented jobs/metrics/social URLs/leader name. Certificate copies explicitly marked review; business/contact/rights verification remains open. |
| A04 | PASS representative responsive checks; PARTIAL full criterion | Home/services/About/certifications inspected at 320/375/768/1280. Initial 320 About overflow found, corrected to single-column What We Do and rerun: zero overflow. Other 15 observations no horizontal overflow. Mobile menu/Escape and keyboard service/carousel controls verified. Full browser/device and reduced-motion emulation not run. |
| A05 | PARTIAL | Heading/alt/dimensions checked; carousel labelled controls, native dialog/Escape/focus recovery and service tab keyboard behaviour verified. Full automated WCAG/contrast/target-size audit NOT RUN. |
| A06 | PARTIAL | check:24 files, zero errors/warnings/hints; build:23 pages; verify:799 local links/assets plus source checks; tests:7/7; HTTP200. Lighthouse NOT RUN. |
| A07 | NOT RUN, unchanged disconnected design | No email provider/endpoint configured; preview guards verified. No delivery claim. |
| A08 | NOT RUN real uploads | Seven metadata/context tests passed again. No actual upload/private storage/scanning/access/expiry implementation. |
| A09 | PARTIAL | No jobs invented; future-opportunity and disconnected form unchanged; required-resume/type/size tests pass. Real delivery pending. |
| A10 | PASS implemented service flow; PARTIAL broader scope | Search zzzzzz returns useful empty state; Clear search restores scope. Direct Hydro generator query selects correct panel; enquiry input prefills Hydro generator services. Global/catalogue search pending. |
| A11 | PASS source image display/enlarge; PARTIAL overall | Three extracted source certificate images readable in review, links resolve and download attributes present. ISO9001 opened on mobile, Escape closed and focus returned to opener. OS download/save was not exercised. Issuer/rights validation pending. Brochure unchanged. |
| A12 | PARTIAL | 23 unique titles/descriptions, noindex, local fragment/404 links checked. Final domain/canonicals/sitemap/redirects pending. |
| A13 | PARTIAL | No new dependencies, endpoints, secrets or personal-data persistence. Form safeguards and bounded prefill tests pass. CHG-002 npm audit remains historical; no fresh security certification claimed. Live security controls pending. |
| A14 | NOT RUN | Separate V0.2 snapshot preserves V0.1; no deployment/rollback rehearsal. |
| A15 | PASS reviewed interaction; PARTIAL reduced-motion verification | All three exact source titles selected, next/keyboard selection work; play toggles Pause and can stop. First title explicitly names equipment; welcome, ten capabilities and five icons present. Timer/hover/hidden/reduced-motion code reviewed but timed autoplay and motion emulation not separately exercised. |
| A16 | PASS source presentation and reviewed modal flow | All six What We Do areas, Vision/Mission/Goal and full unattributed leadership visible. Three certificate originals shown; mobile viewer readable, Escape/focus recovery verified. Download links checked statically, not OS download flow. |
| A17 | PASS reviewed desktop/mobile flows | Photo buttons reveal correct services. Native Thermal click kept scrollY=161; keyboard Turbine->Generator kept scrollY=633 with focus on selected tab. Category changes use same document, not route reloads. Hydro deep-link and contextual quote work at320. Dedicated detail routes retained and link checked. |

No captured Chrome errors in the reviewed session. Responsive evidence is representative, not an exhaustive accessibility or browser compatibility certification. Browser locator clicks can scroll a control into view; stable-scroll observations above used native visible-card input or keyboard selection to isolate application behaviour. Final V0.2 CSS fix was followed by successful check/build/verify/tests and the affected 320px page rerun. No code changes followed those checks.

## CHG-004 current verification
A18 (R23): PASS reviewed full-image, named-selector, actual automatic advance, stop-state and keyboard/mobile flows. Reduced-motion styles inspected; OS emulation not run.
A19 (R24): PASS reviewed shared image cards, group selection, equipment search/empty/clear, deep-link/prefill and representative responsive checks; limits below.

### CHG-004 evidence — V0.3, 25 October 2026
Tested uncommitted source/public/config bound to checkpoint.json. Same macOS/Node26.5/Astro7.4.2/Chrome loopback environment. Command logs .review/v03/ are intermediate.
- check:25 files,0 errors/warnings/hints; build:23 pages; verify:804 local links/assets plus source and consistency checks; tests:7 pass. HTTP200. New verifier covers3 category cards in each directory, all12 source part groups and removed numbering. An initial verifier counted a script selector string as an extra card; corrected to count article elements, then passed.
- A18: OEM image uses contain sizing and is fully visible on mobile/desktop. Three named selectors/keyboard ArrowRight work. Starting Auto-rotate immediately advances; subsequent automatic advances observed while status remains on; stopping returns off. Six-second configuration inspected. A browser wait was capped before its requested deadline, so automatic progression was confirmed in subsequent observations instead of treating that wait as pass. Final stop persistence recorded below.
- A17/A19: Specialist selected ->5 service tabs. Native Hydro card click kept scrollY220.5; keyboard Hydro turbine->generator kept y663. No route navigation. Shared image/card construction verifies equal hierarchy.
- A10/A19: Auxiliary equipment ->4 groups; zzzz ->empty state; Clear search restores groups; pumps ->1 group; Enquire prefills Pumps & pump spares. Hydro group deep-link ->3 component groups. Parts data unchanged.
- A04/A19: Home/services/equipment checked at actual viewport widths320/375/768/1280; all12 observations zero horizontal overflow. An initial viewport run remained1440 and was discarded; after reference tab cleanup actual dimensions were confirmed and all widths rerun. Mobile and desktop screenshots visually reviewed; Selected badge moved onto image to avoid title overlap.
- A01/A03: previous source content checks retained; no competitor facts/imagery or invented company facts added. A02 representative navigation checked. A06 build/link checks current, Lighthouse NOT RUN. A05 full automated accessibility/contrast audit NOT RUN; keyboard/ARIA and reduced-motion code reviewed. Certificate/form flows unchanged from V0.2; source/static guards verified, earlier browser evidence historical. Email/uploads/security/production/rollback remain pending as previously recorded.


Final stop persistence: after subsequent documentation work (>6 seconds), hero remained OEM & Non-OEM Turbine Generator Expertise and Auto-rotate off. No delayed automatic changes observed. Selected badge placement corrected and final build/link check rerun.

## CHG-005 criteria — implemented; browser acceptance pending
A20: no rotation/status/Selected/shortcut strip; large imagery and finite reduced-motion-aware transitions.
A21: grouped dropdowns expose correct source breakdown, keyboard/touch/Escape/outside behaviour.
A22: detail/category/equipment destinations match content and land below sticky header, including stale/mismatched queries. Current browser checks NOT RUN.

## CHG-006 acceptance criteria
A23: all three theme buttons precede the artwork in DOM and visual flow, visible at initial scroll position; desktop hero adapts to viewport, mobile copy remains readable.
A24: moving the pointer from Services/Equipment headings into their menus does not close them; scopes expand and links remain actionable; outside click, Escape, another menu or focus leaving can close them.
Implementation complete; verification below.

## CHG-005 historical evidence — V0.4
Before workspace disconnection: Astro check28 files,0 diagnostics;23-page build;4917 link/asset references;13 Node tests passed. Browser checks were NOT RUN. These command logs remain under .review/v04/. No V0.4 archive was finalised.

## CHG-006 current evidence — V0.4.1, 25 October 2026
Tested local source/config is bound to checkpoint.json. Logs: .review/v041/.
- PASS: Astro check28 files,0 errors/warnings/hints;23-page static build;13 Node tests,0 failures.
- PASS:4917 generated local link/asset references and fragment destinations. Each page has two grouped menus, unique IDs and valid aria-controls targets. Source content/certificate/category checks remain passing.
- PASS (structural A23): all three named theme buttons precede hero artwork in generated HTML. Preview HTTP200; served markup reports V0.4.1 and preserves this order. This does not measure screen geometry.
- INSPECTED (A24): pointerleave close handler removed; hover/click open and outside click/Escape/focus departure/another menu/link dismissal remain. Actual pointer/keyboard/touch interaction is NOT RUN.
- A20/A21/A22/A23/A24 browser visual, scroll, responsive and motion-preference checks: NOT RUN. Browser app/CUA control is not available; no substitute browser automation used. Earlier V0.3 Chrome results are historical and invalid as evidence for changed UI.
- Full WCAG/Lighthouse, business approvals and production integrations remain pending. No database, live email, uploads or deployment introduced.

## CHG-007 criteria
A25: three source slides, side arrows and labelled dots inside the image banner; no choice row above it; reduced motion honoured.
A26: top-level hover opens menu; category/item hover and focus expose correct scope without clicking; pointer can cross between panes; leave delay, Escape/outside close, touch disclosure and all links work.
A27: all generated routes/assets/fragments exist; each service/equipment deep link resolves correct visible content; queries never hide a requested target; generic anchors remain generic; enquiry context and native modified links are preserved.
Historical results do not validate this changed UI; current evidence follows.

## CHG-007 evidence — V0.5
Current local source/config/spec state bound to checkpoint.json; logs .review/v05/.
- PASS: Astro check28 files,0 errors/warnings/hints;23 generated pages;20 tests (7 form,10 navigation,3 isolated scheduling tests). Scheduling fixtures are not browser tests.
- PASS:5495 local link/asset references, unique IDs/titles, ARIA targets, source sections, safe preview forms and in-banner pagination structure.
- PASS:258 distinct destinations;1969 query/context checks;100 source scope links;59 equipment targets (12 groups,47 parts);9 CSS assets; all10 homepage capability mappings.
- PASS:64 HTTP checks on current4322 preview, including all23 page documents, linked downloads, contextual queries and two slashless directory URLs; separate unknown URL returns branded404 and recovery navigation. Explicit /404.html file returns200. The first audit's contrary status expectation was corrected; a real missing-slash framework404 was then found and fixed.
- A25: reference S1 pp.1–3 visually inspected; implementation/source structure reviewed. Actual current render/first-screen dimensions and reduced-motion behaviour NOT RUN.
- A26: hover/focus handlers, full-height pointer path,400ms exit grace, keyboard/touch and native-link code inspected. Actual pointer traversal, focus order, mobile tapping and menu clipping NOT RUN.
- A27: generated/source/HTTP/unit checks above PASS. Actual browser navigation, back/forward/scroll geometry and modified-click behaviour NOT RUN.
- Current preview4322; old4321 process retained previous config and could not be stopped within current permissions. No production/live integrations, legacy redirects or full WCAG/Lighthouse verification performed. Missing social links remain disabled source gaps.

## CHG-008 criterion
A28: all three hero images use proportional edge-to-edge fill; reveal animation never shrinks below the frame; actual width/height metadata matches source assets. Side arrows/dots remain in-banner. Actual screen framing requires browser review.

## CHG-008 evidence — V0.5.1,26 October2026
PASS:28-file Astro check,0 diagnostics;23-page build;5495 local link/asset checks and existing source/ARIA/pagination checks; preview HTTP200 on4322 serving V0.5.1. Source dimensions checked against image metadata. CSS inspected for cover fill and1.025→1 reveal scale; reduced-motion path retained. Current browser image framing/viewport checks NOT RUN (browser tool unavailable). Existing20 logic tests and64 HTTP audit checks belong to V0.5; not rerun for this presentation-only change. No new implementation-mirroring tests added. Logs .review/v051/; source/spec hashes in checkpoint.json.

## CHG-009 criteria
A29: both index pages list their offerings; categories/items/leaves have unique reachable pages, breadcrumbs and enquiry context; no hidden shared scope panels.
A30: coloured menu categories and homepage cards are real anchors; category hover/focus still previews; old query/hash destinations map to correct pages with no loops/open redirects.
A31: every catalogue page/card has mapped imagery and readable content; source entries preserved; build, whole-site link/HTTP and tree/compatibility tests pass. Actual browser visual/interaction checks separately recorded.

## CHG-009 evidence — V0.6,26 October2026
- PASS A29:188 static pages;178 catalogue nodes all have unique reachable URLs, source titles/summaries, parent links, breadcrumbs and mapped imagery. Source comparison preserves all13 services/100 scopes and12 equipment groups/47 parts. Both complete indexes are verified; old shared tab panels removed.
- PASS A30 command checks:26 tests (7 form,10 historical URL helpers,3 scroll scheduler,6 catalogue/compatibility). Every known old category, service, scope and equipment anchor maps to its canonical destination. Unknown/prototype/malformed input cannot create an arbitrary redirect. Homepage10 capability and3 equipment-category destinations checked; generated category labels are anchors. Browser execution of redirects, hover, keyboard, touch and Back/Forward NOT RUN.
- PASS A31 command checks:36-file Astro check0 errors/warnings/hints;188-page production build;47996 local link/asset references; unique titles/IDs, one h1, metadata, image dimensions/alt attributes, ARIA targets, source homepage/About/certificates and disconnected-form safeguards.562 distinct destinations,855 tree/context checks,9 CSS assets.376 HTTP checks pass on4322, including all188 documents, download/context URLs and slashless indexes; additional unknown URL returns branded404.
- Supplied-image contact sheets inspected;24 optimized copies retain provenance. Exact component-photo correspondence is not claimed. Initial validation found a JSDoc equipment-array annotation error and a verifier counting script selector strings as cards; both corrected before final checks. Code review also corrected inherited mobile nav absolute positioning and boiler/oil photo keyword overlap.
- Actual visual contrast/cropping, viewport reflow, hover continuity, keyboard order, mobile taps and legacy browser navigation remain NOT RUN because no authorised browser-control tool is available. Prior browser evidence is historical and does not prove this version. No full WCAG/Lighthouse, external mailbox/social availability or production check claimed.
- Logs: .review/v06/{check,tests,build,verify,audit}.txt; exact source/spec state: checkpoint.json. No application database, live upload/email or deployment added.

Final source/spec review:67 changed/new files relative to V0.5.1, no tracked removals, no broken relative Markdown links. Original services.ts and equipment.ts hashes match the previous checkpoint. Source input folder and prior archives remain preserved.

## CHG-010 criterion
A32: exactly the two catalogue indexes render search. All178 catalogue category/item/leaf pages omit search, sidebar, sibling/related cards and duplicate parent-list actions; own child cards and breadcrumb parent access remain. Full-width content uses the released sidebar space. Build/link/source checks must pass; current evidence follows.

## CHG-010 evidence — V0.6.1,26 October2026
PASS A32: generated HTML inspection confirms search on exactly /services/ and /equipment/, absent from all178 catalogue pages. All178 omit sidebar/related sections and duplicate parent-list actions; breadcrumbs and own child cards remain. Shared-template/CSS diff reviewed against V0.6; no unrecorded edits existed at start.
PASS:36-file Astro check0 diagnostics;188-page build;45287 local link/asset references and existing source/ARIA/metadata checks;562 distinct destinations,855 semantic checks and376 HTTP checks plus branded404. Logs .review/v061/. Existing26 unit tests belong to V0.6 and were not rerun for this template/CSS removal; no new implementation-mirroring tests added. Actual browser visual/mobile acceptance remains NOT RUN (no browser tool available). No routes, source business data, assets, enquiry contracts or deployment changed.

## CHG-011 criterion
A33: no JBAEL-*-source.zip remains at project root; source ZIP pattern and dist/ are ignored; no dist/ files are tracked; original requirement input remains intact. Build output is the publishable static website, not a source backup. No application behaviour change.

CHG-011 PASS A33 (26 October2026): eight generated ZIPs deleted (119618228 bytes); ignore rules verified for source ZIPs, dist/, dependencies and requirement/. No dist/ files tracked. Existing188-page output remains with no ZIPs. Git diff confirms application source/public assets/scripts/config/package files unchanged. Relative documentation links pass. Original requirement inputs untouched. Build/tests not rerun because no executable code changed; earlier application evidence remains tied to its tested version. Cleanup remains uncommitted/unpushed.

## CHG-012 criteria
A34: separate responsive/mobile.css (up to1000px) and responsive/desktop.css (above1000px) own device-specific carousel/menu/catalogue layout, sharing content and semantics. No hide rule removes hero titles. Mobile actions occupy two horizontal columns and all controls remain reachable.
A35: audit mobile header/dropdowns, catalogue cards, long text/forms, certificates and footer. Verify build, links and existing logic tests; report actual browser viewport/interaction checks independently. Browser checks currently NOT RUN because authorised browser tools are unavailable.

## CHG-012 evidence —26 October2026
PASS command/source checks:36-file Astro check0 diagnostics;26 tests;188-page build;45287 link/asset references;562 destinations/855 semantic checks;376 HTTP checks plus branded404.164 generated-CSS cascade assertions pass at13 widths (320–1440px), including caption visibility, horizontal action layout, menu visibility, catalogue padding, form font size and reduced motion. Index-only search/no-sidebars retained.
A34: separate mobile/desktop presentation files implemented; static cascade and source structure pass. A35: source audit completed across all shared page templates, with findings/fixes and pending checks in mobile-audit.md. Actual browser geometry, overflow, contrast, focus, touch, scrolling, resize and text-zoom acceptance remain NOT RUN because no authorised browser controller is exposed. These are static fixture checks, not simulated browser evidence. Logs .review/mobile/. Application version remains0.6.1; exact change state is CHG-012 in checkpoint.json, with no ZIP or copied version folder.

## CHG-013 criteria
A36: mobile blur/scroll does not dismiss menus; disclosure taps toggle predictably without focus jumps or native toggle races; outside tap, Escape, destination and explicit close still work. Desktop hover/focus retained.
A37: horizontal gestures advance/back through all three banners and wrap; short/vertical/diagonal gestures, secondary buttons, cancelled pointers and starts on controls do not navigate. Caption/CTA/dots stay synchronized; arrows/keyboard retained. Reduced-motion changes immediately. Event-fixture results and actual browser evidence reported separately.

## CHG-013 evidence —26 October2026
PASS:38-file Astro check0 diagnostics;41 tests (existing26 plus5 menu event regressions,8 gesture recognizer regressions and2 actual HeroSlider controller fixtures). These cover mobile null/external focus loss, synchronous summary toggling, rapid Services/Equipment switching, desktop keyboard/hover distinction, touch/mouse/pen swipe direction, short and vertical/diagonal gestures, interactive targets, secondary buttons/pointers, pinch cancellation, capture loss, resize cancellation, click suppression, all-three-slide wrap and synchronized heading/description/CTA/dots, plus reduced-motion animation bypass.
PASS:188-page build;45475 local link/asset references;562 linked destinations/855 semantic checks;376 HTTP checks plus branded404.164 prior static CSS-cascade fixtures rerun successfully on current output across13 widths. Source diff reviewed. Logs .review/gestures/.
A36 source/event fixtures PASS: mobile focus-loss dismissal and forced focus jumps removed; one synchronous disclosure trigger replaces queued native-toggle coordination; compact categories/items start collapsed and toggle in place. A37 source/event fixtures PASS: horizontal intent threshold/capture, live image offsets, settle-back/directional animations, vertical pan/pinch allowance and native control exclusions implemented.
Actual browser touch/drag/scroll/focus/native-default timing and animation geometry remain NOT RUN; available tool discovery contains no browser controller. Event fixtures do not establish rendered behaviour or full accessibility compliance. Package0.6.1 retained; checkpoint identifies CHG-013. No ZIP, route/data/asset/dependency change or deployment.

## CHG-014 criteria
A38: both menus consistently highlight the open category/item path; the scope heading explicitly identifies its parent. Mobile groups are inside their own category row and scopes inside their own item row, with no duplicate nodes, overflow or hidden destinations. Links retain canonical pages and chevrons toggle independently.
A39: transient hover does not switch branches; leaving/dismissing cancels pending previews. Keyboard opens immediately; group changes reset child context; resize restores desktop/mobile node order and ARIA visibility. All generated links/build checks pass. Actual browser diagonal travel, clipping, scrolling, contrast and touch/focus checks must be recorded separately from event/static fixtures. Current implementation evidence pending.

## CHG-014 evidence — 26 October 2026
PASS command/event/static checks: 38-file Astro check with 0 diagnostics; 45 tests including four new actual-menu-controller fixtures; 188-page build; 50175 local link/asset references; 562 destinations/855 semantic checks; 376 HTTP requests and unknown-route 404 on preview4322.
The controller fixtures exercise both menus' category/item nesting, collapse, one-open-branch state, focus stability, brief versus sustained hover, dismissal cancellation, immediate keyboard previews, real-child keyboard entry, stale-child reset, touch-hover exclusion, repeated breakpoint node restoration, unchanged link identities and modified-click behaviour. They use a semantic DOM/EventTarget fixture, not a browser.
284 generated-CSS cascade checks pass: the existing 164 responsive checks plus 120 hierarchy checks covering active parent/item colours under hover, text colour reset in nested content, 44px toggles and collapsed visibility at320/390/768/1000/1001/1280/1440px. Solid-colour text contrast calculations: white/navy11.67:1, dark text/light surface11.43:1, secondary label/light surface5.04:1. These are token calculations, not rendered image-background or full accessibility conformance evidence.
A38/A39 actual browser geometry, diagonal traversal timing, keyboard focus appearance, scrolling, zoom and touch acceptance remain NOT RUN: no browser-control tool available. No live sample-pixel comparison or complete WCAG claim. Log files: .review/menus/{tests,check,build,verify,navigation}.txt and css-audit.json. Prior affected CHG-013 menu evidence is historical; unchanged banner regression tests rerun successfully. No factual source, route, image, form, package, hosting or deployment change.

## CHG-015 criterion
A40: both menus start/reopen with no category or item expanded; category interaction alone never reveals a scope. Item interaction reveals only its own children. Category switching/layout changes clear descendants. Initial generated HTML also has all panels hidden and controls collapsed; no-JS fallback remains available. Current evidence pending.

## CHG-015 evidence — 26 October 2026
A40 command/controller checks PASS:46 tests (updated hierarchy expectations plus a new both-menu/desktop/mobile sequential-open regression),38-file Astro check0 diagnostics,188-page build,50175 local link/asset references. Generated HTML audit confirms all5828 group/scope panels initially hidden and all11656 menu expansion controls initially false across188 pages. The new regression checks category-only opening, explicit item opening, clearing child context after parent change, reopening with no remembered branch and layout reset; existing keyboard/hover/cancellation/link/gesture regressions pass.
Actual browser pointer/touch/visual verification remains NOT RUN because browser control is unavailable. No CSS or destinations changed in this refinement; CHG-014 CSS/HTTP evidence remains historical, not a claimed rerun. Logs: .review/sequential-menus/{tests,check,build,verify}.txt and initial-state.json. No live integration, commit, push or deployment.

## CHG-016 criterion
A41: the initial desktop dropdown aligns with its own Services/Equipment label and contains only its category list/index link. No viewport-sized blank area or unopened column. Child panels align beside their parent row, remain within viewport bounds, and do not cover ancestor panels. Heights follow content with scroll caps. Mobile clears desktop inline positioning and retains nested interactions. Actual rendered/pointer/touch acceptance is distinct from geometry/unit/static checks.

## CHG-016 evidence — 26 October 2026
A41 command/fixture checks PASS:51 tests (new root-position/mobile-cleanup controller regression and four geometry tests, alongside46 prior regressions);39-file Astro check0 diagnostics;188-page build;50175 local link/asset references;562 destinations/855 semantic checks;376 HTTP requests plus unknown-route404.
Geometry checks cover trigger anchoring, right-first/left-fallback branch placement,25 combinations of viewport/anchor positions, reduced child widths when needed, no ancestor overlap, top/bottom bounds, content-height placement and scroll caps. Controller fixture verifies anchored inline styles on both dropdowns and full cleanup on mobile. These tests use supplied rectangles/semantic DOM, not browser layout.
316 generated-CSS assertions pass, including root content height/compact width, removal of centred transforms and reserved grid columns, fixed child positioning to escape scroll clipping, plus existing mobile/menu-colour checks. Text/surface colour ratios remain11.67:1,11.43:1,5.04:1. Native scroll position is preserved during measurement by reading scrollHeight without removing the height cap.
Actual rendered alignment, pointer transit, clipped/scrolling ancestors, hover direction, keyboard focus and mobile touch remain NOT RUN because no browser controller is available. The user's11:14:56PM screenshot was visually inspected and shows the earlier blank1180px container; it does not verify this fix. Logs .review/flyouts/{tests,check,build,verify,navigation}.txt and css-audit.json. No database/live form/hosting or deployment change.

## CHG-017 criterion
A42: all desktop child panels open right with no reverse-arrow styling. Navigation is left-aligned and uses its own row on smaller desktops to reserve horizontal room. All panels remain within viewport bounds with readable minimum widths; no overlap between ancestors. Dropdown roots contain only category lists, with no View all services/equipment links or extra title strip. Mobile nesting and catalogue index routes remain. Actual browser evidence recorded separately.

## CHG-017 evidence — 26 October 2026
A42 command/fixture checks PASS:51 tests with rightward-only geometry expectations and mobile style cleanup;39-file Astro check0 diagnostics;188-page build;49799 local references;562 destinations/855 semantic checks;376 HTTP checks and unknown-route404. Geometry covers25 viewport/anchor combinations and asserts rightward direction, in-bounds placement and minimum200px item/260px scope widths. Crowded anchors shift the branch start left rather than reversing its children.
352 generated-CSS checks pass, including left-aligned header/nav, wider header container, dedicated nav row at1001–1360px, normal single row above1360px and zero inherited dropdown padding. All376 dropdowns across188 pages have no View all/index link or heading strip; both catalogue index pages remain present and linked elsewhere.
Actual browser header fit, text wrapping, pointer, touch and scroll verification remain NOT RUN because browser control is unavailable. Tests use geometry/semantic/CSS fixtures, not rendering. Current logs: .review/rightward-menus/{tests,check,build,verify,navigation}.txt, css-audit.json and list-only.json. No commit/push/deployment.

## CHG-018 criterion
A43: desktop header uses the shared centred container and one row; Home–Contact remains right-aligned with a modest12–28px extra gap before Quote, reduced to12px at1001–1100px. No separate nav row or full left alignment. Rightward-only/list-only dropdowns and mobile disclosure remain. Current CSS/build evidence pending; rendered fit and pointer paths require browser acceptance. CHG-017 header CSS results are historical and superseded.

## CHG-018 evidence — 27 October 2026
A43 static checks PASS:381 generated-CSS assertions, including balanced header alignment, nowrap/single-row navigation, right-aligned links, shared container, adaptive spacing and12–28px quote margin at1001/1024/1100/1280/1360/1361/1440/1920px. Existing mobile/menu/hero CSS checks remain included.51 existing controller/geometry/gesture tests pass;188-page build;49799 local link/asset references; CSS formatting and diff whitespace checks pass. No permanent tests added for this CSS-only change.
Actual browser header fit, pointer travel, zoom and touch remain NOT RUN: no browser controller available. Static declarations are not rendered geometry. CHG-017 header results are superseded; its typecheck/HTTP/list-only audit results remain historical and are not claimed as rerun. Logs .review/header-margin/{tests,build,verify}.txt and css-audit.json. Only desktop.css changed in implementation; no commit/push/deployment.

## CHG-019 criterion
A44: Equipment Supply root left edge matches its summary at desktop widths; opening successive children never shifts the root. Header remains one row and Home–Contact shifts together, leaving32px logo clearance when available; Quote retains its position. Rightward branch widths fit the available viewport; mobile clears desktop spacing. Verify geometry/controller/build and separate actual browser fit/legibility from static evidence. CHG-018 margin/CSS evidence superseded; current checks pending.

## CHG-019 evidence — 28 October 2026
A44 code/fixture checks PASS:54 tests;39-file Astro check with0 diagnostics;188-page build;49987 local link/asset references;381 generated-CSS assertions. Geometry regressions now verify the root stays at a crowded trigger while panel widths adapt; header tests verify the minimum needed shift, logo-clearance cap, repeat measurement without drift, wider-screen release and mobile cleanup. Actual menu-controller regression verifies navigationlayout repositions an open Equipment dropdown and opening both descendants keeps the root fixed. Existing mobile, keyboard, hover, gesture and canonical-link regressions pass.
CSS evidence covers single-row alignment, preferred20/56px spacing and existing mobile/root styles. Runtime spacing is separately checked in DOM/geometry fixtures, not inferred from CSS. Formatting and git diff whitespace checks pass; preview4322 returns200. Logs .review/equipment-alignment/{tests,check,build,verify}.txt and css-audit.json.
Rendered label wrapping/legibility, exact header geometry, pointer transit, zoom and touch remain NOT RUN because no supported browser controller is exposed. At constrained widths the former200/200/260px minimum widths are deliberately superseded by proportional fitting. No browser-derived minimum readable width is claimed. Earlier CHG-018 margin and CHG-017 minimum-width/root-clamp evidence is historical. No commit/push/deployment.

## A60 — CHG-029 / R59 — resource request and notification (HISTORICAL; REVERTED CHG-031)
PASS for local implementation scope (1 November 2026):
- `npm run check`:42 files,0 errors/warnings/hints. `npm test`:60/60, including5 new download tests. `npm run build`:188 pages. `npm run verify`:50366 local references plus shared form/download-trigger assertions. `npm run audit:navigation`:passed structural audit; its browserInteraction NOT RUN refers to that script, not scoped Chrome checks below. `git diff --check`:passed. Logs under .review/download-*.log.
- Tests validate types/required fields/lengths/header controls/consent/honeypot/path allowlist, all4 file mappings, fixed recipient and Reply-To/context, file-read-before-email and provider-acceptance-before-return ordering, missing config/file/provider reject/timeout, burst limiting. Actual Node HTTP request handler tested without listening socket:origin/method/content-type/JSON/size,attachment headers/no-store/PDF bytes,home/About404/traversal/direct-brochure redirect. Provider is mocked; no external mail sent.
- Chrome at existing local preview4322:brochure popup, required-field validation,valid test submission shows unavailable error and preserves details/no download; certificate enlarged-view ISO14001 download correctly opens resource form; desktop layout and390×844 one-column layout visually reviewed. Native modal close restores brochure focus; viewport override reset. Final desktop screenshot .review/download-form.png. Browser automatic success/save after real mail NOT RUN.
BLOCKED live activation: new server socket cannot listen in this execution sandbox (EPERM on0.0.0.0:3000 and loopback), so no full-stack network smoke test here. Tests exercise the actual request handler directly. Render/mail credentials/verified sender/recipient not configured; real provider acceptance/inbox arrival and production file download remain T72. Certificate viewing remains publicly accessible by design. Earlier A07/A08 enquiry/career/upload gates stay pending and are not satisfied by this separate download feature.

## A64 — CHG-031 — download rollback
PASS scoped rollback: direct brochure/certificate links restored; no DownloadForm, download client module, download manifest, Node email server, start command or mail environment example remains. Exact HEAD comparison passes for original README/package/verifier/certificate/privacy files; targeted source assertions confirm integration removed and unrelated About header measurement preserved. Astro check41 files/0 diagnostics;188-page build;49990 local references/source checks;git diff --check pass. Logs: .review/revert-download-{check,build,verify}.log. Browser/OS download not rerun. Concurrent About/catalogue/image changes preserved; these checks do not claim full acceptance of that work. A60 describes removed code and is not current acceptance evidence.

## CHG-035 criteria
A68: blue full-width quote banner matches supplied composition; centered white copy/document icon, orange outline/triangles, usable quote link, retained contextual destinations and responsive readable text without overflow.
A69: all 20 S9 client logos appear in source order, uncropped in a continuous loop; duplicate group hidden from assistive technology, accessible pause/resume plus hover/focus pause, reduced-motion/no-JS horizontal browsing. Current checks NOT RUN.

## CHG-035 evidence — 1 November 2026
A68 PASS scoped Chrome visual review at 1440×900 and 390×844; 320×740 geometry also confirms no horizontal page overflow. Blue centered white title/copy, document illustration and orange border/corner triangles match the reference composition; heading link navigates to /request-a-quote/ and existing disconnected form. Shared About/catalogue prop destinations retained by source review and generated-link verifier.
A69 PASS scoped Chrome desktop/mobile: 20 unique source logos, 40 rendered images in equal-width duplicate groups (4200px each desktop), second list aria-hidden. Image-box checks confirm all40 fit within88px desktop/72px mobile content height after grid-track correction; no page overflow. Pause label toggles checked state and computed animation state paused; resume plus focus leaving returns running with changed transform. Focus pause observed. Full source PDF and final desktop/mobile screenshots inspected. CSS reduced-motion rule checked statically (animation none, clone/control hidden, first group horizontally scrollable); actual OS reduced-motion and full75-second loop observation NOT RUN. Loop seam follows equal-width group geometry/50% transform rather than a timed full-cycle claim. Hover rule inspected in CSS, not separately pointer-tested.
Final command checks PASS: Astro check42 files/0 diagnostics;56/56 existing tests;188-page build;50,030 local link/asset checks plus source/catalogue/navigation/ARIA assertions; git diff --check. Logs/screenshots .review/quote-clients/. Initial verifier failed on Astro serialising a dynamically empty alt as a bare attribute; corrected to meaningful logo names under the already aria-hidden duplicate group, then rebuilt/reverified. No new permanent tests for this bounded presentation change. No real email/form submission, deployment, commit or push.

A70 — CHG-036 / R68: client pause UI/hover/focus stop absent, normal animation running, all20 source logos retained; footer icon-only44px link has accessible name and navigates to #main. Verify build/source checks and scoped browser. A69 pause evidence is historical/superseded. Current verification pending.

A70 PASS (1 November 2026): final42-file Astro check0 diagnostics;188-page build;50,030 local references and source/navigation/ARIA checks; git diff --check. Chrome confirms0 pause controls,40 logo images/20 unique logos, animation running with transform, empty footer link text, accessible Back to top name,44×44 bounds and #main destination. Click reaches #main/scrollY16. Desktop screenshot .review/quote-clients/footer-icon.png. Hover/focus stop rules absent by source check; reduced-motion unchanged/static review only. Mobile-specific browser review not rerun for this follow-up. No new tests for this bounded CSS/markup change; prior56 tests belong to CHG-035.

A71 — CHG-037 / R69: public and built canonical brochure exactly match the new1st November source; all188 generated page brochure links resolve to that asset. Source PDF has24 pages. Verification pending.

A71 PASS —1 November2026: source/public/built brochure byte equality confirmed with SHA25690b7e2d97ef310db6974b2b63703f7270e7ea711669a1b06e949f60ebdf8c06b. Source24 pages confirmed with PyMuPDF. All188 generated HTML pages have exactly one Company brochure action using /downloads/jbael-brochure.pdf.188-page build and50,030 local references/source checks pass; git diff --check passes. Logs .review/quote-clients/brochure-{build,verify}.log. No browser download/content re-review, new tests, deployment, commit or push; bounded binary asset replacement.

A72 — CHG-038 / R70: generated Careers phone has required and Phone * label; contact/quote phone lacks required and retains optional label. Build/check/link validation pending.

A72 PASS —1 November2026: generated Careers phone has required and Phone *; Contact/Quote phone omit required and keep optional label. Existing form.reportValidity handles native required validation.188-page build,42-file Astro check0 diagnostics and50,030 local link/source checks pass; git diff --check passes. Browser validation interaction not rerun; no new permanent tests for this field attribute change. Logs .review/quote-clients/career-phone-*.log.

A73 — CHG-039 / R71: all188 pages show three correctly named portfolio links in Resources with brochure-like target/rel; public/build PDFs match supplied source bytes exactly. Verification pending.

A73 PASS —1 November2026: all188 generated Resources sections contain the three exact named PDF links with target=_blank and rel=noopener. All3 public and built PDF files exactly equal their supplied sources (4/3/5 pages respectively); SHA256 recorded in sources.md.188-page build;42-file check0 diagnostics;50,594 local references/source checks;git diff --check pass. Logs .review/quote-clients/portfolio-*.log. No browser/OS PDF open or mobile visual review rerun; no new tests for static links. No commit/push/deployment.

A74 — CHG-040 / R72: full portfolio label/arrow single-line desktop/tablet, no footer overlap/page overflow; mobile can wrap words but arrow stays with Portfolio. Prior A73 source/link checks remain applicable; desktop natural-wrap design superseded. Current layout verification pending.

A74 PASS —1 November2026: Chrome1440/1200/1024/768px confirms entire portfolio link is one20px text line (line-height20.4), no page overflow.390/320px retain readable normal wrapping in44px touch row, no overflow; Portfolio/arrow joined by nonbreaking space. Desktop screenshot inspected; .review/quote-clients/footer-horizontal.png.188-page build and50,594 local link/source checks pass;git diff --check passes. Same shared footer across routes; PDF files unchanged. No new tests/typecheck for CSS-only layout and wrapper/entity edit. No commit/push/deployment.

A75 — CHG-041: Contact/Quote required/file checks block invalid input; valid mock submission shows thank-you/reach-out-shortly dialog with no-email demo notice and preserves fields; Careers preview retained.
A76 — CHG-041: all4 PDFs and certificate preview/download actions request4 required details on first use, cancel causes no action, valid mock submission resumes correct resource/action, subsequent session requests bypass, storage denied still works in-page, native certificate viewer/download focus and mobile/keyboard close usable. Static direct assets are public by design. Current verification pending; A64 direct-UI rollback evidence historical.

## CHG-041 evidence —1 November2026
A75 PASS scoped Chrome: Contact empty submit has4 invalid fields/no confirmation; completing required fields shows Thank you for your enquiry / Our team will reach out to you shortly plus explicit no-email demo notice. Done closes. Quote valid submission shows same dialog, prefilled Turbine context retained, Escape closes. Fields are preserved; Careers still has Check application preview and mandatory phone. Existing file validator unchanged and unit regressions pass. No actual mail/provider/network submission. Screenshot .review/quote-clients/enquiry-confirmation.png.
A76 PASS scoped Chrome desktop and390px: all4 footer PDFs first show details dialog with correct title; Cancel returns without opening file. All4 empty required inputs block submission; short phone shows inline error. Valid details then open selected ISO14001 viewer with correct image/title; original-image download produces actual local file. Separate fresh tab first-use ISO9001 Download certificate shows Submit & download and valid details produce actual file. Separate fresh tab first-use brochure opens correct PDF in new tab after submitting; later Executed Projects opens directly after navigating to Quote in same session. SessionStorage-denied fallback and flag-only contents verified in unit tests; browser storage denial not emulated. Native modal mobile layout inspected; Cancel/Done/Escape confirmation behavior tested. Screenshot resource-form-{desktop,mobile}.png. Full keyboard-trap traversal, no-JS and every individual certificate first-use combination not separately browser-tested; shared selectors/handler and all-route structure verified. Direct static assets remain public.
Final checks PASS:45-file Astro check0 diagnostics;60 tests (4 new validation/mock/session tests);188-page build;50,782 local references/source/navigation/ARIA checks; all188 routes have exactly one resource/confirmation dialog and4 required details fields; Contact/Quote action and Careers preview assertions;git diff --check. Logs .review/quote-clients/mock-*.log. Browser tests use only dummy details and local assets. No commit/push/deployment.

A77 — CHG-042 / R75: demo labels absent from enquiry/resource UI; no false email-delivery claims; human check required on all forms with refresh and invalid-answer block; successful validation/reset logic tested. Browser-only limitation documented. Current checks pending. A75–A76 demo-notice evidence historical.

A77 PASS —1 November2026:48-file Astro check0 diagnostics;62 tests (2 new arithmetic boundary/malformed-answer checks);188-page build;50,973 local reference/source checks; all generated forms contain required humanAnswer and no Demo mode/resource-demo/enquiry-demo labels;git diff --check. Chrome fresh-tab resource form with valid dummy client fields blocks blank answer; Another question refreshes prompt/clears answer. Desktop screenshot .review/quote-clients/human-resource-desktop.png;390px modal naturally scrolls with no page overflow. Contact challenge present/initialised. Successful CAPTCHA browser completion not performed; correct/incorrect answer logic verified in unit tests, handler validation order/reset reviewed in source. Earlier A75–A76 successful document/mock flows remain historical until completed with the new required check. Browser-only check is not production anti-bot protection; server verification remains deferred. Session keyv2 invalidates previous grants. Logs .review/quote-clients/human-*.log. No email/backend/deployment/commit/push.

A78 — CHG-043: every generated challenge has exactly4 lowercase alphabetic characters, input requires4 lowercase letters, exact match enforced, refresh clears answer/error; no arithmetic UI. Desktop/mobile render and build/tests pending. A77 arithmetic evidence historical.

A78 PASS —1 November2026:48-file check0 diagnostics;62 tests;188-page build;50,973 local references/source checks;git diff --check. Generator tests cover alphabet endpoints, mixed letters, exact length and correct match; validation rejects short/long/wrong/uppercase/numeric/non-string input. Chrome fresh-tab resource modal shows four lowercase letters, required labelled code input and icon-only Refresh captcha.1440px desktop screenshot .review/quote-clients/word-captcha.png;390px mobile layout inspected without page overflow. Successful browser CAPTCHA completion not performed; correct-match logic unit-tested. Same shared component used by resource and all enquiry variants. Browser-only validation limitation retained. Logs word-*.log; no deployment/commit/push.

A79 — CHG-044 / R77: clear24px refresh icon on44px high-contrast button; navy/orange form/captcha match brand, readable fields/code and desktop/mobile no overflow. Validation unchanged. Current checks pending.

A79 PASS —1 November2026: Chrome desktop1440px and390px mobile show navy header/white heading, orange document/captcha accents, navy patterned captcha/white letters and orange refresh button with24px bold circular-arrow SVG. Refresh click works;44px border-box button (42px content+2px border);390px form scrolls naturally without page overflow. Screenshot .review/quote-clients/themed-form.png.188-page build;50,973 local reference/source checks;git diff --check pass. No logic changes/new tests/typecheck; earlier62 tests apply to unchanged validation modules, not claimed rerun. Successful captcha completion not performed.

A80 — CHG-045 / R78: Contact/Quote have exact approved distinct copy; Done absent, exactly one44px cross control per confirmation; Escape/focus close behavior retained. Compact branded modal responsive. Current verification pending.

A80 PASS —1 November2026: generated Contact and Quote dialogs contain exact approved distinct title/message, exactly one data-close-confirmation button with Close confirmation accessible name, and no Done action.49-file Astro check0 diagnostics;188-page build;50,973 local references/source checks;git diff --check. Existing close handler/native Escape/focus restoration unchanged by source review. No browser submission or CAPTCHA completion rerun; compact dimensions/spacing verified by CSS/source only. Logs .review/quote-clients/friendly-*.log. No email/deployment/commit/push.

A81 — CHG-046: Contact labels map to correct unchanged addresses, all188 footer instances show all3 addresses below logo with same labels, pending-social sentence absent; responsive footer no overlap/overflow and Resources links remain usable. Verification pending.

A81 PASS —1 November2026: all188 generated footers include exactly3 address elements with corrected labels and matching postal addresses; pending-social sentence absent. Contact mapping assertions pass: Central Office/A204 Vadodara390007, Administrative Office/523 Bonanza Mumbai400059, Manufacturing Facility/Block143–144 Tundav391775.50-file Astro check0 diagnostics;188-page build;50,973 local reference/source checks;git diff --check. Chrome1440 desktop screenshot .review/quote-clients/footer-offices.png visually reviewed;1200/1024/768/390/320px confirms3 addresses,12px body, no address/page overflow. All existing resource links retained. No new tests for static content/shared rendering; no commit/push/deployment.

Final commit-readiness regression for CHG-035–CHG-046 (1 November2026):62 tests,50-file Astro check0 diagnostics,188-page build,50,973 local reference/source checks and diff whitespace pass against final combined worktree. Logs .review/quote-clients/commit-*.log. Browser evidence remains scoped to individual A68–A81 records; no extra browser completion claimed.

A82 — CHG-047: Privacy Policy has complete original relevant sections, date/privacy contact, accurate local form/session/no-tracking statements, no development placeholders or borrowed unsupported compliance claims; shared links consistent; build/type/link checks and responsive readability. Current checks pending.

A82 PASS —1 November2026: complete original13-section policy with effective/updated date and privacy email/phone/postal contact; local-only form/file handling, nonpersonal session flag, browser captcha/no analytics disclosed accurately. Main content has no development/design-review/simulated/before-launch wording. Shared footer/forms link labels now Privacy Policy across188 routes.50-file Astro check0 diagnostics;188-page build;50,974 local references/source/navigation checks;targeted13-section/date/data-handling/no-placeholder/link-label assertions;git diff --check pass. IAB desktop opening screenshot .review/quote-clients/privacy-policy.png;390/320px browser checks show13 sections,16px body and storage table fits container without page overflow; opening mobile screenshot inspected. No submissions/runtime changes/new tests. Hosting log retention, company mailbox retention/security practices and final legal applicability not audited; no compliance certification claimed. No commit/push/deployment.

A83 — CHG-048: no visitor-facing review/placeholder/source-document/pending-social or development labels in rendered pages/metadata/accessible text; source facts/valid privacy/engineering language retained. Working social destinations only; professional Careers and form errors. All188 pages audited; build/type/test/link checks pending.

A83 PASS —1 November2026: HTMLParser audit scans visible text plus title/alt/aria-label/placeholder/meta-description values across all188 generated pages (scripts/styles excluded); zero review-note/design-preview/demo/mock/placeholder/pending-source-copy findings. Results .review/quote-clients/copy-audit.json, script audit-copy.py. Engineering uses of design/review and truthful Privacy Policy handling intentionally retained. Contact review note and certificate source-note removed; certificate metadata/alt and hero alt cleaned; file error strings no preview; Careers professional expressions-of-interest text, Submit application/neutral thanks; no fabricated positions. Header/footer only actual LinkedIn link, no disabled social buttons.
Checks PASS:50-file Astro check0 diagnostics;62 tests;188-page build;50,974 local references/source checks including new all-page internal-copy regression guard;git diff --check. Scoped IAB Contact text/addresses,3 certificate cards/no source note/no disabled social buttons, Careers action/copy and390px mobile no-overflow inspected. Screenshot .review/quote-clients/production-copy-contact.png. No full visual inspection of all188 pages or actual email/captcha submission in this cleanup; shared-template coverage plus generated-content audit establishes copy coverage. Email still mocked, noindex/staging metadata untouched, company certificate validity/hosting operations not certified. No commit/push/deployment.

A84 — CHG-049: all188 footer instances order logo/tagline/addresses/socials; both shared social groups contain5 icons, LinkedIn real anchor and4 disabled buttons with no pending labels. Mobile/footer no overflow; verification pending. A83 social-removal evidence superseded.

A84 PASS —1 November2026: all188 generated footer instances order logo→tagline→3addresses→socials; both social groups each contain1 real LinkedIn anchor+4 disabled platform buttons, no pending labels/fake links.50-file Astro check0 diagnostics;188-page build;50,974 references/source checks;git diff --check. IAB desktop screenshot reviewed and geometry confirms tagline above addresses,5 icons/no page overflow; .review/quote-clients/footer-tagline-restored.png. Mobile browser not rerun for markup-order/icon restoration; existing responsive dimensions unchanged. No commit/push/deployment.

A85 — CHG-050: all188 headers use text-free jbael-logo.png without complete-logo srcset, footer uses unchanged complete-logo source/srcset/dimensions; existing company-name markup/CSS retained. Verification pending.

A85 PASS: all188 generated headers use /images/jbael-logo.png with321×324 intrinsic dimensions and no footer srcset; all188 footers retain /images/jbael-brand-248.webp, complete-logo srcset and496×481 dimensions.50-file Astro check0 diagnostics,188-page build,50,974 local reference/source checks and git diff --check pass. Desktop IAB header screenshot visually reviewed (.review/quote-clients/header-logo.png). Mobile browser checks not rerun; existing CSS display sizing and company-name markup unchanged. No new tests needed for bounded asset selection; no commit/push/deployment.

A86 — CHG-051: footer Brand contains complete-logo image without duplicate company-name span; separate footer tagline and offices remain; header retains text-free emblem and company-name span. Verification pending. Earlier A85 adjacent-markup preservation is superseded for footer only.

A86 PASS: all188 generated footer Brand links have no adjacent span/small wordmark and preserve complete-logo image and accessible home name; headers retain company wordmark and text-free emblem. Separate footer tagline/offices preserved.50-file Astro check0 diagnostics;188-page build;50,974 reference/source checks;git diff --check pass. Browser visual/mobile checks not rerun for conditional markup removal; no CSS changed. No commit/push/deployment.

A87 — CHG-052:4 canonical component pages/listing cards use3 exact supplied images with valid dimensions; all188 header/footer social groups link supplied Facebook/Instagram/YouTube safely while LinkedIn/X retained. Build/type/link and scoped visual verification pending.

A87 PASS:4 canonical detail heroes and their parent cards use exact3 supplied image derivatives; both social groups on188 routes contain supplied Facebook/Instagram/YouTube links, existing LinkedIn and disabled X, with4 safe new-tab anchors each.50-file Astro check0 diagnostics;62 tests;188-page build;50,974 reference/source checks;git diff --check. IAB desktop card screenshot visually reviewed,3 images loaded;390px mobile card screenshot/read-only geometry shows loaded335px images and no horizontal page overflow. Evidence .review/quote-clients/review-rows1-4.png and review-rows1-4-*.log. External profile ownership/channel destination not independently verified; YouTube homepage explicitly accepted. Browser detail-hero visual not separately repeated (generated mapping/dimensions asserted). No commit/push/deployment.

A88 — CHG-053: footer emblem/tagline horizontal centres align desktop/mobile; addresses/socials remain left-aligned, all188 routes share wrapper. Build/link/browser checks pending.

A88 PASS:188 generated routes contain footer-identity wrapper.188-page build and50,974 local reference/source checks pass. IAB desktop measured logo/tagline horizontal centres both175.46875px;390px mobile both147.46875px, page375px≤viewport390px. Desktop screenshot visually reviewed (.review/quote-clients/footer-centred.png). Addresses outside centred wrapper remain left-aligned. No tests/typecheck rerun for static wrapper/CSS-only change. No commit/push/deployment.

A89 — CHG-054: all188 footers use final artwork/srcset/intrinsic ratio; header unchanged. Transparent footer image background and centred layout retained. Verification pending; supersedes earlier footer-asset assertions only.

A89 PASS: all188 generated footer sources/srcsets use final supplied artwork and1072×1080 intrinsic ratio; headers retain jbael-logo.png. Both derivatives retain alpha transparency.50-file check0 diagnostics;188-page build;50,974 reference/source checks;git diff --check pass. IAB desktop screenshot reviewed, image loads and computed background transparent, centre wrapper retained (.review/quote-clients/footer-final.png). Mobile not rerun for asset-only replacement; existing display sizing unchanged. No tests rerun; no commit/push/deployment.

A90 — CHG-055: footer logo120px desktop/104px compact, proportional height and aligned tagline centres; header sizing preserved; no overflow. Build/link/browser verification pending.

A90 PASS:188-page build/50,974 reference-source checks, all188 footer sizes-attribute assertions and git diff --check pass. IAB1280px viewport footer width120px/height120.96px versus header57px;390px viewport footer104px/height104.84px versus header42px. Logo/tagline centres identical at175.46875px desktop/147.46875px mobile; no page overflow. Desktop footer screenshot visually reviewed (.review/quote-clients/footer-large.png); mobile geometry checked, footer screenshot not captured. Typecheck/tests not rerun for CSS/sizes-only change. No commit/push/deployment.

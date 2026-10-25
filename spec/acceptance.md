# Acceptance and verification

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

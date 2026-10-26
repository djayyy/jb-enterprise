# Decisions and open questions

## Confirmed user decisions
D01 Fresh implementation, preserve legacy; refine multiple versions.
D02 No application database; email-only enquiry handling and follow-up.
D03 Use supplied requirements; make reasonable choices where design/behaviour is missing.
D04 Benchmark MD&A and PPS. Do not copy their branding or claims.

## Proposed defaults
D05 Astro/static content on Vercel; verify hosting independently.
D06 Careers accepts future-opportunity applications until real jobs supplied.
D07 Category catalogue with contextual enquiry, no shopping cart.
D08 Contact is short; Quote collects technical scope. GST optional.
D09 Projects/resources and static search improve discoverability.
D10 Raw-data contacts provisional in review; final values require reconciliation.
D11 2 GB aggregate quote/contact upload; 5 MB resume; 30-day file retention. These policy interpretations need confirmation before live use.

## Open register
| ID | Question | Default / consequence | Needed by |
| --- | --- | --- | --- |
| O01 | Which Mumbai address, office labels and phone numbers are correct? | Raw-data provisional; brochure conflicts | Launch |
| O02 | Is Vercel the actual host and which repository deploys production? | User-reported, not independently verified | Integration |
| O03 | Where does the existing live quote form send/store enquiries? | Do not infer from local action="#" | Cutover |
| O04 | Who receives contact, quote and career messages? | Server-side config placeholders only | Live form testing |
| O05 | Does 2 GB mean per file or total? Which formats/count? | Proposed aggregate interpretation | Upload implementation |
| O06 | Retention, download expiry, staff renewal and scanning provider? | Keep private; 30 days proposed | Live uploads |
| O07 | Final logo, certificate copies and public project permissions? | Use source assets in review; verify for release | Launch |
| O08 | Exact capacity instead of XX MW and gas/nuclear detail? | Omit unsupported claims; retain sourced overview | Launch |
| O09 | Any real vacancies? Application recipient/fields? | Future-opportunity form | Launch |
| O10 | Keep which existing articles and URLs? | Audit reuse and redirects | Cutover |
| O11 | Final social links and leadership attribution? | Hide unverified destinations/names | Launch |

No open factual question requires stopping layout work. Do not turn an unverified default into a public business claim. Record new decisions with date, reason and affected requirement IDs.

## Implementation decisions — CHG-002, 2026-10-24 UTC
D12 Astro 7.4.2 selected and installed for local static output. Upgrade from the first scaffold dependency resolved reported advisories; Vercel remains a later deployment choice.
D13 First review contains 22 static routes. Equipment uses grouped sections; quality lives under About; standalone projects/certificates/resource/search pages deferred until meaningful content is available. No empty links exposed.
D14 Preview file formats are PDF/DOCX/JPG/PNG, ten files maximum for contact/quote; careers PDF/DOCX only. Byte limits implement the prior proposed policies and are not production validation. O05/O06 remain open.
D15 All typography is self-hosted, with OFL license files. No third-party font or analytics request needed in the preview.
D16 Version checkpoint uses a source archive and SHA-256 manifest because no Git repository exists. No repository was initialised solely for workflow compliance. Git branches/tags remain a later setup task.
D17 About leadership/mission expansion and source-supported project case studies remain content tasks; first review must not be represented as complete coverage of every supplied paragraph.

Date correction: earlier specification records used 2026-10-25. The implementation/checkpoint date verified from UTC system time is 2026-10-24; historical entries are preserved instead of silently rewritten.

## V0.2 correction — CHG-003, 25 October 2026
D18 CONFIRMED: requirement-only business content and S1 visual hierarchy supersede V0.1 discretionary redesign. Interface assistance may explain actions without inventing business facts.
D19 Source certificate copies extracted from S1 pp.41–43 are displayed with enlarge/download and a review note. O07 issuer validity/entity/address/rights review remains open; obtaining copies is no longer blocked.
D20 Five social icons follow S1. Only LinkedIn has a supplied destination in S4; other four remain disabled with pending labels. O11 final social URLs still open. Leadership text is supplied; no individual attribution is invented.
D21 Service family/subservice choices update in-page with replaceState and stable focus rather than full route navigation. Dedicated detail pages remain available for sharing/reading.
D22 V0.2 source checkpoint is separate from V0.1; prior archive is preserved. No Git repository/deployment created. V0.2 closes the About/certificate-presentation deferrals from D13/D17; projects and independent verification remain pending.

## CHG-004 decisions — 25 October 2026
D23 User feedback prioritises complete visible hero imagery and understandable controls. Use text/image split with contain sizing; transition between actual supplied images rather than fabricate 3D rotating machinery. Auto-rotate is opt-in, labelled, immediately responsive and stoppable.
D24 Remove decorative numbering from Home/About because it implies ordering or separate steps. Source lists and technical numbers are unchanged.
D25 Adopt category-first navigation principle from reviewed MD&A services page, retaining JBAEL source hierarchy/content. Three equal image cards on each directory; Specialist/Auxiliary use existing S4 workshop image. Equipment gets category filtering/search with deep-link context. No competitor assets/copy imported.
D26 Source-only content remains binding; user explicitly authorised visual/interaction refinement beyond V0.2. No new hosting/database/email scope.

## CHG-005/006 decisions — 25 October 2026
D27 User corrections supersede D23: manual hero with finite image motion; remove auto-rotation UI, selected badges and redundant equipment strip.
D28 Generate hierarchical menus from source arrays and use stable detail/scope/component anchors; valid item identity determines category when URLs conflict. No duplicate business-content source.
D29 Place all three named theme choices before the artwork on every width. This ensures discovery even on short screens without shrinking source imagery into thumbnails; desktop banner also adapts to viewport height.
D30 Remove pointerleave dismissal rather than rely on visitors crossing a gap quickly. Menus remain open until deliberate navigation/dismissal, another menu or focus leaving. No hover-only access; native click/keyboard disclosure remains.

## CHG-007 decisions — 25 October 2026
D31 User rejects D29 placement: use the actual S1 carousel technique, compact dots inside the banner and side arrows. Manual selection avoids introducing ongoing motion without a pause control; finite image animation remains.
D32 Supersedes D30's persistent-open behaviour: hover/focus reveals successive source breakdown panes; full-height trigger closes the pointer gap,400ms delayed exit protects transit, and keyboard/touch remain supported. Original JBAEL styling; MD&A is navigation inspiration, not copied design/content.
D33 The entire current site's generated destinations are audited semantically and over HTTP; part links identify exact parts, service fragments select their own family, and generic anchors retain their purpose. Production/legacy redirect configuration remains a separate launch task.
D34 Astro strict trailing-slash matching caused framework error pages in preview. Accept both forms and normalise client route detection. Current preview moved to4322 because the old4321 process could not be stopped within current permissions; no permission escalation/deployment occurred.

D35 — CHG-008,26 October2026: prioritise the user-requested gap-free hero frame. Use proportional cover cropping rather than contain letterboxing or distortion. Keep animation scale at or above1 so it cannot expose frame edges. No claim that every original pixel remains visible at every viewport.

## CHG-009 decisions —26 October2026
D36 Latest user instruction supersedes the grouped catalogue default: build a distinct page for each category, service/equipment group and supplied leaf scope/part. Keep existing service item URLs for compatibility. No unsupported subcomponents or technical details are invented to pad pages.
D37 Category labels are actual links; adjacent disclosure buttons preserve touch access to the hover hierarchy. Both catalogues use one data tree/template contract so navigation cannot independently drift from rendered content.
D38 Use inspected supplied photographs as representative backgrounds. Reuse relevant images when exact component photography is missing; do not promise a unique or technically exact photograph for every leaf. Source/rights approval is still required before launch.
D39 Whitelist legacy preview query/fragment destinations in a small client bridge. Internal links always use canonical paths. Production redirects from the old jbepower.com site remain a separate release task.

D40 — CHG-010: apply the same simplification to both catalogues. Keep search on each all-items index only; remove sidebars, sibling/related lists and duplicate parent-list actions from all nested pages. Retain breadcrumbs and each parent page’s own child cards, which are necessary to navigate the hierarchy. Use the freed width for three-column desktop cards, reflowing to two/one columns.

D41 — CHG-011: supersede D16/D22 archive policy now that the project has Git and a GitHub origin. Delete only the eight generated project-root JBAEL-*-source.zip files. Preserve supplied input archives under requirement/. Ignore future source ZIPs and retain the existing dist/ ignore. The static host serves dist/ contents; Git-based hosting builds them from tracked source. No history rewrite or automatic push/deployment.

D42 — CHG-012: interpret separate mobile/web code as independently maintained presentation files with shared content/routes/semantics, avoiding divergent business data and duplicate accessibility trees. Mobile/tablet breakpoint matches navigation at1000px. Existing common styles remain shared.
D43 — CHG-012: a normal-flow mobile carousel prevents text and action overlap and allows growth for longer copy; use two action columns and an independent row for dots. Very short/zoomed viewports may scroll rather than hide content. Desktop retains source overlay composition.
D44 — CHG-012: mobile scope panels reuse/reposition existing nodes directly after their triggers; desktop restores adjacent panes. Actual touch/keyboard/resize execution awaits an authorised browser. Source/HTTP/CSS-cascade checks are explicitly distinguished from rendered acceptance.

D45 — CHG-013: mobile focus loss is not a reliable dismissal signal. Remove blur closing and touch-driven focus jumps; use explicit summary/category/item controls, outside pointer, Escape or destination navigation. Desktop closes on real external focus, not a null focus transition. Native summary defaults are prevented only when JS handles the same toggle synchronously.
D46 — CHG-013: sliding means user-driven swipe/drag, not autoplay. Preserve arrows, dots and keyboard. Require horizontal intent and a deliberate movement threshold; leave native vertical scrolling/pinch zoom available. Reuse existing images/content and honor reduced motion. Browser confirmation remains necessary despite event-fixture tests.

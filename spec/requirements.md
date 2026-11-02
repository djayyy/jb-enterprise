# Requirements

Sources S1-S6 are defined in [sources.md](sources.md). Status reflects evidence, not completion.

| ID | Status | Requirement | Source |
| --- | --- | --- | --- |
| R01 | CONFIRMED | Fresh implementation, iterative review versions, preserve legacy | User |
| R02 | CONFIRMED | No application database; follow up through email | User |
| R03 | DOCUMENTED | JBAEL branding, supplied logo/tagline and updated contacts | S1 pp.1-12; S2 pp.5-7,15 |
| R04 | DOCUMENTED | Home: three supplied banner themes, introduction, Why JBAEL, industries, service summaries, certifications and enquiry actions | S1 pp.1-9 |
| R05 | DOCUMENTED | About: who we are, approach, capabilities, mission, vision, goal and leadership message | S1 pp.10-12; S2 pp.6-7 |
| R06 | DOCUMENTED | Thermal: turbine, generator, boiler, electrical and control/instrumentation service detail | S1 pp.13-19; S2 pp.7-8 |
| R07 | DOCUMENTED | Hydro: turbine, generator and electrical/C&I service detail | S1 pp.20-23; S2 pp.8-9 |
| R08 | DOCUMENTED | Testing/inspection, revamping/refurbishment/repair and tribology/lubrication reliability | S1 pp.24-26; S2 pp.9-10 |
| R09 | DOCUMENTED | OEM sourcing, reverse engineering process and critical component development | S1 pp.33-34; S2 p.12 |
| R10 | DOCUMENTED | Thermal parts: turbine, generator, boiler/pressure parts, cooling, fans/blowers and fasteners | S1 pp.27-32; S2 p.11 |
| R11 | DOCUMENTED | Hydro parts: turbine, generator and mechanical components; other parts: pumps, valves, electrical, seals/gaskets | S1 pp.35-40; S2 pp.13-14 |
| R12 | DOCUMENTED | ISO 9001:2015, 14001:2015 and 45001:2018 certificate presentation | S1 pp.41-43; S2 p.14 |
| R13 | DOCUMENTED | General contact form: first/last name, company, phone, email, current need, message, attachment and CAPTCHA | S1 p.45; S2 p.15 |
| R14 | DOCUMENTED | Quote: client/location, company, phone, email, contact person/designation, GST, need, attachment and CAPTCHA | S1 p.46; S2 p.15 |
| R15 | DOCUMENTED | Enquiry/quote attachments up to 2 GB; storage/delivery workflow unspecified | S1 pp.45-46; S2 p.15 |
| R16 | DOCUMENTED | Careers invitation and resume submission; no defined vacancies or form fields | S1 p.44; S2 p.15 |
| R17 | PROPOSED | Project evidence from brochure; resources and retained useful articles | S3; user permits filling gaps |
| R18 | PROPOSED | Static search of services, equipment and resources | Search icon in S1; behaviour unspecified |
| R19 | CONFIRMED | Benchmark MD&A/PPS, original design and stronger visitor experience | User; S5-S6 |
| R20 | PROPOSED | Responsive, accessible, fast pages; SEO metadata, redirects, spam controls and useful failure states | Engineering baseline |
| R21 | DOCUMENTED | Replace reference imagery with real JBAEL material | S1 p.47; S2 p.5 |

## Scope detail
Thermal turbine: assembly, overhauls, refurbishment, blading, diaphragms, casing, bearings, valves, balancing, machining/welding, inspection and commissioning. Generator: stator/core/windings, rewinding, rotor/shaft, retaining rings, fans, bearings, coolers, testing and commissioning. Preserve the full source lists when drafting detail pages.
Hydro services cover runners, guide vanes, casings, shafts, alignment, bearings, seals, stators/rotors, excitation and electrical/control systems.
Supply is a catalogue with enquiries, not checkout. R33 supersedes the earlier grouped-only default: every supplied component/scope receives its own page under a meaningful category and parent. Detail must stay within supplied facts; no invented technical specifications. Gas and nuclear appear in industries served, but detailed service scope is not supplied.

## Out of baseline
Application database, CRM, applicant tracking, customer login, ecommerce/payment, live stock/pricing, CMS editing dashboard, newsletter subscription and invented vacancies. Domain transfer is a separate operational workstream. Large attachments remain in scope; they are not silently deferred by the no-database decision.

## CHG-002 implementation coverage
Evidence statuses above remain source/authority labels, not completion claims. V0.1 review coverage, deliberate deferrals and exact implemented routes are recorded in [implementation-status.md](implementation-status.md). In particular, R05/R12/R17/R18 are partial; R13-R16 are disconnected interfaces only; R15 remains a future real-upload requirement. All original scope remains in the backlog.

## V0.2 correction — CHG-003
R22 CONFIRMED: use only supplied requirement data for business content; follow S1 section hierarchy and three-slide homepage instead of discretionary marketing redesign. Preserve social icon set without inventing missing destinations. Show supplied certificate copies and leadership message. Thermal/Hydro image selection precedes service scope; switching service in the explorer must not reset scroll to page top.

Current CHG-003 coverage: R04 three slides and source homepage sequence implemented; R05 full supplied About/What We Do/leadership implemented; R12 supplied certificate presentation/enlarge/download implemented, independent validation pending. R06–R09/R18 service exploration updated; R22 governs all future copy. Existing production and broader-search deferrals remain in implementation-status.md.

R23 historical: clear named hero selectors, complete imagery and gentle motion. Rotation-control requirement is superseded by R25; first-screen placement is refined by R28.
R24 CONFIRMED: service and equipment directories use consistent image categories and clear nested choices, including Specialist.

R25 CONFIRMED: large animated hero without rotation labels, selected badges or repeated equipment strip.
R26 CONFIRMED: grouped Services/Equipment dropdowns showing detailed source hierarchy.
R27 CONFIRMED: matching content and accurate arrival position for all category/service/equipment links.

R28 historical: discover three themes without scrolling and keep menus open while moving toward content. The CHG-006 above-banner placement is superseded by R29; hover/dismissal is refined by R30.

R29 CONFIRMED: use the supplied layout's in-banner dots/side arrows; no above-banner theme row. Supersedes R28 placement choice, retaining discovery in first screen.
R30 CONFIRMED: category/service/part breakdown appears on desktop hover, with keyboard/touch alternatives and original JBAEL styling.
R31 CONFIRMED: audit the complete current website for wrong links, category/content mismatches and unexpected arrival positions; fix defects and record actual coverage.

R32 CONFIRMED: all three homepage images fill the banner edge to edge without side gaps. Proportional cover sizing supersedes earlier contain sizing; implementation uses proportional outer-edge cropping rather than image distortion.

R33 CONFIRMED: distinct catalogue index, category, individual service/equipment group and child-scope/part pages replace the in-page grouped explorer.
R34 CONFIRMED: homepage and menu category/item/child labels navigate to their own pages; hover previews remain. Preserve older preview links through safe compatibility mapping.
R35 CONFIRMED: each catalogue node has a relevant supplied background image plus readable source-based text; use the same navigation/presentation logic for services and equipment.

CHG-009 coverage: R33–R35 implemented for static review; all13 services,100 source scopes,12 equipment groups and47 parts retained. Category navigation now opens a page; the earlier R22 no-scroll-reset rule applies to local search/hover previews, not deliberate navigation to a different URL. Actual browser acceptance is pending.

R36 CONFIRMED (CHG-010): search appears only on All Services and All Equipment indexes. Category, service, component and part pages contain their own content/children, without related/sibling lists, all-items sidebars or duplicate parent-list actions. Breadcrumbs and shared header/footer navigation remain.

R37 CONFIRMED (CHG-011): maintain one working project folder and rebuild the same dist/ output. Remove generated source ZIP snapshots and do not create new snapshots/version folders. Git retains source history; dist/ and generated source ZIPs remain ignored. Original requirement inputs are preserved.

R38 CONFIRMED (CHG-012): maintain separate mobile/tablet and desktop presentation code with shared source content; audit and fix narrow-screen irregularities. All three homepage banner titles remain visible; Explore Services and Contact Us stay side by side. Review touch navigation, cards, forms, certificates and footer at320–1000px; preserve desktop behaviour.

R39 CONFIRMED (CHG-013): mobile Services/Equipment disclosures remain open during tapping/scrolling/focus loss; close only through explicit dismissal/navigation. Add horizontal touch swipe and mouse/pen drag between all three hero banners alongside existing arrows/dots; preserve vertical scrolling, pinch zoom, links and reduced motion.

R40 CONFIRMED (CHG-014): Services and Equipment share a connected category → item → scope/part menu. The open parent path uses consistent navy/white highlighting with an orange edge; component panels name their parent category/item. Desktop hover intent and contiguous panels protect pointer travel. Mobile children expand directly below their parent at both levels, with explicit chevrons, native destination links, no focus/scroll jumps and unchanged dismissal rules.

R41 CONFIRMED (CHG-015): neither Services nor Equipment preselects Thermal or any other category/item. Opening/reopening or changing layout starts with categories only. Each intentional category interaction reveals its immediate items; only an item interaction reveals its scopes/parts. Changing category clears descendant choices.

R42 CONFIRMED (CHG-016): desktop Services/Equipment menus are compact lists directly below their own header labels, with content-sized heights and no reserved unopened columns. Each child panel appears adjacent to its parent row; prefer rightward cascading and keep the entire branch inside the viewport. Mobile retains nested disclosure.

R43 CONFIRMED (CHG-017): shift desktop Home–Contact navigation left and always open child dropdowns to the right. Remove View all services/equipment rows from dropdowns on every device; catalogue index routes remain available elsewhere. Preserve sequential opening and mobile nesting.

R44 CONFIRMED (CHG-018): move Home–Contact only a small margin left within the original single-row desktop header. Do not align the links against the logo or create a second navigation row. Retain rightward-only, list-only dropdowns and mobile nesting.

R45 CONFIRMED (CHG-019): align the Equipment Supply root list vertically beneath its header label, with a further modest leftward adjustment to Home–Contact. Preserve the single-row header, logo clearance, rightward child panels, list-only roots and mobile behaviour.

## Company review planning — CHG-020, registered in CHG-021

The existing [company review plan](company-review-2026-10-28-plan.md) reserved the following IDs. Registration records the plan, not implementation or a repeat of its historical workbook inspection.

- R46 DOCUMENTED: refine welcome/brand/About/CTA graphics and top control to company feedback references; R52 supersedes earlier visual proposals where they differ.
- R47 DOCUMENTED: improve industry imagery/readability, distinguish Critical Component from Reverse Engineering, replace thermal turbine service imagery and retain accepted industry actions.
- R48 DOCUMENTED: require career phone and rename the two supplied office headings, preserving addresses and other form defaults.
- R49 DOCUMENTED: require name, contact phone, company and email before certificate/brochure requests; shared UI and live delivery remain planned with actual mail/storage configuration required.
- R50 DOCUMENTED: add approved executed-projects, supplied-spares and reverse-engineering portfolio documents when originals are supplied; do not invent files/projects.
- R51 DOCUMENTED: add an approved client-name strip with pause/reduced-motion behaviour when approved names are supplied.

## Current image/layout request — CHG-021

R52 CONFIRMED: plan the six latest requests before implementation. Match the supplied centred, vertically stacked Welcome/Why composition using the specified thermal plant background and subtle shapes, retaining current theme/readable text. Use the supplied complete logo in header/footer; replace four industry images with clear text; give Critical Component its distinct supplied image; map remaining About Who We Are and Thermal Turbine images to their sections. All nine originals are under `requirement/images-feedback-311026/`. Preserve source content, navigation and unrelated image mappings. Exact assets, size limits and review criteria: [current plan](image-feedback-2026-10-31-plan.md). Implemented in CHG-022 following user approval; responsive Chrome and command verification recorded against A52. Production integrations and wider workbook scope remain separate.

R53 CONFIRMED (CHG-023): restore header/footer sizing, navigation spacing and catalogue presentation from the deployed baseline/commit 5d2a450 while retaining supplied images and the agreed Welcome layout. Homepage Industries Served, Core Engineering Services and Equipment cards use similar compact proportions, readable background/text and a simple clearer-photo/slightly-larger-text hover/focus treatment. Cards must not expand or overlap on interaction. Preserve full copy, links, mobile access and reduced motion; allow natural height growth for long text or narrow/zoomed layouts. Fit the wide-desktop Industries heading and four-card row below the sticky header in a normal laptop viewport; smaller layouts may scroll.

R54 CONFIRMED (CHG-024): make the clearer card photograph, lighter readable text scrim and larger copy permanently visible. Remove hover-dependent clarity, zoom and typography changes from Industries/Core Services/Equipment image cards, including shared service/equipment catalogue cards. Preserve compact homepage sizing, supplied images, content/links and restored header/footer/Welcome. Keyboard focus retains an outline without changing the card's image/text presentation. Hero/carousel and navigation behaviour are outside this change.

## Company-name rule and About reference layout — CHG-025/026

R55 CONFIRMED: implement a thin orange rule below ENGINEERING LIMITED and above the tagline, matching the user screenshot while preserving current shared brand/header/footer dimensions and navigation positions.

R56 CONFIRMED: implement /about/ around the composition and similar backgrounds of S1 PDF pages 10–12: full-width Who We Are/approach/objective over the red industrial silhouette; two-column What We Do with all six capabilities and circular Services/Spare Parts links over the grey engineering watermark; Vision/Mission/Goal circles beside the full Leadership Message over the pale industrial/world-map backdrop. Retain supplied business copy, live HTML, existing links/anchors and responsive readability. Exact plan: [About reference plan](about-reference-2026-11-01-plan.md). Implemented in CHG-026; scoped local verification in A56–A57.

R57 CONFIRMED (CHG-027): the opening About Us/Who We Are section, through the full “Our objective is simple” statement, must fit the initial desktop screen below the unchanged utility/header. Remove the brochure action beneath it. Tighten section/title/list spacing before reducing text size; retain all source copy and matching background. Mobile, short and zoomed screens retain readable natural flow instead of clipping content.

R58 CONFIRMED (CHG-028): the initial desktop About screen shows only the complete opening through the objective; What We Do must start below the viewport and appear after scrolling. Fill remaining screen height beneath the unchanged utility/header; allow natural growth on small/zoomed screens. Keep What/Leadership and their content/anchors.

R59 DEFERRED (CHG-031): user requested reverting CHG-029 for now. Brochure/certificate downloads remain direct without a details form or email notification; no backend is active.

## About screen density and catalogue image clarity — CHG-030

R60 CONFIRMED: reduce excess opening top space and fit What We Do (including both image links) and full Leadership content within their normal desktop screen below the sticky header. Retain source copy/backgrounds, opening objective/first-screen boundary, natural mobile/zoom scrolling and readable text.

R61 CONFIRMED: permanently clear photos and readable text throughout service/equipment catalogue heroes and their component cards, matching Home's clearer treatment. Localise text scrims, avoid heavy whole-photo darkening and hover-dependent clarity/zoom; retain focus outlines and links.

R62 CONFIRMED: inspect supplied images and replace repeated service/component backgrounds with suitable alternatives wherever available, prioritising meaningful subject matching and distinct sibling cards. Preserve requested Thermal Turbine and Critical Component source images. Keep provenance/dimensions and route-stable explicit choices; do not invent exact equipment/project identification for representative photos.

R63 CONFIRMED (CHG-032): inspect and fix zoomed/cropped/blurry service and equipment catalogue banners and child/component photos. Show the whole supplied photo in bounded media areas, preserve aspect ratio and prevent enlargement past intrinsic CSS dimensions. Keep readable text separate from machinery, maintain canonical links, requested image mappings, previous duplicate-image fixes and keyboard/mobile access. Source resolution remains the upper limit; preserve unrelated Home/About/header styling.

R64 CONFIRMED (CHG-033): remove light/white padded photo containers from catalogue banners and component cards; show photographs edge to edge across their image areas. Retain original proportions and avoid the earlier extreme full-banner zoom through source-proportional bounded hero sizing and moderate adaptive card media heights. Filling card areas may crop edges; latest fill preference supersedes R63's strict contain/no-enlargement requirement for catalogue media. Keep existing photos, readable separate text, routes, focus access and Home/About/header presentation.

R65 CONFIRMED (CHG-034): standardise service/equipment catalogue card images, typography and text alignment. Use one photo height per breakpoint across all cards, with equal-height cards and aligned labels, headings, summaries and actions within each row. Keep complete readable copy, edge-to-edge photos, no hover zoom and natural narrow-screen growth; preserve hero/Home/About/source content. Supersedes R64 source-dependent card heights.

R66 CONFIRMED (CHG-035): match the supplied quote-banner reference with a full-width blue surface, centered white heading/copy, document icon and orange border/triangle accents. Retain a discoverable keyboard-accessible quote destination and existing contextual links.

R67 CONFIRMED (CHG-035): add a seamless continuously scrolling homepage client-logo strip, similar to the existing website, using all 20 logos from the supplied Trusted By Industry Leaders PDF. Preserve proportions, provide pause/resume and hover/focus pause, respect reduced motion and expose each client only once to assistive technology.

R68 CONFIRMED (CHG-036): remove client pause/resume UI and hover/focus pausing; keep normal client animation continuously running. Retain reduced-motion preference handling. Replace footer Back to top text with an upward icon, keeping accessible name, keyboard focus and same destination. Supersedes R67 pause requirements.

R69 CONFIRMED (CHG-037): use supplied requirement/JBAEL -BROCHURE- 1st Nov(1).pdf for every company brochure link, superseding the old32-page downloadable brochure. Keep the canonical download URL.

R70 CONFIRMED (CHG-038): Careers phone is mandatory, visibly marked Phone *, and empty phone blocks native form validation. Contact/quote phone remain optional.

R71 CONFIRMED (CHG-039): add Executed Projects, Spares supply, and Reverse Engineering & Manufacturing Portfolio PDF links under shared footer Resources, using supplied matching PDFs and the same new-tab behavior as Company brochure.

R72 CONFIRMED (CHG-040): keep the complete Reverse Engineering & Manufacturing Portfolio link and arrow on one horizontal line where screen space permits; allocate footer Resources width accordingly. Narrow phones retain readable wrapping without an orphan arrow or page overflow.

R73 CONFIRMED (CHG-041): Contact/Quote use Submit enquiry and mock thank-you popup with reach-out-shortly wording plus explicit demo/no-email notice. Retain native required/file checks; Careers stays preview-only.
R74 CONFIRMED (CHG-041): gate all brochure/resource PDF and certificate view/download actions behind shared required Name, Contact number, Company name, Email popup. Mock submission then completes originally requested action. Once-per-tab browser-session grant; no personal details persisted/transmitted. Keep direct static assets public (UI gate only); email integration deferred. Supersedes R59 direct-UI-download default.

R75 CONFIRMED (CHG-042): remove demo-mode banners from form flows; use neutral thank-you/resource-ready text without asserting email delivery. Add required accessible human-verification question with refresh, empty/incorrect rejection and reset after successful submission to resource/contact/quote/career forms. Browser-only challenge in current static phase; server-verified CAPTCHA deferred to email integration.

R76 CONFIRMED (CHG-043): replace arithmetic human check with a compact four-letter lowercase text code, required matching input and icon-only refresh. No numbers/arithmetic question. Existing validation/reset/session behavior retained.

R77 CONFIRMED (CHG-044): make captcha refresh icon clearly recognisable and add website navy/orange theme accents to resource forms without changing validation behavior.

R78 CONFIRMED (CHG-045): use approved friendly, distinct Contact/Quote confirmation headings/messages with reach-out-shortly wording; remove Done, keep only top-right close cross and Escape/focus recovery. Keep navy/orange style with compact spacing. Mock-only/email integration unchanged. Supersedes R75 neutral-copy wording.

R79 CONFIRMED (CHG-046): rename Mumbai Office to Administrative Office and current Administrative Office to Manufacturing Facility, preserving address details. Add all3 addresses under footer logo (Central Office, Administrative Office, Manufacturing Facility), compact readable text allowed. Remove Additional social profile links pending.

R80 CONFIRMED (CHG-047): replace Privacy & preview information with complete company-facing Privacy Policy; remove development/review/launch placeholders, reference MD&A/Triveni policy structure without copying or importing their tracking practices. Cover identity, information, purpose, storage/cookies, sharing, retention, security, choices/rights, external links, children, international handling, changes and privacy contact. Accurately describe current local-only form behavior; do not invent compliance certification/provider/retention commitments.

R81 CONFIRMED (CHG-048): audit all188 rendered pages/shared components for visitor-facing internal review/development/placeholder wording. Remove Contact/certificate review notes, provenance qualifiers in display/alt/meta text and unfinished Careers/form error text; omit social controls with no real destination. Retain truthful privacy disclosures, meaningful engineering terms and source-backed company facts. No automatic deployment/real-email change.

R82 CONFIRMED (CHG-049): footer tagline immediately below logo, before all3 office addresses. Restore all5 social icons in shared header/footer; LinkedIn keeps real link, unknown profiles stay disabled without pending/unfinished labels or fake URLs. Supersedes R81 social omission only.

R83 CONFIRMED (CHG-050): header emblem uses existing jbael-logo.png without embedded Advanced Engineering Ltd text; footer keeps existing complete jbael-brand artwork. Preserve company wordmark/tagline/layout beside both emblems.

R84 CONFIRMED (CHG-051): remove the separate company-name wordmark beside the footer logo because the complete artwork already includes the name. Keep footer artwork, tagline below logo, offices and header unchanged. Supersedes R83 only for footer adjacent name markup.

R85 CONFIRMED (CHG-052): implement review PDF rows1–4 using three image_1_01-11-2026 files at matching component routes/cards (IPCV in both groups), plus supplied Facebook, Instagram and YouTube URLs in header/footer. YouTube uses supplied homepage pending actual channel; LinkedIn and disabled X retained.

R86 CONFIRMED (CHG-053): centre footer emblem above Powering precision tagline; preserve left-aligned addresses/socials and header.

R87 CONFIRMED (CHG-054): footer uses supplied Final-Log-at-Bottom-1-11-26.png artwork with transparent exterior, remains centred above tagline; header unchanged.

R88 CONFIRMED (CHG-055): enlarge final footer logo for stronger visual presence while preserving centre above tagline and header sizing.

R89 CONFIRMED (CHG-056): replace shared header/footer YouTube homepage link with user-supplied https://youtube.com/@jbael.official. Supersedes R85 homepage destination only.

R90 CONFIRMED (CHG-057): activate shared header/footer X / Twitter icons with exact user-supplied http://x.com/jbael.official destination, replacing disabled controls.

R91 CONFIRMED (CHG-058): correct shared header/footer X destination to user-supplied https://x.com/jbaelofficial, superseding R90 URL.

R92 CONFIRMED (CHG-059): replace Hydro generator components group image under Equipment Supply/Hydro with supplied img feedback 2 nov.jpeg, consistent on group detail and listing cards. Preserve child component images.

R93 CONFIRMED (CHG-060): Hydro generator services under Hydro power plant services uses supplied hydro image 2 nov.jpeg on group detail and listing cards. Child service photos/equipment imagery unchanged; commit requested.

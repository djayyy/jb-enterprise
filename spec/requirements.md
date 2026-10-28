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

# Design specification

Status: V0.6.1 implemented for local review; company approval and actual browser acceptance remain pending. CHG-009 below supersedes historical in-page catalogue browsers. Hero behaviour remains V0.5.1. Historical sections retain their original version context.

## Audience and tasks
Plant maintenance/engineering teams: find applicable support. Procurement: find parts and request a quote. Applicants: understand whether applications are for a vacancy or future opportunities.
Current primary navigation: Home, About, Services, Equipment Supply, Contact and Request a Quote, matching S1. Certifications, Careers and brochure are linked from the footer. Projects/resources remain future scope.

## Page map
- /: homepage.
- /services/: complete service index; /services/{thermal,hydro,specialist}/: category pages.
- /services/thermal/{turbine,generator,boiler,electrical,control-instrumentation}/: five pages.
- /services/hydro/{turbine,generator,electrical-controls}/: three pages.
- /services/{testing-inspection,refurbishment,lubrication-reliability,reverse-engineering,oem-sourcing}/: specialist pages. Every supplied scope has a /services/{service-slug}/{scope-slug}/ page, including critical component development.
- /equipment/: complete equipment index; /equipment/{thermal,hydro,other}/: category pages; /equipment/{category}/{component-group}/ and /equipment/{category}/{component-group}/{part}/: individual pages.
- /projects/: brochure-supported project summaries; individual pages only when source material supports meaningful detail.
- /about/, /certifications/, /resources/, /careers/, /contact/, /request-a-quote/, /privacy/, /search/, and 404 page.
Catalogue and general pages above are implemented; projects/resources/global search remain proposed and are not exposed as broken links. Keep a production legacy-to-new redirect map before cutover.

## Visual system
Deep blue, white, restrained orange aligned with approved logo. Authentic machinery/workshop photographs. Clear typography, readable technical lists, generous spacing, restrained motion. Avoid novelty animations and stock imagery presented as company facilities. Use semantic headings and visible focus states. Reflow from 320px through desktop without horizontal page scrolling. Respect reduced motion. Colour contrast and interaction target sizes must be checked, not assumed.

## Templates
Home: clear value proposition and service/quote actions; three supplied banner themes represented without compulsory autoplay; introduction; capability groups; industries; documented project evidence; certifications; contact prompt.
Service: equipment/context, work scope, process, relevant photos, source-backed project evidence when available, related parts and specific enquiry action.
Equipment category: application, supplied components, relevant images, related services and Enquire about this part. No invented SKU, price, stock or specifications.
Project: documented equipment/capacity, work performed and factual result only if supported. Hide unverified quantitative results.
Careers: future-opportunity application wording until approved jobs exist. No statement that no jobs exist unless company confirms it. Real vacancies can later be added from versioned files.
Certifications: legible image, standard name, download/enlarge action; inspect validity and entity before publishing.
Contact/quote: clear labels, required/optional markers, validation near fields, upload progress, error recovery and confirmation. No fake success.

## Journeys
Service -> contextual Quote (service preselected) -> submit -> email acceptance confirmation.
Part -> contextual Quote (component/category preselected) -> describe requirement -> submit.
Careers -> future-opportunity explanation -> application -> resume -> submit.
Search -> useful results with category labels; no-results message links to Contact.
Mobile navigation and dropdowns must work by touch and keyboard, not hover alone. Main categories should be reachable within two navigation selections.

## Content rules
Use S2 as provisional primary copy, S1 for structure and S3 for supporting evidence. Resolve conflicts explicitly. Remove XX MW, misspellings and repeated C&I text on lubrication card. Company claims need source records. Do not borrow competitor images or copy.

## CHG-002 first review scope
Implement the homepage and thermal generator detail first, with supporting Services, Equipment, Company/About and quote/contact review pages. Other detail pages can use a shared sourced template where available; do not expose broken future routes. Local preview only; no production deployment. Use extracted source logo and optimised source photographs, no competitor assets. Preview status is visible; enquiries must never be transmitted.

## CHG-002 implemented interaction details
Main navigation is Home, Services, Equipment, Company, Contact and Request a quote. Company points to About; Careers, quality and the brochure are reachable from the footer. Projects/resources destinations are deferred rather than linked to placeholders. The actual route map and remaining proposed routes are in implementation-status.md.

Deep navy/orange design uses locally served DM Sans/Manrope, supplied workshop imagery, a single static hero and no autoplay. Category cards have explicit detail links. Equipment is one grouped page with anchor navigation and contextual enquiry actions. Service directory has group buttons, live result count and text search across public service scopes. Empty results offer Contact.

Forms label required/optional fields and disconnected status before entry, retain entered values after the local check, and display file errors beside the picker. The action says “Check enquiry/application preview”; the result explicitly says nothing was sent/uploaded/saved. No fake CAPTCHA is rendered. Native required/email validation and local file metadata checks are active; live upload progress/retry is deferred.

Careers accepts no real submissions and describes future expressions of interest. Quality standards are described with an explicit verification note; no unverified certificate badge/download is presented as current proof. Full checklist and test limits remain in acceptance.md.

## CHG-003 current design and interactions — V0.2
The source-aligned sequence and page references are binding in [v02-plan.md](v02-plan.md). Home follows S1 pp.1–9: orange contact/social strip; five-item navigation; three selectable image banners; explicit Turbine/Generator/Boiler links; welcome/Why JBAEL; four industry photo cards; ten capabilities; three certificate thumbnails and contact prompt. Carousel is manual by default, supports arrows/labelled selectors and optional play/pause; keyboard, focus/hover pause and reduced-motion handling are implemented.

About follows pp.10–12, including all six What We Do areas and full unattributed leadership commitments alongside Vision/Mission/Goal. No invented leader portrait/name. What We Do becomes one column at narrow mobile widths to avoid overflow.

Services follows p.13 with Thermal/Hydro background-image buttons. Category selection updates services below; service tabs update one scope panel in the same document. No scrollTo/location navigation occurs on selection. The URL retains group/service/search via replaceState, enabling shareable deep links. Vertical arrow/Home/End keys change tabs; empty search offers Clear search and Contact. Dedicated detail pages remain; related-service links open the explorer at its content anchor. Scope panels reserve minimum height to reduce scroll clamping when switching long/short lists. Explicit navigation to a different route still navigates normally.

Certificate cards show supplied originals without altering their content, converted to WebP for delivery. Enlarge uses a native dialog with Escape, close button and focus recovery; image links remain usable without JavaScript. Downloads resolve to the certificate image. The review note distinguishes supplied copies from issuer verification.

Only the supplied LinkedIn destination is active; X/Twitter, YouTube, Facebook and Instagram icons are visibly disabled/pending, not fabricated links. Preview forms and data policies are unchanged. Projects/global search and live form interactions remain future scope, not silently completed by this version.

## CHG-004 V0.3 current presentation
[Plan](v03-plan.md): full-image split hero with source text alongside uncropped object-fit:contain imagery. Three named thumbnail selectors replace numbered controls; previous/next and explicit Auto-rotate/Stop auto-rotate have visible status. Start advances immediately, then every6 seconds. Manual changes stop rotation. No hover cancellation. Hidden document, external focus entry or changed motion preference stops it. Transitions use opacity/short translation; reduced-motion media query removes motion. No synthetic 3D rotation or new machinery imagery.

Home equipment shortcuts, industry/capability cards and About What We Do/values lose decorative numbering. Ten capability cards now use a regular responsive grid. Source content retained.

Services and Equipment share CategoryCards: equal photo header, title, short source-category summary, named action and Selected badge. Specialist and Auxiliary use the supplied workshop image. Mobile uses compact image/text rows. Services retain stable in-page tabs/scopes with Choose a service label. Equipment groups switch in-page, filter within selected group, report results and provide Clear search/Contact recovery; parts enquiry links preserve selection. Deep links support group/q and legacy category hashes. No numbering implies workflow steps. Existing certificate, form and source-copy rules remain.

## Historical V0.4.1 design — CHG-005/006
This section supersedes earlier hero/dropdown descriptions. The three named theme choices sit directly below the header, before the large image banner, so visitors discover OEM and Retrofitting without scrolling. Desktop banner height follows the viewport with a readable minimum; mobile artwork and copy flow naturally below the choices. Manual arrows/keyboard selection remain. No rotation controls/status, literal Selected badge, duplicate equipment strip or decorative numbering. Images use contain sizing, a finite four-second reveal and crossfade; reduced-motion removes animation.

Services and Equipment Supply use grouped dropdowns: category -> service/component group -> supplied scope/parts. A separate plus button expands the breakdown; titles and children are actual links. Hover or click opens the menu. Pointer movement does not dismiss it, including crossing the heading-to-panel gap. Another dropdown, outside click, Escape, focus leaving or a destination click closes it. Mobile uses native disclosure with a scrollable navigation panel.

Individual service links go to the matching static detail section or scope item. Equipment links identify an actual component card and reveal its category before scrolling. Incoming/explicit category navigation scrolls below the sticky header; in-page service tabs retain their position. URL resolution resets stale choices and validates mismatched groups.

## Current V0.5 design — CHG-007
Supersedes CHG-006's above-banner choices. Supplied S1 pp.1–3 show an image-led carousel with three dots along its lower edge, side arrows, an overlaid title and lower actions. V0.5 follows this pattern with original JBAEL typography/colours, contain imagery, a finite reveal/crossfade, reduced-motion handling and no autoplay/start/stop/status labels. Dot targets are44px and named for assistive technology; source titles remain visible. Measured header/utility height controls first-screen banner height, with340px readable minimum on very short viewports. Explore Services changes with the selected theme.

Desktop header menus have a navy category rail, service/component list and adjacent detailed scope pane. Hover or focus advances the visible category/item without plus clicks. The trigger occupies full header height, adjoining the menu; leaving gets400ms grace and returning cancels close. Focus within preserves access. Escape, outside click or another menu dismisses; mobile uses click/keyboard category controls and adjacent item disclosure arrows. No source text copied from competitors.

Direct scope and individual-part links target their exact visible items, with subtle target highlighting. Service-fragment links infer the correct family; incompatible search is cleared only when it hides the requested service. Equipment generic anchors, including Back to top, remain generic. Deferred arrival scroll is cancelled on user interaction/new navigation. Modified certificate/menu clicks retain native new-tab behaviour. Both slash forms match during preview; production canonical redirects remain host configuration.

## V0.5.1 hero framing — CHG-008
All three hero images now use object-fit:cover and centred positioning, filling the banner on every aspect ratio. This supersedes contain sizing: some outer image content is cropped to avoid side/top gaps; images are never stretched. The finite reveal eases from1.025x to1x, never below frame size. Banner height, text, dots/arrows, hover menus and reduced-motion handling remain unchanged.

## V0.6 catalogue navigation — CHG-009
Both catalogues follow index → category → item → source leaf. Indexes are complete lists, with three linked category headings and local text search; all offerings are present without selecting a category. Each full card is one anchor with a representative source photograph behind its title, short summary and explicit action. No nested links or image-only offerings.

Category/item pages use an image hero, breadcrumb trail, contextual enquiry and child cards. A linked sidebar provides parent, sibling and all-items navigation; it follows the content on smaller screens. Leaf pages add the source entry, parent summary, enquiry guidance and related entries. Technical content is intentionally limited to provided facts. Image reuse is permitted where the source lacks exact component photos; images are not labelled as verified depictions of particular parts/facilities.

Navy menu category labels navigate; separate adjacent arrows preview on touch. Hover over the category row or focus its label reveals the category breakdown; hovering/focusing an item previews its children. All destination links use normal anchors and retain native new-tab behaviour. Hover dismissal still has400ms grace. Homepage capabilities link directly to canonical items/leaves; equipment category cards link to their own pages. Deliberate navigation starts a new document; filtering does not scroll the page.

Scope/part URLs use readable source-derived slugs. Existing13 service URLs remain. Old query/hash destinations resolve through a strict local compatibility map; newly rendered links never depend on filtered state. Mobile catalogue navigation explicitly resets inherited header-nav positioning so breadcrumbs, category links and sidebars remain in document flow. Actual rendering and interaction acceptance are pending.

## V0.6.1 simplification — CHG-010
Supersedes CHG-009 sidebar/related-entry presentation. Search belongs only on /services/ and /equipment/. Category/item pages show their own child cards across the available content width. Leaf pages retain source context and enquiry guidance, without sibling cards or a duplicate parent-list link. Remove the sidebar entirely at every catalogue level. Breadcrumbs provide the single in-content path back; global navigation remains. Shared card grid reflows three/two/one columns; leaf prose has a readable maximum width.

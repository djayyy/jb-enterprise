# Design specification

CHG-034 / R65: catalogue card images use240px desktop/220px narrow heights independent of source ratio. Nested CSS subgrids align kind, title, summary and action tracks within each visual row while preserving full copy and natural row height. Text styles stay23px title/15px body, shared padding18px20px and consistent gaps; fill photos edge to edge without hover zoom. Home and catalogue hero styling unchanged. Supersedes CHG-033 source-dependent card heights.

CHG-033 / R64: remove CSS light padding/background from catalogue media. Hero image area hugs the source aspect ratio with a360px desktop/280px narrow height limit, filling its own area without bars. Card areas use the source ratio with180–280px height bounds and cover fitting; this trades some edge crop for the user's requested edge-to-edge fill. Images stay beside/above separate readable copy, with no hover scale. Home/About/header unaffected. This supersedes CHG-032's strict contain/native-size cap.


CHG-032 / R63 supersedes catalogue full-background cover framing: desktop hero is a readable navy text column beside a light bounded photo frame; narrow screens stack photo above text. Images use intrinsic automatic dimensions with maximum frame bounds and contain fitting, without enlarging small originals. Non-Home catalogue cards similarly separate uncropped photo from navy copy, so machinery is not covered by headings. Home image cards and About remain unchanged. Type labels move into catalogue copy rather than covering photos.


CHG-030: desktop About uses compact consistent section padding/gaps, top-aligns opening content while retaining its first-screen minimum height, reduces action-circle diameter and value-panel/message spacing. All source text stays live; medium screens may use rounded value panels to fit rather than shrink/crop text. Catalogue heroes keep a bright full background with a bounded readable text scrim; catalogue child cards adopt Home's bottom text scrim/clear photo at rest, no hover image changes. Explicit route-specific supplied photo mappings override the broad keyword fallback; no route/copy changes.


CHG-028 / R58: desktop About opening uses minimum height equal to the viewport minus measured utility/header height, with content vertically centred. What We Do starts after the first screen; keep normal document scrolling and existing anchors. No fixed-height clipping, scroll snapping or hidden sections. Narrow layouts retain natural flow.


CHG-027 / R57: compact the desktop opening through the objective by tightening section padding, heading/paragraph gaps and approach-list rows. Remove the local brochure action and its unused styles; keep the footer brochure link. Opening content has natural height, with no clipping or fixed-height text box. Mobile text sizes and subsequent What/Leadership sections are preserved.


## Company-name rule and About composition — CHG-026

See [About reference plan](about-reference-2026-11-01-plan.md), R55–R56/T65–T67/A56–A57. Add only the thin orange wordmark rule within current branding metrics. Use the page-10 wide Who We Are/approach layout, page-11 two-column capabilities/circular actions and page-12 circular values/Leadership panel with their matching supplied backgrounds. Replace the About opening control-room hero with the reference opening composition; preserve existing copy, anchors, closing links, shared brand/nav metrics and always-clear cards elsewhere. Implemented: about-reference.css owns shared About treatment; responsive/desktop.css and mobile.css own device layouts. Leadership uses navy copy over gold for contrast; values stack on phones and become rounded, naturally sized panels through 360px. The 1px wordmark pseudo-rule occupies the existing gap and adds no layout height. Current evidence: A56–A57.

## Always-clear image cards — CHG-024

R54/T64/A55 supersedes CHG-023's hover-dependent treatment. Home's 23px headings/15px body, 72% navy text scrim and brightness(1.06) photograph are now the resting state. Remove image zoom, dimming/reveal transitions and hover/focus font changes; keep the keyboard outline. Apply the same permanently bright photograph/readable scrim/15px body approach to the shared catalogue card, preserving its existing grid/template layout. Homepage cards keep 370px minimum height and matching responsive widths. No hero, header/footer, Welcome, image-source, route or content changes.

## Baseline restoration and compact homepage cards — CHG-023

R53/T62–T63/A53–A54 supersede CHG-022's enlarged brands, split/contained catalogue heroes and tall industry-card treatment. Keep the supplied complete logo but inherit the baseline .brand sizing/type/spacing; restore baseline desktop menu CSS and full-background catalogue heroes/cards. Keep all nine image mappings, Welcome composition and mobile menu viewport repair.

Home only: Industries/Core Services/Equipment share an offering-card treatment, 370px minimum height, consistent width/copy/action spacing and readable full source copy over a navy scrim. Above 1100px all use the same four-column card width; the three Equipment cards are centred at that width. At 601–1100px use two columns; at 600px and below use one. Industry section vertical padding is compact enough for a wide laptop viewport. Copy sits toward the bottom so photography remains visible above it. Pointer hover and keyboard focus reduce the scrim from about 90% to 72% opacity and enlarge headings 22→23px/body 14→15px; mobile body is already 15px. Pointer hover also gently brightens/scales the image. Card bounds stay unchanged and all copy remains visible. Narrow/zoomed cards can grow if required. Respect reduced motion. Nested catalogue cards retain their baseline presentation.

## Image/layout implementation and responsive verification — CHG-022

Implements the agreed CHG-021 plan (R46,R47,R52 / T60–T61 / A45,A47,A52), retaining the wider workbook backlog. During browser review the compact menu exceeded the viewport while the utility strip was visible. Size its scrolling region from the header's current bottom edge, remeasure on scroll/resize and preserve nested disclosure and sticky-header behaviour (R38,R45 / A35,A44). Record final evidence and limits in acceptance.md.

## Planned 31 October image/layout refinement — CHG-021

See [image-feedback-2026-10-31-plan.md](image-feedback-2026-10-31-plan.md) for exact image mappings and review criteria. Planning only: website implementation below is unchanged. Home Welcome/Why will become one centred stacked section over the supplied thermal plant photo with a strong light wash and faint geometric accents, replacing the separate Why side panel. Preserve business copy, navy/orange theme and readable type; scope About styling separately.

Use the new complete emblem in header/footer with readable naming and a light surface where the JPG requires it. Four dedicated industry images receive readable local navy scrims. Give Critical Component an exact shared leaf override, keep Reverse Engineering's existing photo, replace Thermal Turbine imagery and add the red industrial silhouette to About Who We Are. Preserve proportions and record turbine resolution limits. Catalogue routes, sequential rightward menus, three-banner hero and form contracts retain existing behaviour.

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

## Responsive layouts — CHG-012
Use shared semantic content/templates with separate mobile/tablet and desktop CSS entry files. Mobile hero uses normal-flow caption, a flexible image area, a horizontal action row and lower pagination within the banner; it can grow for long titles or enlarged text rather than clipping. Desktop retains overlaid source caption and side arrows. Both keep source images and finite/reduced-motion behaviour. Mobile navigation is touch-first and bounded to available viewport height; active child scope appears beside its selected item in document order. Remove inherited catalogue double padding, allow long form/breadcrumb/footer text to wrap, and keep essential controls touch-sized. No separate copy of business data or duplicate accessible content.

## Touch disclosure and swipe — CHG-013
Mobile menus start with categories collapsed and expand through the separate arrow controls; labels remain real page links. Touch interaction never relies on hover, focus-loss dismissal or forced focus jumps. Each scope appears under its own item and can collapse. Summary open/close is controlled synchronously, avoiding delayed native-toggle races when switching menus. Desktop hover/focus remains.
Banner supports left/right swipe and primary mouse/pen drag, in addition to arrows/dots. Horizontal intent is required; vertical scrolling and pinch zoom remain native. Images follow a horizontal drag, settle back below threshold and slide to the next/previous image otherwise; title/actions update only on accepted navigation. No autoplay. Controls/links are excluded from drag starts; reduced motion skips travel animations.

## Connected catalogue menus — CHG-014
Supersedes the navy category rail and faint grey item highlight. All inactive lists use neutral surfaces; open category and item rows share navy/white with an orange connecting edge. Pale blue indicates inactive hover, a distinct outline identifies keyboard focus, and explicit parent-category text plus the item heading identifies each scope panel. Retain source images with a legible pale overlay. No Selected labels, numbering or category-specific colour palette.
Desktop retains three adjoining columns in one dropdown, with cancellable 180ms hover intent on rows and 400ms menu-exit grace. Keyboard disclosure remains immediate. Leaving a row cancels its preview so crossing neighbouring rows briefly does not switch the branch. Entering a different category resets its child choice rather than showing stale scope. Mobile reuses and reparents both group and scope nodes below their own triggers; only one category and one item in it expand at a time. Parent labels navigate; adjacent 44px chevrons expand. One outer mobile scroll container preserves natural nested reading order. Desktop restores the same nodes to their original columns on resize.

## Sequential menu disclosure — CHG-015
Supersedes CHG-014 automatic first-item selection. All category and scope panels start hidden in HTML with aria-expanded=false. Open/reopen and responsive layout changes reset the branch. Category hover/focus/expansion reveals only its item list; item hover/focus/expansion reveals its own child list. Existing desktop intent/grace, colour hierarchy, mobile nesting, direct links and no-JS full catalogue fallback remain.

## Compact anchored flyouts — CHG-016
Replace the centred1180px menu and fixed280–500px browser height. Desktop starts with a250–272px category dropdown anchored below its summary. Category and scope panels are independently positioned beside their parent row and sized to content, capped by viewport height with internal scrolling. Prefer a rightward branch; use leftward cascading when the complete branch will not fit on the right, reducing child widths only if neither side can contain the preferred widths. Keep the root stationary while revealing children and preserve explicit ancestry/active colours. No new empty placeholder columns. Mobile remains nested, with all desktop positioning removed on breakpoint changes.

## Rightward navigation — CHG-017
Supersedes CHG-016 leftward fallback. Desktop header aligns navigation immediately after the brand, with Quote pushed to the far right. At1001–1360px, place the navigation on its own left-aligned row to reserve room for a rightward branch. Child panels always open right. Fit the full branch before opening, keeping minimum200/200/260px widths and capping preferred widths at272/256/320px. Emergency viewport clamping shifts the branch start left if an unexpected anchor leaves less than660px, never reverses the children. Remove the dropdown heading/View all row entirely; root contains only category choices. Child ancestry headings stay for ownership clarity.

## Modest header spacing correction — CHG-018
Supersedes CHG-017 header placement only. Restore the shared centred header container and its single row at every desktop width. Keep the navigation right-aligned; add 12–28px of margin before the quote button so Home–Contact moves slightly left while the quote button stays at the container edge. Use 16px link/header gaps and 12px quote margin at1001–1100px. No extra navigation row or full-width1600px header override. Existing rightward flyout sizing and viewport clamping remain; mobile is unchanged.

## Vertically anchored equipment menu — CHG-019
The CHG-018 margin alone could not align the root because placement independently shifted it left to reserve660px. Keep root alignment at the trigger. Measure available header space at initial load, font readiness and resize; increase the quote gap only enough to reserve the branch, capped to preserve32px between Home and the logo. Preferred gap56px (20px on narrow desktops). Quote and logo retain their positions. When this clearance prevents reserving660px, proportionally reduce panel widths to the available right-hand space; wrap labels and retain44px disclosure buttons. No separate row, leftward children or root movement on branch expansion. Mobile clears the measured gap.

## Quote banner and client strip — CHG-035
R66–R67: shared CTA becomes the reference blue banner with white centered copy and linked title/document illustration; no separate orange action box or contact eyebrow. Orange outlined triangles straddle opposite corners inside reserved space. Custom About/catalogue title, copy and destinations remain. Home adds Trusted By Industry Leaders after Welcome, before Industries; 20 individual supplied logos in even contain-fit cells. Two identical groups create a leftward seamless CSS loop; only first is accessible. Pause checkbox works without JS, hover/focus pauses, reduced motion shows one horizontally scrollable group. Device dimensions live in desktop.css/mobile.css.

CHG-036 / R68: client strip has no pause control or reserved control spacing, and no hover/focus stop; keep reduced-motion fallback. Footer uses a 44px circular outlined up-arrow link with accessible Back to top name, replacing visible text.

CHG-037 / R69: all Company brochure actions continue to use /downloads/jbael-brochure.pdf; this asset now contains the supplied24-page1st November revision. Website layout/copy is unchanged.

CHG-038 / R70: career phone label is Phone * and input has required; other form kinds retain Phone (optional). Existing native reportValidity flow handles missing phone.

CHG-039 / R71: shared footer Resources adds three named PDF links directly after Company brochure and before Privacy. All open in a new tab with rel=noopener, matching brochure; long portfolio label wraps naturally.

CHG-040 / R72 supersedes CHG-039 desktop natural wrapping: >=1200px footer reserves max-content Resources column with24px gaps.701–1199px Resources spans a full two-column row; links remain single-line. Phone flow retained with nonbreaking space joining Portfolio and arrow.

CHG-041 / R73–R74: Contact/Quote show Submit enquiry, demo notice and shared thank-you modal. Document actions show Details to access resource modal naming selected document, four required labelled inputs, Cancel/close and Submit & view/download. Submit synchronously completes action, with accessible confirmation; subsequent documents bypass details for this tab session. Certificate enlargement retains its existing viewer/focus behavior. Native dialogs support Escape/focus recovery and mobile scrolling. No fake email-sent claim; mock notice visible throughout.

CHG-042 / R75: replace implementation/demo notices with concise form instructions. Contact/Quote confirmation thanks visitor for interest and offers team email, without asserting delivery or future contact. Resource success says resource ready. Human verification displays random addition question, labelled required numeric answer and Another question button, refreshed with aria-live and wrong-answer validity. No image-only puzzle.

CHG-043 / R76: compact Captcha block with four lowercase letters in a light patterned monospace code tile, icon-only Refresh captcha control and Enter code field. Required label explains4 lowercase letters; phone layouts place input below code/refresh. Preserve visible focus, accessible prompt and error.

CHG-044 / R77: resource/confirmation dialogs use pale body, navy heading panel with white title/orange edge, warm document-name accent. Captcha code uses navy patterned tile/white lowercase letters; refresh is a high-contrast orange44px button with larger24px bold circular arrow and navy outline. Preserve input readability, mobile scrolling and focus access.

CHG-045 / R78: Contact title Thank you for getting in touch! / We appreciate your interest in JBAEL. Our team will reach out to you shortly to discuss how we can help. Quote title Thank you for your interest! / Our team will review your requirements and reach out to you shortly to discuss your project and quotation. Shared copy map feeds route-specific dialog and inline confirmation. No Done/footer actions; top-right44px close cross, native Escape and focus recovery retained. Compact natural-height modal.

CHG-046 / R79: Contact and shared footer use one offices data source with corrected titles and unchanged street details. Footer logo is followed by3 compact semantic addresses, then existing tagline/social icons. Addresses use12px readable body/13px white labels and compact10px gaps, natural wrapping on phones. Remove only visible pending-social sentence.

CHG-047 / R80: /privacy/ retains canonical route, now Privacy Policy with effective/updated date1November2026, introductory company scope, numbered readable sections, browser-storage table, direct privacy email/postal contact. Shared footer/form links say Privacy Policy; no development/review headings. Preserve brand system and accessible mobile table flow.

CHG-048 / R81: visitor-facing copy uses direct business language, no internal document/reference/verification-pending notes. Careers uses professional expressions-of-interest wording without invented vacancies. Certificate metadata/alt text describe documents directly. Header/footer show only verified LinkedIn destination; unavailable social buttons omitted. File errors omit preview terminology; careers action Submit application with neutral interest acknowledgment.

CHG-049 / R82: footer order logo→tagline→3 addresses→social icons. Tagline has12px top gap. Shared SocialLinks restores LinkedIn/X/YouTube/Facebook/Instagram; only LinkedIn navigates, others native-disabled with plain platform names/tooltips. No pending sentence restored.

CHG-050 / R83: Brand footer prop selects current496×481 complete artwork/srcset for footer; header selects existing321×324 emblem-only PNG without footer srcset. Existing CSS display sizing and adjacent name/tagline remain.

CHG-051 / R84: Brand renders its adjacent name/tagline span only in the header. Footer retains the linked complete emblem with accessible home label and the existing separate footer-tagline paragraph. No display-size changes.

CHG-052 / R85: canonical catalogue image overrides select3 supplied WebP derivatives for4 component routes and their listing cards. Preserve image proportions/current layout. Shared SocialLinks activates Facebook/Instagram/YouTube with existing new-tab labels and noopener noreferrer. No layout or logo change.

CHG-053 / R86: footer-identity wraps Brand/footer tagline only. Grid justify-items:center with max-content width/max-width100% centres emblem over intrinsic tagline width and allows narrow-screen text wrapping. Addresses/socials stay outside wrapper.

CHG-054 / R87: footer Brand uses248/496-width lossless transparent WebP derivatives of supplied1072×1080 PNG, intrinsic original ratio, existing display sizes and centred wrapper. Footer-only transparent background overrides shared white background; header unchanged.

CHG-055 / R88: footer-only image120px wide above1100px,104px at/below1100px, auto height preserving artwork ratio. Footer srcset sizes tracks display widths; higher-specificity footer selector avoids shared brand responsive overrides. Existing tagline gap/addresses unchanged.

CHG-056 / R89: existing YouTube icon links to supplied company-channel URL in both shared social groups; presentation/new-tab safeguards unchanged.

CHG-057 / R90: X / Twitter uses existing active-anchor rendering, accessible new-tab label and noopener noreferrer in both social groups; all5 icons now links. Layout/other URLs unchanged.

CHG-058 / R91: X anchors use corrected HTTPS company handle; existing icon, new-tab attributes and layout retained.

CHG-059 / R92: canonical /equipment/hydro/hydro-generator-components/ override uses hydro-generator-components-nov2; shared catalogue hero/card rendering and existing crop/layout retained. Explicit child image overrides unchanged.

CHG-060 / R93: canonical /services/hydro/generator/ image override selects hydro-generator-services-nov2 in shared hero/cards; existing layout/cropping unchanged.

CHG-061 / R94: canonical /services/hydro/turbine/shaft-inspection-and-alignment/ selects hydro-turbine-shaft-nov2 for shared hero/cards, preserving current layout and crop rules.

CHG-062 / R95: /services/reverse-engineering/technical-visit-and-pre-inspection/ selects technical-visit-nov2 for shared hero/cards; existing presentation retained.

CHG-063 / R96: /services/reverse-engineering/3d-models-and-engineering-drawings/ selects 3d-model-nov2 for shared hero/cards; existing crop/layout retained.

CHG-064 / R97: /services/reverse-engineering/simulation-and-engineering-analysis/ selects design-simulation-nov2 for shared hero/cards, retaining current crop/layout.

CHG-065 / R98: /services/reverse-engineering/design-validation/ selects design-validation-nov2 for shared hero/cards, retaining existing presentation.

CHG-066 / R99: /services/reverse-engineering/material-science-and-testing/ selects material-science-nov2 for shared hero/cards; existing presentation retained.

CHG-067 / R100: /services/hydro/generator/stator-core-winding-and-bar-inspection-repair/ selects hydro-stator-core-nov2 for shared hero/cards; current presentation retained.

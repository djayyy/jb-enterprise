# Architecture and form contract

Status: static review implemented in Astro 7.4.2; live form/storage contracts below remain proposed. No external infrastructure provisioned.

## Components
Astro + TypeScript generates static pages from Markdown/JSON content and shared templates. Deploy on Vercel. Interactive navigation, search and filters use minimal browser JavaScript. Server endpoint validates forms, checks CAPTCHA and sends email through a configured provider. Enquiry records live in the team's mailbox, not an application database.
Content files carry slug, title, summary, body, image/alt text, source reference and verification status. Project/job content cannot publish unverified fields. Search index is generated at build time and contains only public content, never enquiries.

## Email contract
POST /api/enquiry (proposed): kind=contact|quote|career, name, email, phone?, company?, message, selectedService?, selectedPart?, location?, designation?, gst?, interest?, attachmentTokens[], captchaToken.
Contact requires name/email/message; company/phone/current need optional defaults. Quote requires name/email/company/location/need; phone, designation and GST optional defaults. Career requires name/email/interest/resume; phone and experience optional defaults. Final field labels follow Design.md; defaults are editable decisions.
Map recipients server-side by kind; never accept recipient or email sender from the browser. Use a verified company sender and validated Reply-To. Validate length/type, strip header injection, escape email HTML. No secrets in public bundles. Subjects include form kind and reference ID; include selected service/part and source page in body.
Return success only after provider acceptance; acceptance does not prove inbox delivery. Suggested responses: 400 invalid input, 413 oversized upload metadata/request, 429 throttled, 502 email provider failure. Preserve form fields on failure and offer retry/contact details. No durable queue or guaranteed exactly-once delivery in baseline; document duplicate-send behaviour. Under the user's email-only assumption this tradeoff is accepted for planning.

## Attachments
2 GB applies to contact/quote as documented; exact per-file versus aggregate interpretation remains OPEN. Proposed conservative interpretation: 2 GB total per submission. Resume default: PDF/DOCX, 5 MB, one file (PROPOSED). Quote formats: PDF, JPG/PNG and agreed engineering files; confirm CAD/archive needs before launch.
Vercel Functions document a 4.5 MB payload limit: upload large files directly to private object storage using short-lived, narrowly scoped upload authorisation. Use multipart/resumable transfer as supported. Check CAPTCHA/limits before granting upload capability; verify object size/type and ownership token after completion. Do not proxy 2 GB through the email endpoint or load it into server memory.
Generate opaque object identifiers; no public bucket. Email protected download links with a documented expiry. Define staff access/link renewal, malware scanning/quarantine, incomplete-upload cleanup and retention before release. A 30-day retention policy is a proposal, not approved business policy. Object storage and temporary provider state are distinct from an application database. Do not persist personal data in localStorage or ordinary logs.

## Environment and modes
Use environment examples with variable names only: MAIL_API_KEY, MAIL_FROM, CONTACT_RECIPIENT, QUOTE_RECIPIENT, CAREER_RECIPIENT, CAPTCHA_SECRET and provider-specific storage settings.
Preview: no production recipients, clearly marked disconnected forms or isolated test delivery. Production: real configured recipients and verified uploads. Missing settings fail closed; never simulate delivery.
Abuse protection: server-side CAPTCHA, input limits, provider/edge rate limits (no app database required), allowed attachment types, secure headers and HTTPS. Determine retention/privacy wording from actual operations.

## Dependencies to resolve
Confirm current hosting/project and repository; inspect existing quote integration; select mail/storage providers and costs; obtain safe configuration access; verify domain sender configuration and destination mailboxes. No credentials are needed for the initial static visual review.

## CHG-002 actual preview architecture
Astro 7.4.2 generates 22 static HTML files. TypeScript service/equipment arrays feed templates; local browser scripts provide the menu, service filtering, contextual form values and metadata validation. No API routes, server adapter, data store or external font requests. Fonts and OFL licenses are bundled locally. The project pins Astro and includes a package lock; npm audit reported zero vulnerabilities after upgrading the initial scaffold dependency.

Forms use `method="dialog"` with a submit handler that prevents default and validates locally. Outside a dialog, the native method does not send a request, including if scripts are unavailable. No file contents are read: only name/size metadata. Browser code does not use fetch, localStorage, cookies or logging for enquiry data. Query context is bounded to 200 characters and assigned through input.value. These client checks are not security validation for a future live endpoint.

Preview attachment policy: 2,000,000,000 aggregate bytes and at most ten PDF/DOCX/JPG/PNG files for enquiries; one PDF/DOCX up to 5,000,000 bytes for careers. These are explicitly labelled proposed review limits; engineering formats, aggregate interpretation and retention remain open under O05-O06. No public upload-success claim is made.

Development scripts disable Astro telemetry and bind to loopback; the npm cache can be placed under .review/. Source/reference/spec files do not enter dist/. All pages are intentionally noindex. Hosting and production metadata are not configured yet.

## CHG-003 current preview architecture — V0.2
23 static HTML pages now include /certifications/. New company.ts holds source-referenced homepage/About/certificate content. HeroSlider, SocialLinks and CertificateGallery are reusable Astro components; v02.css provides the source-matched layouts after the base stylesheet. No dependency added; package/lock version is 0.2.0.

The service explorer pre-renders all 13 scope panels. Small client scripts toggle hidden/ARIA state, filter within a family and update non-personal URL context via history.replaceState. Dedicated detail routes remain statically generated. Certificate enlargement uses a native dialog; carousel uses optional client timer with manual default. No API, database, personal-data storage, analytics or external content service added. Live email/upload contracts above remain unchanged and unimplemented.

## CHG-004 V0.3
CategoryCards.astro is shared by service and equipment directories. Equipment browser uses existing source data, hidden states and non-personal replaceState URL context, with no persistence or network endpoint. HeroSlider now uses stacked contain images with CSS transitions and explicit optional six-second timer. v03.css overrides prior presentation. Static route count remains23. Package/lock version0.3.0, no dependency changes. Existing form/storage/server contracts remain unchanged and unimplemented.

## Historical V0.4.1 — CHG-005/006
NavigationDropdown.astro renders both nested menus from existing services/equipment arrays. navigation.mjs centralises stable fragment builders and deterministic URL resolvers; scroll-target.ts reveals loaded targets below the header after layout/font readiness. HeroSlider uses manual state and finite CSS animation without an autoplay timer. v04.css controls the large responsive banner and menu layout; theme choices precede artwork in HTML. Dropdown dismissal is intentional (outside click, Escape, other menu, focus leaving or navigation), with no pointerleave close handler.

23 static pages, package/lock version0.4.1. No dependency, server, data-storage or form-contract change. No production provisioning.

## Current V0.5 — CHG-007
Shared NavigationDropdown renders category/item/scope panes from existing TypeScript arrays, with small hover/focus/click handlers and400ms delayed dismissal. HeroSlider retains manual state, uses ResizeObserver for header height and source-pattern in-banner controls. Layout loads v05.css; v04.css is an inactive historical stylesheet. No new runtime dependency.

navigation.mjs adds individual-part fragments, fragment-only service resolution, filter compatibility and generic Equipment arrival targets. scroll-target.ts cancels stale arrival work with AbortController. Astro trailingSlash changes from always to ignore so both slash forms match in local preview; Layout normalises pathname before category/highlight handling. Static host canonical/legacy redirects still require release configuration.

Tests include DOM-independent scroll scheduling fixtures and generated-source semantic link audit. audit-navigation.mjs reads source data through the existing TypeScript dev dependency; optional HTTP checks use built-in fetch against JBAEL_PREVIEW_URL.23 static pages;0.5.0 package version; no application database, API, form integration or deployment change.

## V0.5.1 — CHG-008
Presentation-only patch: cover sizing and a reveal scale above1 in v05.css; HeroSlider supplies correct intrinsic dimensions (1725×912 turbine;1536×1024 OEM and modernisation). Version0.5.1; no navigation, dependency, data, form or hosting contract change.

## Current V0.6 — CHG-009
188 static HTML documents:10 general/index pages +6 category pages +13 services +100 service scopes +12 equipment groups +47 parts. src/lib/catalog-tree.mjs builds both trees from unchanged services.ts/equipment.ts; src/data/catalog.ts exposes typed nodes. Shared CatalogIndex, CatalogPage, CatalogCard and CatalogSearch render both catalogues. Catch-all Astro routes generate all pages at build time; no runtime server/database/API added. Type definitions document parent, breadcrumb and child contracts.

Canonical anchors provide navigation without JavaScript. Small scripts add hover previews, local filtering and legacy query/hash compatibility. LegacyCatalogLinks resolves only known local destinations, calls location.replace and safely ignores malformed/unknown keys; source detail hashes route to leaf pages. The bridge is present on indexes and existing service item pages. Compatibility function tests do not constitute browser redirect testing. Search stores only non-personal q in the URL; enquiry handling is unchanged.

24 supplied photographs are resized into public WebPs. assets.json records provenance; image-metadata.json provides true intrinsic dimensions. Templates use an image layer as the background with overlay/copy; no synthetic image or new external dependency. v06.css follows current styles, including local-nav overrides for mobile. Existing email, storage, CAPTCHA and production deployment contracts remain unimplemented and unchanged.

## V0.6.1 — CHG-010
CatalogPage no longer imports/renders CatalogSearch or computes sibling lists. CatalogSearch is used only by CatalogIndex. Removed sidebar/related markup and unused CSS; no data-tree, URL, dependency, backend or form-contract change.188 static routes retained. No new runtime logic.

## Build and publishing boundary — CHG-011
astro.config.mjs declares output:static. npm run build creates/replaces dist/ (HTML, CSS, browser JavaScript and copied public assets). For a static web server, deploy the contents of dist/ as its document root; source/spec/reference files, node_modules and source ZIPs are not runtime requirements. Node/npm and installed dependencies are required only on the build machine. For Git-based hosting, commit source/config/package files, run npm ci and npm run build, and select dist as output. .gitignore excludes dist/ from Git; it does not prevent publishing that directory. No hosting configuration changed.

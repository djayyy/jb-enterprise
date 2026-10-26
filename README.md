# JBAEL website — V0.6.1 separate service and equipment pages

A new static website for JB Advanced Engineering Limited, built with Astro and TypeScript. All source and development work belongs inside this `Jb-Service` directory. Original reference documents and the old site remain in `requirement/`.

## Run locally

Use Node.js 22.12 or newer and npm. Tested with Node.js 26.5.0.

```sh
npm ci --cache .review/npm-cache
npm run dev
```

Open http://127.0.0.1:4321/. For the production build preview:

```sh
npm run build
npm run preview
```

The preview server remains running only while its terminal session is active. No production website has been deployed or changed.

## Build and publish

Keep one working project folder. Run `npm run build` to recreate `dist/` with the latest website. Publish the **contents of `dist/`** to a static web server. The serving machine does not need source ZIPs, `src/`, `spec/`, `requirement/`, `node_modules/`, or Node.js for this static build.

For hosting that builds from Git: use `npm ci`, build command `npm run build`, and output directory `dist`. Source/config/package files belong in Git; `dist/`, dependencies, reference inputs and generated source ZIPs are ignored. Ignoring `dist/` prevents committing generated files; it does **not** prevent the hosting build from publishing them. Only deploy `dist/`, not the entire repository folder.

Git keeps revision history. Do not create separate backup ZIPs or version folders. These instructions describe packaging; forms remain disconnected as documented below.

## Checks

```sh
npm run check
npm test
npm run build
npm run verify
npm run audit:navigation
# Optional HTTP checks: JBAEL_PREVIEW_URL=http://127.0.0.1:4322 npm run audit:navigation -- --http
npm audit
```

`verify` checks generated page links, local assets, fragment targets, metadata, headings and preview form safeguards. `format` formats only the new source, scripts and Astro configuration. `requirement/` is excluded from type checking, formatting and build output.

## What is included

- Three source hero themes with large edge-to-edge imagery with proportional cropping, three dots inside the banner and side arrows and finite gentle transitions; no rotation controls, selected badges or repeated equipment strip. Welcome, ten capabilities, source social strip and shared navigation remain. Services and Equipment Supply reveal categories, services and source scope/parts on hover or keyboard focus, with touch controls. Menus have a continuous pointer path and delayed dismissal.
- Complete Services/Equipment indexes, six category pages,13 service pages,100 source-scope pages,12 equipment group pages and47 individual part pages.188 total static documents.
- Matching photo-backed cards with text, breadcrumbs, index-only search and contextual enquiry; detail pages focus on their own children/content without sidebars or related lists. Menu category labels and homepage offerings navigate to canonical pages; old preview query/hash links use a compatibility bridge.
- Complete source About/What We Do/Leadership/Vision/Mission/Goal; three certificate images with enlarge/download; Careers, Contact, Request a Quote, privacy and 404.
- Contextual service/component selection, local form validation and file metadata checks.
- Supplied imagery, extracted logo, downloadable company brochure and locally served fonts.

## Preview boundaries

There is no database, email endpoint, live upload, CAPTCHA, analytics or tracking integration. The forms never send data and explicitly disclose that. File selection checks metadata only; the 2 GB enquiry and 5 MB resume limits are provisional policies, not verified upload capabilities. Telephone/email links open the visitor's own applications.

Contact details and asset rights need company verification. Standards are shown as source-listed information, with certificate validation still pending. Careers is a future-opportunity expression-of-interest page, without invented vacancies. Verified projects, broader search, redirects, sitemap and live integrations remain on the backlog. LinkedIn uses the supplied legacy URL; the four other social destinations are pending and their icons are disabled. Certificate copies are shown for review; independent issuer verification is pending.

All pages intentionally use `noindex,nofollow` for review. Do not treat this build as production-ready. Production hosting, canonical domain, mail recipients, storage and retention must be configured and tested before cutover.

## Where to edit

- `src/data/company.ts`: sourced homepage, About and certificate content.
- `src/data/services.ts`: service copy, scope, categories and source references.
- `src/data/equipment.ts`: equipment catalogue.
- `src/data/assets.json`: photo source mapping; `image-metadata.json`: intrinsic dimensions.
- `src/lib/catalog-tree.mjs`, `src/data/catalog.ts`: shared hierarchy, image selection and legacy URL map.
- `src/components/Catalog*.astro`: shared index, page, card and search templates.
- `src/pages/`: page content and routes.
- `src/components/EnquiryForm.astro`, `src/lib/forms.mjs`: disconnected form UI and metadata checks.
- `src/styles/responsive/mobile.css`: mobile/tablet layout rules up to1000px.
- `src/styles/responsive/desktop.css`: desktop layout rules above1000px. Content and Astro templates are shared.
- `src/layouts/Layout.astro`, `src/styles/global.css`, `src/styles/v02.css`, `src/styles/v03.css`, `src/styles/v05.css`, `src/styles/v06.css`: shared design and source-aligned responsive layouts.
- `public/`: deployable images, fonts/licenses and brochure only.

Read [agents.md](agents.md) and [spec/README.md](spec/README.md) before every change. Follow the mandatory spec workflow and record each logical code change in [spec/change-log.md](spec/change-log.md). Current scope and verification are in [spec/implementation-status.md](spec/implementation-status.md).

V0.6.1 details: [spec/v06-plan.md](spec/v06-plan.md). Whole-site audit: [spec/navigation-audit.md](spec/navigation-audit.md). Current review preview: http://127.0.0.1:4322/.188-page build,36-file check0 diagnostics,45287 local references and376 HTTP checks pass. Actual browser visual/click-through acceptance is pending; command checks do not prove screen geometry or pointer behaviour. Source history is kept in Git. Generated source ZIPs have been removed and must not be recreated for routine updates.

Mobile refinement CHG-012: [audit and remaining browser checks](spec/mobile-audit.md). All three banner titles remain visible; mobile action buttons are horizontal. Separate responsive presentation files handle the two layouts. Current build/typecheck,26 tests,376 HTTP requests and164 static CSS-cascade checks pass. Actual phone rendering/touch acceptance remains pending.

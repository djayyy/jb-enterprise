# Versions and change control

CHG-034 current review: service/equipment cards use common240px desktop/220px narrow photos,23px titles/15px descriptions and per-row aligned text/action tracks. Full copy retained without clipping.360 all-page cases/394 card instances plus40 responsive cases pass;56 tests,41-file check,188-page build and49,990 link/asset checks pass. A67 records browser evidence/limits. Local uncommitted review; no deployment.


CHG-033 current review: removed added light photo frames/padding from catalogue heroes and non-Home cards. Photos fill their media areas edge to edge; source-proportional bounded heroes and adaptive180–280px card areas use cover fitting without hover zoom. All178 detail pages plus2 indexes pass1440/390px checks (360 cases/750 media instances), plus40 responsive cases.56 tests,41-file check,188-page build and link/navigation checks pass. A66 records evidence/limits; local uncommitted review, no deployment.


CHG-032 current review: catalogue heroes and non-Home cards now show complete bounded photos without cover cropping or enlargement past intrinsic CSS dimensions. All178 catalogue pages plus2 indexes pass desktop/mobile checks, with40 extra responsive cases and83 formerly unloaded images rechecked after loading.56 tests,41-file check,188-page build and link/navigation checks pass. A65 records evidence/source-resolution limits; checkpoint refreshed after reconnecting. Local uncommitted review; no deployment.


CHG-030 current review: all three About compositions fit five tested desktop screen sizes, with reduced opening top space and full circular actions/Leadership. Service/equipment heroes and component cards are permanently clearer.157 explicit photo mappings change131 nodes;31 sibling groups have zero repeated images.56 tests,41-file check,188-page build and link/navigation checks pass; evidence/limits in A61–A63. Separate CHG-031 download rollback retained. Local uncommitted review; no deployment.


CHG-028 current correction: desktop About opening fills the remaining first screen beneath the unchanged header; What We Do starts exactly at the viewport bottom at four tested sizes and appears on scroll. Full objective remains visible. A59 records responsive/menu/command evidence and limits; no deployment.


CHG-027 current correction: opening About section through the full objective now fits normal desktop landing screens at1024×768,1280×720 and1440×756/812 without reducing text size. Opening brochure removed; footer link retained. Mobile/200% zoom keep natural readable flow. A58 records evidence/limits; build/typecheck/link checks pass, no deployment.


CHG-026 current supplement (1 November 2026): reference About pages10–12 implemented with supplied red/grey watermarks, two-column capabilities/circular actions, industrial leadership background and gold values. Shared thin company-name rule preserves measured header/footer/nav geometry. Six-width Chrome and actual200% zoom checks pass, with33 source strings retained;40-file check,55 tests,188-page build and link/navigation checks pass. A56–A57 record scope/limits. Package0.6.1 retained; local uncommitted changes, no deployment.

CHG-024 current supplement (1 November 2026): the clear photograph, readable scrim and larger copy are always visible across Home and shared service/equipment cards. Hover/focus no longer changes images or typography; outlines remain. Nine Home widths and 30 catalogue cases pass; all Home cards retain 370px height. Build/typecheck/55 tests/static links pass. See A55 in acceptance.md for evidence and limits. No deployment.

Latest local review — CHG-023, 1 November 2026: original brand/nav/catalogue presentation restored; supplied images/Welcome retained; compact homepage cards and accessible hover/focus implemented. 55 tests, 40-file check zero diagnostics, 188-page build, 49,989 local references and 855 semantic checks pass. Chrome geometry/interaction evidence in acceptance.md and .review/compact-cards/; source hashes in checkpoint.json. No commit/push/deployment.

## Current policy — CHG-011,26 October2026
One working folder, Git history and one replaceable dist/ build output. The eight historical JBAEL source ZIPs were removed at the user’s request; do not create replacements. Historical entries below retain their original evidence but archive-preservation statements are superseded. GitHub origin is configured; this cleanup does not push or deploy.

## Current local review — CHG-022, 1 November 2026

V0.6.1 package retained; current working tree contains approved CHG-021 image/layout implementation, with final responsive verification and a mobile menu-height repair. T54,T60,T61 complete; wider workbook backlog remains. 55 tests, 40-file check with zero diagnostics, 188-page build, 49,989 references and 855 semantic checks pass. Actual Chrome responsive geometry and 200% zoom reviewed; evidence/physical-device limits in acceptance.md, source hashes in checkpoint.json. Existing preview http://127.0.0.1:4322/. No archive, commit/push or production deployment in this change.

## Release stages
V0.1: first complete review with supplied content, shared design and form UI; disconnected services disclosed.
V0.2: feedback, mobile/image refinement, catalogue/search and verified content.
V1.0: integrated email/uploads, completed acceptance evidence, redirects and launch readiness.
V1.1+: approved jobs, projects, resources and measured improvements.

Use one repository with small commits, named tags and preview branches. Do not maintain divergent copied site folders. Alternative visual explorations use branches and the same content baseline. A production-branch push may deploy automatically: verify pipeline before merging. Retain previous production deployment/commit and configuration rollback information.

For each version record date, commit, preview URL, changed requirement IDs, acceptance results, unresolved questions and next changes. No credentials or private enquiries in changelogs.

## Change log
2026-10-25 — Specification v0.1: agents.md and specification set created from reviewed source material and user decisions. No application code, hosting change, domain change or production deployment performed.

## Change template
Change / reason / affected R and A IDs / design and architecture implications / task updates / evidence / version.

2026-10-25 — Workspace organisation: installed agents.md and spec/ into Jb-Service/, relocated legacy source and all original reference documents/images into requirement/, and verified SHA-256 hashes for all moved files. Updated project boundaries and source paths. No website code changed.

2026-10-25 — [CHG-001](change-log.md): bound agents.md to the full spec directory, added mandatory change workflow and per-change log, and linked task/acceptance evidence. Documentation-only; application implementation remains not started.

## V0.1 initial implementation checkpoint — 2026-10-24 UTC
Change: CHG-002. State: local uncommitted review, 22 static pages, Astro 7.4.2, no application database or deployment. Preview: http://127.0.0.1:4321/ while the local preview process runs. Files and test evidence: implementation-status.md, acceptance.md and checkpoint.json. Source snapshot: JBAEL-v0.1-source.zip at project root; dependencies, generated build, original reference inputs and intermediate review files are excluded.

Build/typecheck/7 tests/710 internal references passed; npm audit zero reported vulnerabilities. Representative Chrome journeys and responsive checks passed. Live integrations, detailed content approval, full accessibility/performance testing and cutover remain pending. No commit, tag, remote repository or production rollback has been fabricated.

## V0.2 source-aligned checkpoint — 25 October 2026
CHG-003, local uncommitted source state. 23 static pages; no database, live integrations or deployment. Preview: http://127.0.0.1:4321/ while the existing loopback preview server runs. Three source homepage slides, social strip, complete About, original certificate presentation and in-page photo-led service browser replace V0.1 deviations. R03–R12,R18–R22; T19–T22; A15–A17 and refreshed partial A01–A06,A10–A12. Acceptance details are in acceptance.md; source/public/config hashes are in checkpoint.json. JBAEL-v0.2-source.zip preserves this version separately from JBAEL-v0.1-source.zip. Neither archive includes original requirement inputs, node_modules, dist, private data or intermediate review files. Next: company content review, actual social destinations, broad search and launch integrations/checks.

## V0.3 navigation and image refinement — 25 October 2026
CHG-004 local uncommitted review. Full-image three-theme hero, named selectors, explicit optional auto-rotate, no decorative numbering, shared image cards for Services/Equipment, grouped parts search.23 static pages, no dependency/database/integration/deployment change. T23–T25; R23–R24; A18–A19 plus regression evidence in acceptance.md. Preview http://127.0.0.1:4321/. Separate JBAEL-v0.3-source.zip and checkpoint.json; earlier archives preserved. Global search, factual approvals and launch work remain pending.

## V0.4 and V0.4.1 — 25 October 2026
CHG-005 implemented large/manual hero, removed redundant UI, grouped dropdowns and deterministic detail anchors. Typecheck/build/13tests/4917references passed before workspace disconnection interrupted documentation/archive work. That version had no completed standalone archive or browser acceptance.

CHG-006 advances to0.4.1: theme choices before artwork, viewport-aware banner, no pointerleave dismissal; reconciles CHG-005 documentation. Current state is local/uncommitted,23 static pages with disconnected forms. Preview http://127.0.0.1:4321/ while server runs. Current checks and remaining browser acceptance are recorded in acceptance.md; checkpoint.json binds source/spec state. JBAEL-v0.4.1-source.zip preserves this checkpoint; prior V0.1/V0.2/V0.3 archives remain.

## V0.5 — Reference carousel, hover navigation and routing audit
CHG-007 ·25 October2026.23 static pages, local/uncommitted source, no deployment. Supplied in-banner dots/side arrows; cascading hover/focus menus; individual-part destinations; service fragment/filter, generic anchor, stale scroll, modified-click and slash handling fixes.20 tests,28-file check0 diagnostics,23-page build,5495 references,1969 semantic checks and64 HTTP checks pass; an additional missing URL returns branded404. Browser visual/interaction acceptance remains NOT RUN.

Current preview http://127.0.0.1:4322/. See navigation-audit.md for complete coverage. checkpoint.json binds source/spec state; JBAEL-v0.5-source.zip preserves this version separately from earlier archives. Old4321 preview retains earlier routing config; use4322.

## V0.5.1 —26 October2026
CHG-008 hero framing patch: cover fill eliminates letterboxing, reveal no longer underscales, image dimension attributes corrected.28-file check0 diagnostics,23-page build,5495 references and preview HTTP200 pass. Browser visual acceptance pending. Current preview http://127.0.0.1:4322/. JBAEL-v0.5.1-source.zip and checkpoint.json preserve this state; previous archives untouched.

## V0.6 — Separate catalogue pages,26 October2026
CHG-009; R33–R35/T35–T37/A29–A31.188 static pages; all source scopes/parts now have distinct URLs. Shared indexes, category/detail/leaf templates, image-backed content cards, clickable navy category labels and canonical homepage links. Existing service URLs retained; old preview queries/fragments have a tested compatibility resolver.24 supplied image derivatives added.

36-file check0 diagnostics,26 tests,188-page build,47996 references and376 HTTP checks pass. Actual browser visual/interaction acceptance remains NOT RUN. Preview http://127.0.0.1:4322/. JBAEL-v0.6-source.zip and checkpoint.json preserve this local source/spec state; previous version archives and original requirements remain intact. No Git commit/deployment/database/live integrations.

## V0.6.1 — Catalogue simplification,26 October2026
CHG-010; R36/T38/A32. Index-only search for both catalogues; sidebar/related content and duplicate parent-list actions removed. Own child cards expand into the available width; breadcrumbs retained.36-file check0 diagnostics,188-page build,45287 local references and376 HTTP checks pass. Browser visual acceptance NOT RUN; prior26 unit-test results are V0.6 evidence. Preview http://127.0.0.1:4322/. JBAEL-v0.6.1-source.zip/checkpoint.json preserve this state; previous versions remain. No deployment or live integration.

## CHG-012 — Mobile presentation refinement,26 October2026
Same working project and dist/ output, package0.6.1 retained. Separate responsive/mobile.css and desktop.css; corrected caption/actions, narrow card/form/control styles and mobile navigation handling.36-file check0 diagnostics,26 tests,188-page build,45287 references,376 HTTP checks and164 static cascade assertions pass. Actual browser review remains NOT RUN; see mobile-audit.md. Git history is the revision mechanism; no source ZIP, copied version folder, commit/push or deployment created.

## CHG-013 — Stable mobile disclosures and swipe banners,26 October2026
Same working tree, package0.6.1 and188 pages. Touch-safe disclosure/dismissal; swipe/mouse drag alongside arrows/dots; cancellable image travel and reduced-motion support.38-file check0 diagnostics,41 tests,45475 references,376 HTTP checks and164 static CSS-cascade checks pass. Actual browser interaction acceptance NOT RUN. No new ZIP, commit, push or deployment.

CHG-014 —26 October2026: connected Services/Equipment menus implemented in the same V0.6.1 working folder.45 tests and188-page build pass; actual browser acceptance pending. No ZIP, copied version folder, commit, push or deployment created in this task.

CHG-015 —26 October2026: sequential menus in the same V0.6.1 working folder;46 tests and188-page build pass. Browser verification pending. No archive, commit, push or deployment.

CHG-016 —26 October2026: compact desktop dropdown/flyout correction in the same V0.6.1 working folder.51 tests and188-page build pass; browser acceptance pending. No archive, commit, push or deployment.

CHG-017 —26 October2026: rightward-only/list-only menu refinement in the same V0.6.1 folder.51 tests and188-page build pass; browser acceptance pending. No archive, commit, push or deployment.

CHG-018 —27 October2026: modest header-margin correction in the same V0.6.1 folder.51 tests,188-page build and381 static CSS checks pass; browser verification pending. No archive, commit, push or deployment.

CHG-019 —28 October2026: vertical Equipment dropdown alignment in the same V0.6.1 working folder;54 tests,39-file check0 diagnostics,188-page build and381 static CSS checks pass. Browser acceptance pending. No archive, commit, push or deployment.

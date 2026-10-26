# Versions and change control

## Current policy — CHG-011,26 October2026
One working folder, Git history and one replaceable dist/ build output. The eight historical JBAEL source ZIPs were removed at the user’s request; do not create replacements. Historical entries below retain their original evidence but archive-preservation statements are superseded. GitHub origin is configured; this cleanup does not push or deploy.

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

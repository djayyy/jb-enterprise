# Change log

Record one entry per logical change, newest first. IDs CHG-001, CHG-002, etc. are stable. Preserve historical records; clarify mistakes with a dated correction. This log starts with specification workflow integration; earlier package/organisation history remains in [versions.md](versions.md).

## CHG-012 — 2026-10-26 — Mobile layout audit
- R38/T40–T41/A34–A35; [audit](mobile-audit.md). Separate mobile/tablet and desktop presentation files with shared content. Removed obsolete caption hide and vertical action rules; flow-based mobile banner with horizontal actions, flexible image area and independent pagination.
- Repaired inherited card padding, form/control sizing and long-text wrapping, mobile footer/dialog presentation, header-nav style leakage and dynamic header/menu bounds. Touch scope panels move directly under the selected item; desktop panes restored on resize. Outside tap/focus/resize closes the mobile menu; child keyboard events avoid double handling.
- Code: Layout, NavigationDropdown, global/v05/v06 CSS; new responsive/mobile.css and desktop.css. No business data, route, image, dependency or form-contract change. No duplicate site/content, user-agent detection or ZIP backup.
- Specs: requirements/Design/architecture/decisions/tasks/acceptance, new mobile-audit, versions/index/status, README/agents and checkpoint updated. sources/workflow unchanged (no new evidence/assets, same Git-only workflow). Prior route audit retained as historical evidence; current navigation checks rerun and recorded in mobile-audit. Older plans remain historical.
- Validation:36-file check0 diagnostics;26 tests;188-page build;45287 references;562 destinations/855 semantic checks;376 HTTP requests plus404;164 static generated-CSS cascade assertions at13 widths. Browser rendering/hover/touch/focus/scroll/resize/text zoom NOT RUN: no authorised browser tool available. Static checks do not establish geometry or full WCAG compliance.
- Same working folder, package0.6.1; source state CHG-012. No commit, push, deployment or archive creation. Original requirement inputs unchanged.

## CHG-011 — 2026-10-26 — Remove redundant source backups
- R37/T39/A33. Delete eight generated project-root JBAEL-*-source.zip snapshots; ignore future matching files. dist/ was already ignored and remains the static publish output. Use one working folder plus Git history.
- Files: .gitignore, agents/README; requirements/tasks/acceptance, versions/workflow/decisions/architecture, index/status/checkpoint and this log; eight source ZIP deletions.
- No application source, public asset, original requirement, dependency or hosting configuration changed. Design/sources/navigation audit and earlier plans remain historical and need no behaviour updates. Earlier archive-preservation instructions are superseded.
- Validation PASS A33: eight ZIPs absent, ignore checks pass, dist/ untracked, existing188-page build contains no ZIPs, application/config/assets unchanged, Markdown links valid. Removed119618228 bytes. No build/test rerun required for backup deletion/docs; no commit, push, deployment or history rewrite performed.

## CHG-010 — 2026-10-26 — Simplify catalogue pages
- R36/T38/A32: search only on All Services/All Equipment. Removed nested-page search, sidebar, sibling/related cards and duplicate parent-list links; retained breadcrumbs, own children, source context and enquiries. Full-width child grid and bounded leaf prose.
- Code: CatalogPage.astro, v06.css; Layout/privacy/package/lock version0.6.1. Removed unused sidebar styles and sibling computation. No route/data/asset/runtime logic changes.
- Specs: requirements, Design, architecture, decisions, tasks, acceptance, current plan/status/audit, versions, README/index/agents and checkpoint updated. sources.md unchanged because no new factual source/assets; workflow and older version plans unchanged. Original requirement inputs preserved.
- Validation:36-file check0 diagnostics,188-page build,45287 references,562 distinct destinations,855 semantic checks,376 HTTP checks and branded404. A32 HTML inspection passes for exactly2 search indexes and178 clean detail pages; source diff reviewed. Prior26 unit results remain V0.6; no rerun needed for template/CSS removal. Browser visual acceptance NOT RUN; no browser tool.
- Preview4322; separate V0.6.1 archive, prior versions preserved. No database, live integrations or deployment.

## CHG-009 — 2026-10-26 — Separate service and equipment pages
- Mapping R33–R35; T35–T37; A29–A31. [Plan](v06-plan.md), [audit](navigation-audit.md).
- Replaces hidden grouped browsers with complete indexes, category pages, individual service/equipment group pages and source-scope/part leaf pages.178 catalogue nodes/188 total documents; all source entries retained. Clickable navy category labels, canonical homepage/menu links, breadcrumbs, parent/sibling links and contextual enquiry. Old preview query/hash links receive a whitelist compatibility bridge.
- Shared catalogue builder/data wrapper, CatalogIndex/Page/Card/Search/LegacyCatalogLinks components and equipment catch-all route; existing services/equipment/home routes, NavigationDropdown, HeroSlider links, company industry links, navigation helper, Layout/privacy/package version0.6.0; v06.css.24 optimized supplied images/provenance and image metadata. New source-data helper and catalogue tests; verifier/audit adapted to actual page hierarchy.
- Specs: plan/index, requirements, Design, architecture, decisions, sources, tasks, acceptance, versions, implementation-status, navigation-audit, agents/README and checkpoint updated. workflow unchanged: existing mandatory process applies. Older version plans remain historical; form/storage/production contracts and original source arrays remain unchanged.
- Validation:36-file check0 diagnostics,26 tests,188-page build,47996 local references,562 distinct destinations,855 semantic checks,9 CSS assets and376 HTTP checks plus branded404. Actual browser visual/hover/touch/keyboard/redirect journeys NOT RUN; no authorised browser tool. No fabricated browser evidence or exact-part photo claims.
- Separate V0.6 archive; previous versions/source requirements preserved. Preview4322, no deployment/database/live integrations. Leaf detail limited to supplied content; technical approval/asset rights/launch integrations remain pending.

## CHG-008 — 2026-10-26 — Edge-to-edge hero images
- Mapping: R25,R29,R32; T34; A28.
- Before/after: contain sizing left side gaps, especially with the two3:2 photographs; cover fills the frame proportionally with centred outer-edge cropping. Reveal changes from0.985→1 to1.025→1 so it cannot expose blank edges. Corrected each image's intrinsic dimensions.
- Files: v05.css, HeroSlider.astro; package/lock and Layout/privacy version0.5.1. Source photos, links and menu behaviour unchanged.
- Specs: requirements, Design, decisions, architecture metadata note, source dimensions, tasks, acceptance, versions, implementation-status, v05-plan, index/agents/README and checkpoint updated. workflow.md unchanged; navigation-audit.md remains historical V0.5 evidence because no routing changed.
- Validation:28-file check0 diagnostics,23-page build,5495 local references/source checks and HTTP200 serving V0.5.1 pass. Browser framing NOT RUN; current tool unavailable. Earlier logic/HTTP suite not repeated for CSS/metadata-only patch.
- Local preview4322; separate V0.5.1 archive, no deployment/live integrations. Previous archives and original requirement inputs preserved.

## CHG-007 — 2026-10-25 — Reference carousel, hover menus and navigation audit
- Mapping: R29–R31 plus R04,R22,R25–R27; T31–T33; A25–A27. [Plan](v05-plan.md), [audit](navigation-audit.md).
- Presentation: follow inspected S1 pp.1–3 with in-banner dots, side arrows, title overlay and lower actions; manual/finite animation; measure header for viewport sizing. No above-banner row. Hover/focus reveals category -> item -> source scope in JBAEL-styled panes. Full-height trigger and400ms leave grace; keyboard/touch supported.
- Audit fixes: fragment-only service category, incompatible search hiding direct targets, Equipment Back to top, per-part anchors, stale load/font scroll cancellation, certificate/menu modified clicks and theme-specific hero destinations. Strict slash preview errors fixed with ignore matching and normalised route state.
- Files: HeroSlider, NavigationDropdown, CertificateGallery, Layout, services/equipment/privacy; navigation.mjs, scroll-target.ts, new v05.css; astro.config, package/lock; verifier/navigation tests, new scroll tests and audit-navigation.mjs. No factual content/assets/dependency/form-contract changes.
- Specs: current plan/audit linked; requirements, Design, architecture, decisions, tasks, acceptance, sources, versions, implementation-status, index, agents, README and checkpoint synchronised. workflow.md unchanged: same required discipline. V0.4 plan/history retained as superseded.
- Validation:28-file check0 diagnostics;23 pages;20 tests;5495 link/asset references;258 destinations;1969 semantic checks;100 scopes;59 equipment targets;9 CSS assets;64 HTTP checks plus missing URL branded404. Earlier audit failures and corrected assumptions recorded in acceptance. Actual browser visual/hover/scroll/keyboard/touch NOT RUN; no authorised browser control available.
- Version: local V0.5 on4322; prior archives preserved. Old4321 process could not be stopped under current permissions and retains earlier routing config. No deployment/database/live integrations. Production canonical/legacy redirects and external/factual approvals remain release tasks.

## CHG-006 — 2026-10-25 — First-screen choices and persistent dropdowns
- Mapping: R25,R26,R28; T29,T30; A20,A21,A23,A24.
- Changes: move named hero choices before artwork, use viewport-aware desktop banner sizing with readable mobile flow, remove pointerleave dismissal from both menus. Outside click/Escape/focus leaving/another menu/navigation still dismiss.
- Files: HeroSlider.astro, NavigationDropdown.astro, v04.css; package/lock/Layout/privacy version0.4.1; verify.mjs now checks menu count, unique IDs, ARIA targets and theme DOM order.
- Specs: reconciled interrupted CHG-005 plus current requirements, Design, architecture, decisions, tasks, acceptance, sources, versions, implementation-status, v04-plan, index, agents and project README; new checkpoint. workflow.md reviewed unchanged because change discipline is unchanged. No source business facts, assets, dependencies or form contract changed.
- Verification:28-file Astro check0 diagnostics;23-page build;4917 local references;13 tests pass; preview HTTP200. Structural checks verify theme order and menu targets. Current browser visual/pointer/keyboard/touch/scroll checks NOT RUN: no authorised browser tool available. Historical results not reused as current proof.
- Version: local V0.4.1 checkpoint/source ZIP, prior archives preserved; no deployment/database/live integrations.

## CHG-005 — 2026-10-25 — Presentation and navigation repair
- Mapping: R25–R27 plus R04,R06–R11,R20,R22; T26–T28; A20–A22. [Plan](v04-plan.md).
- Implemented in previous turn: large contain-image hero/manual named selectors, finite reveal/crossfade; removed rotation controls/status, selected badges, repeated equipment strip. Hierarchical Services/Equipment menus use supplied scopes/parts. New stable detail/scope/component links and deterministic query resolution fix stale/mismatched category state; reveal targets before scrolling below sticky header.
- Files: HeroSlider, new NavigationDropdown, Layout, home/services/equipment/detail pages, company.ts links, new navigation.mjs/scroll-target.ts/v04.css, v03.css badge removal, new navigation.test.mjs, verifier, package/lock/privacy0.4.0. Source facts/assets/dependencies/forms unchanged.
- Verification before disconnect:28-file check0 diagnostics;23 pages;4917 local references;13 tests passed. Browser checks NOT RUN.
- Documentation/version archive were interrupted by workspace disconnection; reconciled in CHG-006. No separate V0.4 archive was completed. Current checkpoint includes CHG-006 corrections.

## CHG-004 — 2026-10-25 — Navigation and image clarity
- User goal: clearer three-theme hero, working rotation, full OEM image, remove confusing numbering, organise services and give Specialist/equipment consistent imagery.
- Mapping: [v03-plan.md](v03-plan.md); R04,R06–R11,R18–R24; T23–T25; A02,A04,A06,A10,A17–A19.
- Implementation: HeroSlider rebuilt with named thumbnails, uncropped contain images, subtle transitions and explicit Auto-rotate/Stop/status; immediate advance then6-second interval, no hover cancellation, keyboard/manual/visibility/focus pause. Decorative Home/About numbering removed. Shared CategoryCards provides equal Thermal/Hydro/Specialist and Thermal/Hydro/Auxiliary hierarchy. Equipment now filters/searches source groups with URL context/empty recovery and enquiry prefill. Selected badge and hover styling corrected after visual review.
- Files: HeroSlider, CategoryCards(new), Home/About/Services/Equipment/Layout/privacy, v03.css(new), package/lock0.3.0, scripts/verify. No dependency/content data/new assets added; originals preserved.
- Specs: new linked plan, requirementsR23/R24, Design, architecture, decisions, tasks, acceptance, sources, versions, implementation-status, README/agents and checkpoint updated. Workflow unchanged: same mandatory sync. Previous version acceptance retained as history.
- Validation:25-file check0 diagnostics,23-page build,804 local references/source/category checks,7 tests,HTTP200; actual timed rotation and stop-state, full OEM imagery, keyboard controls, Specialist/grouping, stable scroll, equipment search/empty/reset/deep-link/prefill and12 responsive observations pass. No full WCAG/Lighthouse or production claim. Detailed limits in acceptance.md.
- Version: V0.3 local review, no database/live email/uploads/deployment. Separate source ZIP preserves V0.1/V0.2. Missing social destinations and launch/content approvals remain unchanged.

## CHG-003 — 2026-10-25 — Source-aligned V0.2 rebuild
- Goal: implement the user's eleven corrections using supplied requirements only; restore S1 structure and stop service-selection page-top resets.
- Plan/mapping: [v02-plan.md](v02-plan.md); R03–R12,R18–R22; T19–T22; A01–A06,A10–A12,A15–A17.
- Before -> after: discretionary single-banner home -> three source slides, welcome, ten capabilities, social strip and certificate imagery; incomplete About -> all What We Do/values/leadership; navigational service cards -> photo family choice plus in-page service scope tabs.
- Files: company.ts, assets.json, HeroSlider/SocialLinks/CertificateGallery/CTA, Layout, home/About/certifications/services/detail pages, wording in equipment/contact/quote/careers/privacy, v02.css, verifier, package/lock version0.2.0, new supplied-image WebP assets. Existing form contract/dependencies unchanged. Original requirement/ preserved.
- Fixes: no route reload/forced scroll on explorer selection; accessible tab keyboard and URL context; small-screen About overflow fixed after browser discovery.
- Specs updated: plan/index, requirements R22/coverage, Design, architecture, decisions, tasks, acceptance, sources, versions, implementation-status, checkpoint, agents and project README. workflow.md reviewed and unchanged: same mandatory change discipline. Historical CHG-002 evidence preserved, not reused as current proof for changed UI.
- Validation:24-file Astro check with zero diagnostics;23-page build;799 local links/assets and source-section checks;7/7 tests;HTTP200. Chrome photo/service/search/deep-link/prefill/modal/keyboard/menu checks;16 responsive page-width observations with discovered320px About overflow fixed and affected check rerun. No captured browser errors. Exact evidence/limits in acceptance.md.
- Limits: four social destinations missing; independent source claims/contact/certificate/image-rights review; broader search/projects/resources, full accessibility/Lighthouse, timed/reduced-motion checks, live email/upload/CAPTCHA, production metadata/redirects/deployment/rollback pending. No fabricated business data or competitor superiority claim.
- Version: V0.2 local review; no database/API/deployment. Preview http://127.0.0.1:4321/ while existing loopback server runs. Separate source archive preserves V0.1. checkpoint.json hashes tested source/public/config state; source ZIP contains specs and excludes original references/intermediates.

## CHG-002 — 2026-10-24 UTC — Initial local review implementation
- Type: first application implementation, asset preparation, checks and documentation.
- User goal: implement the accepted fresh static initial version inside Jb-Service, without a database.
- Before -> after: planning files only -> 22 static review pages, 13 service detail pages, grouped equipment catalogue, service filtering/search, About/quality, careers and disconnected contact/quote/application interfaces.
- Files: package.json/lock, astro.config.mjs, tsconfig.json, .gitignore, .prettierrc.json, README.md; src/ templates/components/styles/data/lib; public/ optimised supplied imagery/logo/fonts/licenses/brochure; scripts/forms.test.mjs and verify.mjs. Original requirement/ input was not modified.
- Mapping: R01-R21 with partial coverage detailed in implementation-status.md; T01-T08 progressed, T10 service-search portion implemented; A01-A06,A09-A13 partially assessed. A07/A08/A14 remain pending live integration/release.
- Design: original navy/orange machinery-led theme; static hero; responsive mobile navigation; service cards/filter; contextual quotation; explicit preview labels. Equipment groups share one page, quality overview is under About, unverified future pages are omitted from navigation.
- Architecture: Astro 7.4.2 static build, TypeScript content, small browser scripts, local font files; no database/endpoints/storage or deployment. Upgraded initial scaffold dependency after audit findings; final audit total zero.
- Form contract: no data transmission; method=dialog plus prevented submission, bounded text prefill, native field validation and local metadata checks. Proposed enquiry policy is 2 GB aggregate/10 files; resume 5 MB/one file. Real storage and server validation remain required.
- Specs updated: README (status/index), Design (actual interactions), requirements (coverage link), architecture (actual preview), decisions (D12-D17/date correction), tasks (actual status), acceptance (evidence/limits), sources (asset provenance), versions (review checkpoint), agents (implementation status); added implementation-status.md and checkpoint.json.
- Unaffected spec: workflow.md reviewed; mandatory synchronisation procedure unchanged. No source requirement removed or launch approval inferred.
- Validation: Astro check 0 errors/warnings/hints; 7/7 Node tests; 22-page build; 710 local references passed; npm audit zero; HTTP 200. Chrome verified menu/Escape, filter/no-results, two contextual quote paths, native validation and honest preview result. No horizontal overflow across 16 four-width/page observations plus careers at 320px. Visual desktop/mobile review performed.
- Remaining limits: see acceptance.md. No Lighthouse or full automated accessibility audit; no live email/uploads/CAPTCHA; factual contacts/image/certificate/project approval, About expansion, broad search, redirects/canonicals/sitemap and production deployment/rollback pending.
- Version: V0.1 local initial review; uncommitted, no Git repository. Preview http://127.0.0.1:4321/ while local process runs. checkpoint.json binds evidence to source hashes; source archive excludes requirements/dependencies/intermediates.
- Historical note: earlier planning dates say 2026-10-25; this entry uses verified UTC date 2026-10-24. No earlier full acceptance PASS has been carried forward.

## CHG-001 — 2026-10-25 — Bind agent instructions to specifications
- Type: documentation / workflow.
- Request: keep all specifications aligned whenever code changes.
- Files: agents.md; spec/README.md; spec/workflow.md; spec/change-log.md; spec/tasks.md; spec/acceptance.md; spec/versions.md.
- R/T/A mapping: R01 iterative development; no application T/A execution (documentation-only).
- Result: mandatory before/after impact review, per-change records, evidence tracking and stale-result handling. Entire spec/ directory covered, including future documents.
- Specs unchanged: requirements, Design, architecture, decisions and sources; product scope, UI, technical plan and business evidence unchanged.
- Validation: relative Markdown link and required-file checks passed; no application build/tests applicable.
- Limits: guidance only; no watcher/hook/CI installed. Lowercase agents.md must be explicitly loaded in tools that require uppercase AGENTS.md.
- Version/commit: specification workflow revision; uncommitted, no application release.

## Entry template
- ID/date/title:
- Type and user goal:
- Implementation files changed:
- R/T/A IDs (or N/A rationale):
- Behaviour before -> after (or behaviour preserved):
- Spec files updated and reason:
- Unaffected specs reviewed and reason:
- Validation method/result/evidence and tested state:
- Invalidated acceptance results, if any:
- Remaining blockers/risks:
- Version/commit/preview (only when actually available):

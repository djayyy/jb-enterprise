# JBAEL specification index

Latest CHG-051: duplicate company-name text beside footer logo removed; header unchanged. R84/T98/A86 checks/limits recorded.

Latest CHG-050: text-free header emblem and unchanged complete footer logo; R83/T97/A85 verified.

Latest CHG-049: footer tagline restored beneath logo and all5 socials visible; R82/T96/A84 verified scope/limits recorded.

Latest CHG-048: whole-site public-copy audit/cleanup complete across188 pages; R81/T95/A83 checks pass. Operational launch limitations remain documented.

Latest CHG-047: complete company-facing Privacy Policy replaces development copy; shared labels aligned. R80/T94/A82 checked; operational/legal limits recorded.

Latest CHG-046: corrected office titles and all3 addresses below footer logo; pending-social sentence removed. R79/T93/A81 build/type/link/responsive checks pass.

Latest CHG-045: approved friendly Contact/Quote-specific confirmations with cross-only close; R78/T92/A80 build/type/link/copy checks pass.

Latest CHG-044: clearer refresh icon and navy/orange form accents; R77/T91/A79 scoped render/build/link checks pass.

Latest CHG-043: compact4-letter lowercase captcha replaces arithmetic. R76/T90/A78 verified scope/limits recorded.

Latest CHG-042: demo form labels removed; required arithmetic human verification added. R75/T89/A77 checks/limits recorded. No live email.

Latest CHG-041: mock enquiry confirmations and shared document-details form implemented; R73–R74/T87–T88/A75–A76 scoped checks pass. No live email; local review.

Latest CHG-040: horizontal portfolio label/arrow fixed; R72/T86/A74 responsive Chrome/build/link checks pass.

Latest CHG-039:3 supplied portfolio PDFs added under shared footer Resources; R71/T85/A73 checks pass across188 pages. Local only.

Latest CHG-038: Careers phone mandatory; R70/T84/A72 generated-form/build/type/link checks pass. Local only.

Latest CHG-037:1st November brochure replaces canonical download across188 pages; R69/T83/A71 checks pass. No deployment.

Latest CHG-036: removed client pause UI/stop rules and replaced footer text with an upward icon. R68/T82/A70; scoped local checks pass.

Current CHG-035: reference-style blue quote banner and 20 supplied client logos in accessible CSS marquee. R66–R67/T80–T81/A68–A69; checks pass for scoped local review, limits in acceptance.md. No deployment.

CHG-034 current review: service/equipment cards use common240px desktop/220px narrow photos,23px titles/15px descriptions and per-row aligned text/action tracks. Full copy retained without clipping.360 all-page cases/394 card instances plus40 responsive cases pass;56 tests,41-file check,188-page build and49,990 link/asset checks pass. A67 records browser evidence/limits. Local uncommitted review; no deployment.


CHG-033 current review: removed added light photo frames/padding from catalogue heroes and non-Home cards. Photos fill their media areas edge to edge; source-proportional bounded heroes and adaptive180–280px card areas use cover fitting without hover zoom. All178 detail pages plus2 indexes pass1440/390px checks (360 cases/750 media instances), plus40 responsive cases.56 tests,41-file check,188-page build and link/navigation checks pass. A66 records evidence/limits; local uncommitted review, no deployment.


CHG-032 current review: catalogue heroes and non-Home cards now show complete bounded photos without cover cropping or enlargement past intrinsic CSS dimensions. All178 catalogue pages plus2 indexes pass desktop/mobile checks, with40 extra responsive cases and83 formerly unloaded images rechecked after loading.56 tests,41-file check,188-page build and link/navigation checks pass. A65 records evidence/source-resolution limits; checkpoint refreshed after reconnecting. Local uncommitted review; no deployment.


CHG-030 current review: all three About compositions fit five tested desktop screen sizes, with reduced opening top space and full circular actions/Leadership. Service/equipment heroes and component cards are permanently clearer.157 explicit photo mappings change131 nodes;31 sibling groups have zero repeated images.56 tests,41-file check,188-page build and link/navigation checks pass; evidence/limits in A61–A63. Separate CHG-031 download rollback retained. Local uncommitted review; no deployment.


CHG-028 current correction: desktop About opening fills the remaining first screen beneath the unchanged header; What We Do starts exactly at the viewport bottom at four tested sizes and appears on scroll. Full objective remains visible. A59 records responsive/menu/command evidence and limits; no deployment.


CHG-027 current correction: opening About section through the full objective now fits normal desktop landing screens at1024×768,1280×720 and1440×756/812 without reducing text size. Opening brochure removed; footer link retained. Mobile/200% zoom keep natural readable flow. A58 records evidence/limits; build/typecheck/link checks pass, no deployment.


Baseline: 2026-10-25 | Release: V0.6.1 / CHG-034 consistent catalogue cards | Implementation: 188 static pages; tested Chrome desktop/mobile viewports; live forms and wider workbook backlog pending.

| File | Purpose |
| --- | --- |
| [agents.md](../agents.md) | Project context and agent working rules |
| [requirements.md](requirements.md) | Requirement IDs, scope and source mapping |
| [v02-plan.md](v02-plan.md) | User correction, source page mapping and end-to-end implementation plan |
| [v03-plan.md](v03-plan.md) | Historical hero and directory clarity refinement |
| [v04-plan.md](v04-plan.md) | Historical presentation cleanup and navigation repair |
| [v05-plan.md](v05-plan.md) | Historical source carousel and hover-menu refinement |
| [v06-plan.md](v06-plan.md) | Current separate catalogue pages and image-backed hierarchy |
| [Design.md](Design.md) | Navigation, templates, visual direction and user journeys |
| [architecture.md](architecture.md) | Database-free architecture and form contracts |
| [tasks.md](tasks.md) | Ordered implementation backlog and dependencies |
| [acceptance.md](acceptance.md) | Testable completion criteria and evidence |
| [decisions.md](decisions.md) | Confirmed decisions, defaults and launch questions |
| [sources.md](sources.md) | Source inventory and limits of prior inspection |
| [versions.md](versions.md) | Versioning, review and launch workflow |
| [implementation-status.md](implementation-status.md) | Current routes, coverage, deferrals and verification |
| [mobile-audit.md](mobile-audit.md) | Current mobile findings, presentation ownership, static checks and browser review limits |
| [navigation-audit.md](navigation-audit.md) | Whole-site findings, route inventory, evidence and limits |
| [checkpoint.json](checkpoint.json) | SHA-256 of tested implementation files |
| [workflow.md](workflow.md) | Mandatory before/after code-change procedure |
| [change-log.md](change-log.md) | Per-change traceability and verification record |
| [company-review-2026-10-28-plan.md](company-review-2026-10-28-plan.md) | Existing company workbook feedback plan and dependencies |
| [image-feedback-2026-10-31-plan.md](image-feedback-2026-10-31-plan.md) | Current welcome redesign and nine-image replacement plan |
| [about-reference-2026-11-01-plan.md](about-reference-2026-11-01-plan.md) | Implemented company-name rule and About layout/background alignment with S1 pages 10–12 |

## Use
Project root is Jb-Service/. agents.md and spec/ are installed here. All original PDFs, legacy code and reference images are preserved under requirement/. Keep all future coding and project files inside Jb-Service/. Source paths in sources.md are relative to this project root.

Follow requirements -> design/architecture -> tasks -> implementation -> acceptance evidence. Keep IDs stable. Record changed assumptions in decisions.md and versions.md. Acceptance is a release gate, not an assertion of completed work.

Status labels: CONFIRMED = user decision; DOCUMENTED = supplied source; PROPOSED = implementation default; OPEN = unresolved; VERIFIED = tested with recorded evidence. A proposed addition can be developed in a preview, but invented business facts cannot be published.

## Change discipline
Every coding task follows [workflow.md](workflow.md) under [agents.md](../agents.md). Record every logical change in [change-log.md](change-log.md), update affected specs in the same change set, and preserve requirement/task/acceptance traceability. These instructions do not install automatic file monitoring.

Current artifact policy (CHG-011): one working tree with Git history; no source ZIP snapshots. dist/ is ignored in Git and rebuilt for static publishing. See versions.md and the project README.

Current refinement: CHG-012 mobile/desktop presentation separation; see mobile-audit.md. Package0.6.1 and188 routes remain; browser acceptance pending.

Current interaction follow-up: CHG-013 mobile menu dismissal/toggle repair and banner swipe/drag; current evidence and limitations are in mobile-audit.md and acceptance.md.

Current menu hierarchy: CHG-014 / R40 / T44–T45 / A38–A39. Connected desktop panes and nested mobile branches implemented; see Design.md, mobile-audit.md and acceptance.md for verification and browser limits.

Current follow-up: CHG-015 / R41 / T46 / A40 — neither menu opens a default category or item; each level appears after interaction with its parent. See acceptance.md for current checks.

Current alignment correction: CHG-016 / R42 / T47 / A41 — compact desktop flyouts beneath their own header labels, without reserved blank columns; mobile positioning cleanup verified by fixture. Actual browser review pending.

Current correction: CHG-017 / R43 / T48 / A42 — navigation shifted left; all child flyouts open right; dropdown View all rows removed. See Design.md and acceptance.md for responsive details/evidence.

Current header correction: CHG-018 / R44 / T49 / A43 — original single-row alignment restored with only a modest leftward margin for Home–Contact. Rightward/list-only menus retained; see acceptance.md for evidence and browser limits.

Current alignment: CHG-019 / R45 / T50 / A44 — root lists remain vertically aligned beneath their triggers; measured header spacing and fitted child widths replace independent root shifting. See acceptance.md for current evidence and browser limits.

Current implementation: CHG-022 / R46,R47,R52 / T54,T59–T61 / A45,A47,A52. All nine feedback-folder images integrated through optimised derivatives; centred welcome/Why and complete shared branding implemented. Chrome checks cover seven responsive widths, both menus, selected user journeys and 200% zoom; compact-menu height repaired. See acceptance.md and checkpoint.json. CHG-020's wider workbook work remains pending where explicitly recorded.

Latest refinement: CHG-023 / R53 / T62–T63 / A53–A54 complete for local Chrome review. Baseline brand/nav/catalogue presentation restored; supplied images/Welcome retained; all three homepage card groups share compact dimensions and clearer-photo/larger-text hover/focus. This supersedes affected CHG-022 visual treatments, not its image mapping. See acceptance.md and checkpoint.json.

Latest refinement: CHG-024 / R54 / T64 / A55 complete. Clearer photos/larger copy are permanent on Home and shared catalogue cards; image/text hover changes removed, keyboard outlines and compact grids retained. Current evidence in acceptance.md and checkpoint.json.

Current planning: CHG-025 / R55–R56 / T65 complete, T66–T67 pending / A56–A57 NOT RUN. Company-name underline and About pages 10–12 composition/backgrounds inspected and planned; application remains CHG-024 with no code/public-asset change.

Current implementation: CHG-026 / R55–R56 / T66–T67 complete / A56–A57 PASS for scoped Chrome desktop/mobile/200% zoom review. About reference composition and underline implemented with unchanged shared metrics; evidence/limits in acceptance.md. Earlier CHG-025 pending statements describe the planning checkpoint.


CHG-031: user reverted CHG-029. Brochure/certificate download links are direct again; no download form or email backend remains. Other website work is preserved. See acceptance.md for scoped rollback checks.

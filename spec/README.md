# JBAEL specification index

Baseline: 2026-10-25 | Release: V0.6.1 local review; browser acceptance pending | Implementation: 188 static pages; live forms pending.

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

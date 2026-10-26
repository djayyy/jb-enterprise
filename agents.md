# JBAEL project instructions

Specification baseline: 2026-10-25. Status: CHG-012 mobile/desktop presentation refinement implemented on V0.6.1; browser acceptance and production integrations remain pending.

## Goal and authority
Build a fresh JB Advanced Engineering Limited (JBAEL) website from the supplied requirements. Deliver a reviewable initial version, then refine the same working folder in place. Use Git history for revisions; do not create source ZIP backups or copied version folders. No application database. Customers and staff follow up through email. Benchmark clarity, technical depth and enquiry usability against MD&A and PPS; do not claim superiority without measured evidence.

Read [spec/README.md](spec/README.md), [requirements](spec/requirements.md), [Design](spec/Design.md), [architecture](spec/architecture.md), [decisions](spec/decisions.md), [tasks](spec/tasks.md) [acceptance](spec/acceptance.md), [sources](spec/sources.md), [versions](spec/versions.md), [workflow](spec/workflow.md) and [change log](spec/change-log.md) before implementing. Read [V0.2 source-alignment plan](spec/v02-plan.md) and [V0.3 refinement](spec/v03-plan.md), then [V0.4 refinement](spec/v04-plan.md) and [V0.5 plan](spec/v05-plan.md), then the current [V0.6.1 plan](spec/v06-plan.md). Catalogue indexes, categories, services/equipment groups and supplied child scopes/parts now have separate pages. Menu labels and homepage offering cards must link to their canonical pages; hover remains a preview, not a substitute for navigation. R36 keeps search on the two all-items indexes only; nested pages have no sidebar or related/sibling lists, with breadcrumbs retained. The latest user requests supersede above-banner theme choices and permanently open/click-only breakdown menus. Follow the supplied layout with in-banner dots and side arrows. Reveal service/equipment hierarchy on hover, with keyboard/touch alternatives and a forgiving pointer path. Factual source constraints remain. For responsive work read [mobile audit](spec/mobile-audit.md). Maintain device-specific layout rules in src/styles/responsive/mobile.css and desktop.css, with shared content/templates. Business content must come only from supplied requirements; retain the proposed PDF section hierarchy. User instructions override this baseline. Change requirements and acceptance criteria together when scope changes. Proposed defaults are not company-verified facts.

## Existing website
URL: https://www.jbepower.com/. Reviewed in this conversation on 2026-10-24.
Old identity: J B Enterprise. Main menu: Home, About, Offerings, Blogs, Contact Us. Home introduces the company, customer logos, service summaries, products and articles. Offerings include maintenance, erection/commissioning, O&M, turbine refurbishment, OEM spares, rotor rewinding, stator rewinding and repairs. Contact contains office details and an enquiry form; a quote interaction also exists.
Supplied source folder: requirement/picxele-jb-enterprise-main, containing HTML, CSS, JavaScript and assets. Repeated headers/footers and template filler were observed. Product links lead to general Offerings; footer Sitemap links to Contact. The local contact form uses action="#" and generic AJAX; this does NOT establish how the live quote form stores or delivers submissions. Inspect the deployed integration before replacing it.
Vercel was reported by the user as the host; account/project access and deployed configuration have not been verified here. Domain registration at Squarespace and planned transfer to GoDaddy are distinct from website hosting and redesign.

## New requirements
New identity: JB Advanced Engineering Limited; tagline: Powering precision, Engineering the future. Expand thermal/hydro services, equipment supply, reverse engineering, testing, lubrication reliability, sourcing, certifications, contact/quote and careers. The 47-page design PDF is a screen/section guide, not a requirement for 47 URLs. See requirements.md for traceable details.

## Workspace boundary
All new source code, configuration, tests, assets and development documentation must live inside Jb-Service/. Run project commands from this directory. Treat requirement/ as preserved reference input; do not implement the new website in the legacy source there. Copy selected assets into the new application as needed. Keep requirements and spec documents out of public deployment output.

## Implementation rules
- Start separately from the legacy source; preserve original files and production website.
- Prefer static generated pages and reusable templates. Astro 7.4.2/TypeScript is installed for static output; Vercel deployment remains unprovisioned.
- Keep content in versioned files. No database, admin portal, customer accounts or ecommerce in baseline.
- Server-side form processing sends email; never put credentials in client code or commit secrets.
- File storage is allowed separately from a database. Preserve the documented 2 GB enquiry/quote requirement unless explicitly changed.
- Preview forms must not claim email delivery or upload success when disconnected.
- Use supplied factual content and real company imagery. Do not invent jobs, metrics, testimonials, partnerships, certifications, projects, response-time promises or 24/7 availability.
- Resolve layout/interaction gaps autonomously using documented defaults; record factual conflicts in decisions.md.
- Reuse suitable legacy content and URLs or provide explicit redirects.
- Use accessible semantic HTML, responsive layouts and minimal JavaScript. Verify keyboard and mobile behaviour.
- Run relevant build/link/accessibility/form checks; attach evidence to acceptance.md. Do not mark unchecked criteria passed.
- Work in small Git-tracked increments. Keep dist/ ignored and rebuild the same output directory for publishing; generated JBAEL-*-source.zip backups are prohibited unless explicitly requested. Production cutover is a separate release task after readiness, not an automatic consequence of a preview build.

## Mandatory spec synchronisation for every change
The entire spec/ directory is bound to this instruction file. Read spec/README.md and spec/workflow.md at the start of each coding task; inspect every spec document relevant to the change, including any newly added files. Follow the full before/during/after workflow in [spec/workflow.md](spec/workflow.md).

Every logical code change (features, fixes, refactors, tests, dependencies, configuration, deployment settings and content/assets) MUST have a corresponding entry in [spec/change-log.md](spec/change-log.md) in the same work session and, when committing, the same change set. Batch related edits into one entry; do not log every keystroke or generated file. Documentation-only changes also receive an entry.

Before editing: map the change to requirement R, task T and acceptance A IDs. Create missing IDs without renumbering existing ones. For maintenance with no product requirement, record N/A with a reason rather than inventing a requirement. Update changed behaviour/design/contracts before or alongside implementation.

After editing: update affected specs and task status, execute relevant checks, record acceptance evidence against the exact tested state, and review the actual diff against the specification. Changed behaviour invalidates earlier affected test results until rerun. Do not silently retain stale PASS results or mark tasks complete without evidence.

No change is complete until the change log records scope, files, R/T/A mapping, affected spec updates (or why none were needed), validation and remaining limitations. Never manufacture commit IDs, test results, delivery claims or approvals. In the final response report code changes, spec changes and checks/limits.

These are agent workflow instructions, not a filesystem watcher or an installed Git/CI hook. Tools that do not load agents.md and edits made outside the agent will not be automatically recorded. When resuming, inspect unrecorded changes and reconcile them without overwriting or taking credit for the user's work.

## Naming note
This file uses the user-requested agents.md. Many coding tools auto-discover uppercase AGENTS.md. On macOS do not create both case-only names: rename this file to AGENTS.md if automatic discovery is required, or explicitly load agents.md in the tool. It is project guidance, not an installed skill.

# V0.5 reference carousel, hover navigation and whole-site link audit

CHG-007 · 25 October 2026. Latest user feedback supersedes above-banner choices and permanently open dropdowns (D29/D30).

R29 / T31 / A25: follow supplied S1 pp.1–3 carousel pattern: image-led banner, side arrows, compact three-dot pagination inside lower edge, title overlay and bottom actions. No above-banner choice row, numbered strip, rotation-status text or autoplay. Full supplied image remains contained; controls stay within banner.

R30 / T32 / A26: MD&A-inspired category-to-service-to-scope discovery with JBAEL styling and source hierarchy. Desktop hover reveals categories and item breakdown automatically, without plus clicks. Contiguous pointer path and delayed dismissal; keyboard focus/click and touch alternatives. Group/item headings remain real destinations.

R31 / T33 / A27: audit every generated route, internal link, asset, fragment, query-to-category mapping, contextual enquiry and downloads. Fix known fragment-only service selection, search hiding explicit destinations, Equipment Back to top, per-part targeting, stale deferred scroll, modified-click handling and any discovered routing defect. Verify HTTP routes and redirect behaviour locally. Log unresolved external/business destinations without fabricating them.

Evidence: inspect supplied rendered pages and MD&A current navigation structure; run compile/build/unit and semantic whole-site checks. Browser-control tools unavailable at start; mark actual visual/hover/mobile/scroll acceptance NOT RUN unless access becomes available. No deployment, database or live forms.

## Completion
T31–T33 implementation and command/HTTP audit complete for review. See navigation-audit.md and acceptance.md.20 tests,23-page build,5495 local references and64 HTTP checks pass. Browser hover, responsive visual, keyboard/touch and actual scroll geometry remain NOT RUN. V0.5 preview is http://127.0.0.1:4322/.

V0.5.1 follow-up (CHG-008): R32/T34/A28 supersedes contain framing with centred cover fill, avoiding side gaps and animation underscaling. Source banner control pattern remains.

# V0.6 separate catalogue pages

CHG-009 ·26 October2026. User replaces the shared-panel service/equipment browsers with normal page navigation.

R33/T35/A29: /services/ and /equipment/ list all offerings. Three category pages per catalogue, each service/component group page, and each supplied scope/part child page. Retain13 existing service paths; add readable child URLs. All links use normal same-tab navigation with breadcrumbs and parent/sibling links.
R34/T36/A30: navy menu categories and homepage offering cards are actual anchors. Hover/focus still previews children; separate disclosure controls support touch. Internal links use canonical pages, not filtered query/hash state. Old preview query/fragment links resolve through a whitelist compatibility map, without open redirects.
R35/T37/A31: every category, service, equipment group and leaf has a relevant supplied background image, readable title and text. Reuse representative photos when exact photos are absent; no fake technical claims or synthetic images. Inspect supplied image sheets and record every new asset source.

A source scope item is a leaf, not a licence to invent missing subcomponents/specifications. Expected static routes:10 existing general/index pages +6 categories +13 services +100 scopes +12 equipment groups +47 parts =188. Lists only contain source-defined entries. Shared templates/data preserve consistency; no database/API. Company detail approvals remain pending for launch.

Verification: route uniqueness/tree structure/content coverage, generated links/assets/ARIA, legacy URL mapping, build/typecheck and HTTP crawl. Browser visual/hover/keyboard/mobile checks remain NOT RUN unless a browser tool becomes available.

## Implemented checkpoint
T35–T37 complete for code/static review. Catalogue templates,178 tree nodes,24 new image derivatives, canonical navigation and compatibility bridge implemented. Final188-page build,36-file check0 diagnostics,26 tests,47996 local references,855 semantic checks and376 HTTP checks pass. See acceptance.md and navigation-audit.md. Browser visual/interaction acceptance remains NOT RUN. No factual source expansion or live integration.

## V0.6.1 refinement — CHG-010
R36/T38/A32 supersede sidebar/related navigation and per-category/item search above. Search is index-only for both catalogues. Nested pages contain only their own source context/children and enquiries, with breadcrumb return navigation.36-file check0 diagnostics,188-page build,45287 local references and376 HTTP checks pass; actual browser visual acceptance remains NOT RUN.

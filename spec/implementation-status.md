# V0.6.1 separate service and equipment pages

CHG-010 ·26 October2026 · Local source review; no Git repository or deployment created. Earlier archives and acceptance evidence are preserved.

## Implemented routes

| Route | Pages | Content |
| --- | ---: | --- |
| `/services/`, `/equipment/` |2| Complete grouped lists with category links and local search |
| `/services/{thermal,hydro,specialist}/` |3| Category overview and linked service cards |
| Existing `/services/{service-slug}/` |13| Individual service and linked source scopes |
| `/services/{service-slug}/{scope-slug}/` |100| Source scope, parent context, enquiry |
| `/equipment/{thermal,hydro,other}/` |3| Equipment categories and component groups |
| `/equipment/{category}/{group}/` |12| Individual component group and linked parts |
| `/equipment/{category}/{group}/{part}/` |47| Individual part, parent context, enquiry |
| `/`, `/about/`, `/certifications/`, `/careers/`, `/contact/`, `/request-a-quote/`, `/privacy/`, `/404.html` |8| Existing source homepage, company, certificate and disconnected enquiry pages |

188 generated HTML pages. All catalogue pages/cards use a mapped supplied photo and readable text. Shared templates implement the same hierarchy for services and equipment. Homepage capabilities and equipment categories are real links. Navy menu category labels navigate; hover/focus/touch controls preview source breakdowns. Old preview query/hash links are mapped by a compatibility script; new navigation works with plain anchors.

## Coverage and remaining work
R33–R36 implementation is complete for static review. The original13 service/100 scope and12 equipment/47 part entries remain intact. Leaf content is limited to supplied facts and parent context; no specifications or unsupported capabilities invented. Representative images are reused when exact component photography is absent.

R03–R12 source branding/home/About/leadership/services/equipment/certificate presentation remain available; company content, contact details, asset rights and issuer verification need approval. R13–R16 are disconnected form interfaces and metadata checks only;2GB uploads remain future implementation. R17 project stories/resources and R18 global search remain deferred. Only LinkedIn has a sourced social destination; four other icons remain pending. No competitor-superiority, WCAG compliance or performance claim.

## Verification
36-file typecheck0 diagnostics;188-page build;45287 local link/asset references;562 distinct destinations;855 tree/context checks;376 HTTP checks plus branded404. Full route inventory: [navigation-audit.md](navigation-audit.md). Preview http://127.0.0.1:4322/.

Browser visual/hover/scroll/keyboard/touch and client redirect execution remain NOT RUN because no authorised browser-control tool is available. Static/HTTP checks do not prove these behaviours. Original production-site redirects, real email/upload/CAPTCHA and deployment remain separate release tasks.

Source/spec hashes: checkpoint.json. JBAEL-v0.6.1-source.zip includes code/public/config/specs; excludes original requirements, dependencies, build output and review intermediates. Previous source archives remain intact.

V0.6.1: search only on the two catalogue indexes; nested pages have no sidebar, sibling/related cards or duplicate parent-list actions. Breadcrumbs and own child cards remain. All178 nested pages were inspected in generated HTML for A32. Existing26 unit-test results belong to V0.6, not rerun for this presentation-only removal.

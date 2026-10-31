# Image feedback and welcome redesign plan

CHG-023 supersession (1 November 2026): user explicitly restores original brand/nav/catalogue presentation while retaining all supplied images and Welcome. Enlarged logos/underlines, contained catalogue heroes and tall industry cards below are historical design choices. Current Home cards share compact 370px dimensions and a readable hover/focus image reveal; normal catalogue images return to their original cover backgrounds. Turbine source-resolution limit remains. See Design.md and A53–A54 in acceptance.md.

Prepared: 31 October 2026 (Asia/Kolkata). CHG-021 planning baseline: `5d2a450`, V0.6.1. **Implemented and verified for local review on 1 November 2026 in CHG-022.** The original plan below is retained; current results are in acceptance.md.

This plan covers the user's six latest requests and refines FB01–FB04, FB07, FB13, FB16 and FB18 in [the company review plan](company-review-2026-10-28-plan.md). The supplied welcome reference supersedes the earlier suggestion to retain a side-by-side introduction/Why panel. Other workbook work remains separate backlog.

## Welcome composition

Replace the homepage's two-column `.welcome-grid`/boxed `.why-panel` composition with one centred, full-width section in this order:

1. Welcome to JB Advanced Engineering heading.
2. Existing introduction paragraph.
3. Existing coverage paragraph.
4. Why JBAEL? heading.
5. Existing two Why JBAEL paragraphs.
6. Compact About JBAEL and What We Do links beneath the copy.

Match the reference's composition: unified background, centred headings and paragraphs, subtle oversized geometric shapes, generous but controlled spacing. Retain the site's navy/orange identity; bright blue/black screenshot colours are not mandatory. Keep all copy as selectable HTML with its existing factual content. The small tagline can be omitted here because it remains in branding.

Use the exact supplied thermal plant background listed below, with a strong light veil and very faint blue/orange geometric accents. Start around 85–90% white over the photo, then tune from rendering/contrast checks. Decorative shapes are noninteractive and hidden from assistive technology. This is a static section, without new slides or arrow controls; the existing three-banner hero above it stays as is.

Target body copy around 18–20px on desktop with relaxed line height and paragraph width approximately 1000–1100px maximum. Headings wrap naturally. On mobile retain the same order, reduce padding and adapt the background crop, without fixed heights. Check 200% text enlargement for clipping. Scope homepage styles independently from About, which also currently uses `.welcome-grid`.

## Exact image-to-section map

Paths are relative to `requirement/images-feedback-311026/`. All nine files were visually inspected on a contact sheet; dimensions were read from originals.

| Original file | Dimensions | Intended placement | Treatment / scope |
| --- | --- | --- | --- |
| `Welcome to JB Advanced Engineering-Background Image/Thermal Power Plant Image for Background Visual.webp` | 1279 × 851 | Home welcome and Why JBAEL combined background | Light wash and subtle geometric accents; separate from thermal industry image |
| `Logo/Logo-For Botttom side.jpg` | 8918 × 8640 | Shared header and footer | Complete supplied emblem with ADVANCED ENGINEERING LTD lettering; readable external wordmark where needed |
| `Industrie we Serve/Thermal Power Plant.png` | 1299 × 864 | Thermal industry card | Background with local navy text scrim; preserve Explore services → `/services/thermal/` |
| `Industrie we Serve/Hydro Power Plant.png` | 1292 × 864 | Hydro industry card | Same card pattern; preserve Explore services → `/services/hydro/` |
| `Industrie we Serve/Gas Power Plant.png` | 1025 × 864 | Gas industry card | Same card pattern; preserve Contact Us and Gas turbine support context |
| `Industrie we Serve/Nucler power Plant.png` | 1611 × 864 | Nuclear industry card | Same card pattern; preserve Contact Us and Nuclear support context; use correct public spelling |
| `Core Engineering Services/Critical part devlopment.png` | 1792 × 2400 | Critical Component Development card and service page | Explicit shared override for `/services/reverse-engineering/critical-component-development/`; retain existing Reverse Engineering photo |
| `Services/Thermal Power Plant services/Turbine Services.png` | 480 × 249 | Thermal Turbine Services card and service imagery | Shared `thermal/turbine` mapping; preserve specific scope/part images; restrain enlargement |
| `Who We are/for who we are section background Visual.png` | 988 × 882 | About → Who We Are | Subtle red engineer/industrial silhouette behind or beside readable content; not a leadership portrait |

These nine files cover every image currently in the folder. No separate replacement Reverse Engineering photo or horizontal header-logo file is present. Replacing Critical Component resolves the duplicate. The existing company wordmark can complement the new emblem for header legibility.

## Header and footer branding

Replace the emblem in the shared layout so all pages receive the new complete logo. Preserve proportions, colours and internal lettering. Create an optimised derivative rather than serve the 8918px original. Header/footer can use different display sizes from the same source.

The source JPG has a white background: use a deliberate light logo surface in the footer, without inversion or assuming transparency. Keep the full company name readable beside it where needed; internal lettering alone will be tiny at a 48px header size. Show the tagline once per brand treatment. Keep the existing small favicon outside this pass.

Re-measure header spacing after replacing the emblem/wordmark. Preserve the single-row desktop navigation, modest leftward spacing, sequential rightward dropdowns and mobile menu.

## Industries Served

Keep consistent cards: four columns on wide screens, two on tablet and one on narrow screens. Preserve full descriptions and existing actions. Use cover crops with individual focal positions so the dam, towers and plant structures remain recognisable.

Keep imagery clearer in each card's upper portion and put a sufficiently opaque navy gradient/surface under its text. Use comfortably sized white/near-white copy and visible orange-accent actions. Target at least 4.5:1 contrast for normal text and 3:1 for large text against the actual background. A text shadow alone is insufficient. Increase card height if existing copy needs space; do not shrink or hide text on mobile. Descriptions/actions remain readable without hover.

Use dedicated industry asset IDs rather than overwrite broadly reused `thermal-plant`/`hydro-plant` IDs. This avoids unintended boiler/equipment/catalogue replacements. The welcome and thermal industry photos remain separate assets.

## Shared catalogue and remaining images

Homepage capability cards obtain images from `catalog.servicePages`, not `coreCapabilities.image`. Add the Critical Component override to the shared catalogue builder, scoped to the exact parent/leaf identity, so homepage, index, parent child-list and canonical leaf agree. Editing only `company.ts` would leave the duplicate in place.

The Critical Component source is portrait: retain both machinery/component and inspection activity in the crop. Inspect card/detail sizes and use contain framing if needed rather than stretch or cut away the subject.

Replace the shared Thermal Turbine Services node image with the supplied rotor/blading photo. Preserve explicit images for unrelated scopes/parts; review leaves that inherit their parent's image. The 480 × 249 source cannot provide sharp full-screen imagery. Use a bounded detail-image treatment if needed and record the remaining quality limit. Do not fabricate machinery detail.

Add the red industrial silhouette to About Who We Are at low opacity or as a secondary illustration. Keep readable copy, approach content and links. Do not infer a leadership identity, company fact or service scope from a photo.

## Implementation sequence

| Step | Work | Expected files | Traceability |
| --- | --- | --- | --- |
| 1 | Optimised derivatives, descriptive IDs, source/dimension/focal metadata; preserve originals | `public/images/`, `src/data/assets.json`, `src/data/image-metadata.json` | R47,R52 / T59,T60 / A47,A52 |
| 2 | Centred welcome/Why, plant background, faint shapes and readable type | `src/pages/index.astro`, shared styles and `src/styles/responsive/{desktop,mobile}.css` | R46,R52 / T53,T60 / A45,A52 |
| 3 | Shared logo replacement, wordmark and spacing | `src/layouts/Layout.astro`, relevant brand/responsive styles | R46,R52 / T53,T60 / A45,A52 |
| 4 | Four industry photos, focal crops and legible text | `src/data/company.ts`, homepage image markup/metadata and section styles | R47,R52 / T53,T60 / A45,A52 |
| 5 | Shared Critical Component/Thermal Turbine mappings and About motif | `src/lib/catalog-tree.mjs`, `src/pages/about.astro`, relevant card/detail styles if needed | R46,R47,R52 / T53,T54,T60 / A45,A47,A52 |
| 6 | Render/reference comparison, relevant regressions/build/typecheck/links and evidence | Affected specs and review records | R46,R47,R52 / T58,T61 / A45,A47,A51,A52 |

T59 inventory/planning, T60 implementation, T61 verification and T54 shared image corrections are complete for local review (CHG-022). T53's image/layout subset is complete; its other workbook items remain backlog.

## Verification and completion

- All nine assets map to their named sections using optimised derivatives with accurate metadata/provenance; originals stay unchanged and outside deployment output.
- Welcome/Why matches the centred stacked composition with supplied plant background and faint shapes; readable live copy replaces the separate side box.
- Both brands use the new full emblem with readable naming, correct proportions, no duplicate tagline and usable header/menu clearance.
- Industry photographs remain recognisable; full descriptions/actions are readable without hover and retain destinations/context.
- Critical Component and Reverse Engineering use different images on shared catalogue surfaces. Thermal Turbine uses its intended image without broadly replacing unrelated thermal/part imagery.
- About uses the supplied red visual without obscuring text or inventing attribution.
- Render at 320,390,768,1000,1024,1280 and1440px plus 200% text enlargement; inspect actual contrast, crops, overflow, keyboard focus, mobile menu and existing carousel interactions. Planned targets are not claims of completed accessibility testing.
- After implementation run `npm run check`, `npm test`, `npm run build`, `npm run verify` and relevant navigation/asset checks. Add an image-mapping regression only where it protects shared catalogue behaviour. Separate browser evidence from fixtures/static checks.

CHG-022: all nine originals are mapped through 20 optimised WebP derivatives (1,627,454 bytes total). Typecheck, 55 tests, 188-page build, 49,989 link/asset references and 855 navigation semantic checks pass. Actual Chrome responsive geometry covers Home plus eleven templates at seven widths, six pages at 200% browser zoom, both desktop cascades and short/landscape compact menus. Browser review found and fixed a menu-height error when the utility strip is visible. Contrast, interaction results and screenshots are recorded under `.review/image-feedback-final/`; acceptance.md distinguishes browser checks from fixtures and physical-device limits. Form/email/upload integration, brochure/certificate gating, career/contact edits and other workbook work remain outside this image/layout pass.

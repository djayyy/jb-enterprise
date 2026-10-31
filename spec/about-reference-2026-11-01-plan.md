# Company-name underline and About reference layout plan

1 November 2026 · CHG-025 · Planning only. Application remains V0.6.1 / CHG-024; no website code or public images changed.

## Goal and reference

Add the thin orange rule beneath ENGINEERING LIMITED, above the tagline, as shown in the user's screenshot. Recompose the existing /about/ page around the supplied layout PDF's pages 10–12: Who We Are, What We Do and Leadership Message, with matching background subjects and section structure.

S1: requirement/D01. Docs - JBAEL Modification/Website Layout Design/Website Design layout-JBAEL-04092026-C - JBED202609016.pdf, 47 pages, SHA-256 a0259c5a1e60da268f8d029c56f2b4a909f3e870636aca9ae4e40196d8ef4d17. PDF pages 10–12 were freshly rendered and visually inspected, with full text and placed-image metadata read. Evidence: .review/about-plan/{page-10,page-11,page-12}.png and corresponding text/source.json. Embedded background/action assets were also inspected on backgrounds-contact.jpg; nothing copied into public output.

## 1. Company-name rule

Use one thin orange line directly beneath ENGINEERING LIMITED, spanning the text wordmark rather than the emblem or the entire header. Keep the tagline below the line. Apply consistently through the shared header/footer Brand component.

Preserve current emblem dimensions, company-name typography/colours/alignment, tagline wording, header/footer height and navigation positions. Use a 1–2px decorative pseudo-element or background rule in the existing name-to-tagline gap; avoid added padding or line-height that would enlarge the header again. No extra border along the whole header is requested.

## 2. About composition: one page, three sections

Use the PDF's three screens as consecutive sections in /about/, with one shared site header/footer. Replace the current large control-room opening banner and split introduction/sidebar with the page-10 opening composition. A single About Us h1 introduces the page; Who We Are, What We Do and Leadership Message use a consistent semantic heading hierarchy. Retain current business copy from src/data/company.ts and existing destinations.

### Who We Are — PDF page 10

- Centred About Us title, followed by the left-aligned WHO WE ARE heading and Engineering Reliability for Critical Power Assets subtitle.
- Full-width introduction paragraph, over a large, softly visible red industrial-head silhouette on a light background. Reuse the already supplied/optimised about-engineer visual, matching the source page's subject; centre it rather than confine it to the current left column.
- Move Our approach combines into a wide bordered panel below the introduction. Group the seven existing points as three desktop columns (2 / 2 / 3) matching the reference, rather than the current sidebar.
- Place the objective sentence below the panel as centred emphasis. Preserve the company brochure action as a compact secondary link.
- Use the site's existing blue/navy and orange palette with readable live HTML. Adjust faint vertical light bands and background opacity to match the reference's visual character without obscuring the copy.

### What We Do — PDF page 11

- Centred WHAT WE DO heading; two balanced text columns instead of the current six boxed tiles.
- Left column: Integrated Power Plant Engineering Solutions subtitle/introduction, then Inspection/Diagnostics/Technical Supervision, Repair/Refurbishment/Asset Restoration, and Erection/Testing/Commissioning.
- Right column: Reverse Engineering/Product Development, OEM Spares/Lifecycle Support, and Skilled Field Services.
- Retain all six supplied descriptions; this is presentation ordering, not a change to services or claims.
- Use the supplied grey engineering-head collage as a faint central watermark, with subtle vertical white/light bands similar to page 11. Use a single clean background composition rather than repeating the PDF's overlapping image placements.
- Add the reference-style circular Services and Spare Parts image links at the lower right, targeting /services/ and /equipment/. Keep these photographs and labels clear at rest, consistent with R54; do not reintroduce hover reveals or zoom. Correct the reference's Spares Parts typo to Spare Parts.

### Leadership Message — PDF page 12

- Use the source's pale factory/workshop/world-map background across the section. The image is already washed out, so tune any additional overlay after rendering.
- Desktop left: three Vision, Mission and Goal circular panels, with Vision/Mission on the top row and Goal centred below. Use warm gold/orange fills/borders and accessible, high-contrast text/icons, retaining all three existing statements.
- Desktop right: a light, thin-bordered Leadership Message panel with orange heading, the existing introduction and all five commitments.
- Correct the reference heading Leadership Massage to Leadership Message. Keep this unattributed; the decorative background does not identify a company leader and no portrait/name is invented.
- Keep the existing certifications/contact closing links after the three primary sections, without introducing another large opening banner.

## Background and action-image map

These are source candidates inspected during planning. New derivatives/provenance are implementation work, not completed public assets.

| Placement | Source | Dimensions | Intended treatment |
| --- | --- | --- | --- |
| Who We Are | Existing about-engineer.webp, from S8's supplied Who We Are image; S1 page 10 xref 2965 is the matching red subject | Existing derivative 988×882; PDF original 1024×1024 | Large centred faint watermark/light wash |
| What We Do | S1 page 11 xref 3011, grey industrial-head collage | 1024×1024 | Single low-opacity background, with subtle light bands |
| Leadership | S1 page 12 xref 5778 | 1536×1024 | Pale full-section industrial/world-map background |
| Services circular action | S1 page 11 xref 3054 | 480×360 | Bounded circular crop with clear live label |
| Spare Parts circular action | S1 page 11 xref 3038 | 400×309 | Bounded circular crop with clear live label |

Use CSS borders for the circular links rather than another bitmap frame. Optimise new images to WebP with responsive sizes and metadata. Preserve all originals, supplied imagery elsewhere and the always-clear homepage/catalogue cards.

## Responsive and accessibility behaviour

- Desktop: preserve the wide approach panel, two What We Do columns and left-values/right-message composition.
- Tablet: reduce columns as needed; keep readable body text and balanced spacing.
- Phone: stack Who We Are copy/approach/objective, then all six capability groups, then the circular actions and values/message. Keep full copy visible, without fixed screen heights or truncated paragraphs.
- Keep circles on normal layouts where text fits; allow rounded panels or natural height growth under narrow/enlarged text rather than force text into clipped circles.
- Use real headings, selectable text, list semantics, decorative alt-empty backgrounds, visible focus and at least 44px action targets. Use dark text on the warm value panels if needed to meet contrast rather than reproduce the PDF's low-contrast white-on-gold body.
- Keep /about/#what-we-do and /about/#leadership working; add #who-we-are while retaining the existing who-title heading target. Verify sticky-header anchor offsets.
- No carousel, repeated page headers, extra About dropdown, factual claims or new navigation destinations are required.

## Implementation and verification

R55 = shared company-name rule; R56 = reference-aligned About composition. T65 planning; T66 implementation; T67 verification. A56 = rule/unchanged brand/header/nav metrics; A57 = section composition/assets/copy/anchors/responsive accessibility.

Expected code areas: Brand.astro/shared brand styles; about.astro; About-scoped CSS with device rules in responsive/desktop.css and mobile.css; assets.json/image-metadata.json/public/images for new PDF-derived images. Business data, homepage Welcome/card styles, menu/carousel behaviour, forms and hosting retain their contracts.

Before closing implementation:

1. Compare all three sections side by side with the freshly rendered PDF pages 10–12, checking the subject/placement of each background and all source statements.
2. Check brand/header/nav rectangles before/after the underline so line placement does not enlarge or shift the header.
3. Render at 320/390/768/1024/1280/1440px and 200% browser zoom; inspect full copy, backgrounds, value panels and action labels for contrast, clipping and overflow.
4. Verify the six capabilities, seven approach points, three values, five leadership commitments, brochure/services/equipment/certifications/contact links and retained anchors.
5. Run relevant typecheck/build/tests/link/navigation checks, update affected specs, and record actual evidence and limits.

Planning complete; T66–T67 and A56–A57 remain pending. Website implementation and production deployment are unchanged.

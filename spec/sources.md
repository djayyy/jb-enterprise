# Sources and provenance

CHG-022 implementation supplement (1 November 2026): S8's nine originals are used through 20 WebP derivatives in public/images/ (1,627,454 bytes total). assets.json records provenance; image-metadata.json records derivative dimensions. No original input edited. Critical Component and Thermal Turbine mappings verified in shared catalogue regression and rendered Chrome pages; remaining S8 placements verified on Home/About/shared brand. Source image dimensions and quality limits remain as inventoried below.

Baseline compiled from documents and code inspected in this conversation on 2026-10-24, and the subsequent agreed planning direction. Originals are now preserved under requirement/ at the Jb-Service project root. Paths below are relative to that root.

| ID | Source | Use |
| --- | --- | --- |
| S1 | requirement/D01. Docs - JBAEL Modification/Website Layout Design/Website Design layout-JBAEL-04092026-C - JBED202609016.pdf (47 pages) | Screen/section intent |
| S2 | requirement/D01. Docs - JBAEL Modification/Raw Data/JBAEL Website Raw Data - JBED202610057.pdf (15 pages; R00, 06.10.2026) | Primary content draft |
| S3 | requirement/JBAEL-Brochure-JBED23526003-R07-10MB.pdf (32 pages) | Capabilities and project evidence |
| S4 | requirement/picxele-jb-enterprise-main/ and requirement/D01. Docs - JBAEL Modification/Images For Website/ | Legacy code and images |
| S5 | https://www.mdaturbines.com/ and /careers/ | Competitor content/navigation benchmark |
| S6 | https://ppsvcs.com/ | Competitor content/navigation benchmark |
| S7 | requirement/JBAEL- Website- Review-28.10.2026-1.xlsx | Company feedback; prior inspection record in company-review-2026-10-28-plan.md |
| S8 | requirement/images-feedback-311026/ and user's current/desired welcome screenshots supplied 31 October 2026 | Nine exact replacement images and centred welcome composition; inspected in CHG-021 |

S4 photo inventory from prior inspection: Generator 47, Turbine 23, Electrical 21, Testings 18, C&I 9, Rewamping 5, 3D Scaning 4; total 127. Recheck actual files when restored.
S1 page references: home 1-9; about 10-12; services 13-26; equipment/specialisms 27-40; certificates 41-43; careers 44; contact 45; quote 46; image caveat 47.
Known conflicts: Mumbai addresses and office labels differ between S2 and S3; phone numbers differ; S1 contains XX MW and spelling/copy errors. Certificate images were visible in S1; authenticity/current validity was not independently verified.

## CHG-021 image-feedback inventory — 31 October 2026

All nine S8 image files were enumerated, dimensions read and a contact sheet visually inspected. Exact paths/dimensions/placements are in [image-feedback-2026-10-31-plan.md](image-feedback-2026-10-31-plan.md). The logo includes internal ADVANCED ENGINEERING LTD lettering and a white JPG background; Critical Component is portrait; supplied Thermal Turbine is only480×249. The About image is a red engineer/industrial silhouette, not evidence of a named person. Originals remain unchanged; no public derivatives or rendered website changes were created in planning. Images are company-supplied visual references, not independently verified facility/ownership claims.

The existing untracked CHG-020 plan's workbook inspection history is retained and registered; this turn does not claim to repeat all22 workbook rows/24 embedded-image inspections. Local S8 images resolve its listed visual-source gaps only; revised brochure, portfolios/client names and live delivery still need their separate inputs.

## Technical references reviewed during planning
- https://docs.astro.build/en/guides/deploy/vercel/ : static deployment and previews.
- https://vercel.com/docs/functions/limitations : request body limit (4.5 MB at review); recheck before implementation.

Competitor comparison covers published content/navigation only. Browser visual inspection failed during the planning turn; no comparative speed/accessibility audit was completed. Do not describe the proposed site as proven superior.

## CHG-002 asset and content provenance
S2 was extracted locally and used for service scopes, equipment lists and provisional contact details; service/equipment data contains source page references. These are editorial summaries, not independent verification of company capability.
Logo: S1 page 1 embedded image xref 66, with its original alpha mask xref 2531 restored. Seven supplied S4 photographs were copied/resized to WebP; original relative filenames are in src/data/assets.json. Sources remain unchanged in requirement/. Their presence in supplied material does not establish ownership or that every image depicts a JBAEL facility; final R21 approval remains open.
Company brochure: S3 copied intact to public/downloads/jbael-brochure.pdf (32 pages). Do not treat brochure history/addresses as reconciled current business data.
Fonts: Google Fonts DM Sans and Manrope, retrieved from fonts.googleapis.com/fonts.gstatic.com and self-hosted; SIL Open Font License copies from the official google/fonts repository are in public/fonts/.
No competitor text or images were copied. No new comparative performance claim was made. Certificate images have not been published as verified certificates.

## CHG-003 source review and new assets
Re-read S1 pp.1–14,20,24–26,41–43 and S2 for the correction. company.ts records S1/S2 references for welcome, Why JBAEL, industries, ten capabilities, six What We Do areas, Vision/Mission/Goal, leadership and ISO descriptions. Source scope summaries in services.ts remain attributed to S2; editorial UI labels do not assert new company facts. No external business content added.

S1 embedded images copied/optimised to public/images: three hero backgrounds (pp.1–3; xrefs 2538/2581/99), four industry images (p.5; 2700/2703/2706/2709), three certificate originals (pp.41–43; 3950/3982/4014). Exact mapping is in src/data/assets.json. Certificates retain their supplied printed content, dates and addresses; no certificate was fabricated or edited to resolve factual conflicts. WebP conversion changes encoding, not document content. Company approval/image rights/issuer verification remain pending.

S1 has no embedded social hyperlink destinations. S4 contains https://www.linkedin.com/company/jbenterpriseindia/; other legacy social entries are placeholder/commented links. Thus four destination URLs remain unresolved. No competitor text/images were copied and no new competitive speed/accessibility claim is made.

## CHG-004 reference review
MD&A https://www.mdaturbines.com/services/ read and visually inspected on25 October2026: category-first service groupings and dedicated category actions inform navigation, not JBAEL claims. No competitor content or images copied. The attached screenshot (Screenshot2026-10-25 at3.13.52PM.png) text extraction confirms adjacent numbered slide and equipment rows; direct image transfer failed, so exact screenshot pixels were not inspected. Existing local preview was visually inspected instead.
No new public images: existing S1 hero and thermal/hydro images, S4 workshop.webp reused. Services/equipment factual lists unchanged; only interface copy/group descriptions added.

## CHG-005/006 feedback sources
User feedback and screenshot text extraction (3:50:37 PM, 3:50:57 PM, 3:51:11 PM and 4:11:47 PM on25 October2026) inform presentation/navigation changes. The latest screenshot extraction identifies the three theme labels and arrow controls; exact pixels were not independently inspected. MD&A hierarchy was reviewed previously in CHG-004; no new competitor content or assets were imported. Business lists and supplied photographs remain unchanged.

## CHG-007 source/layout review
Visually re-inspected supplied S1 pages1,2,3 via existing rendered page PNGs. They show lower in-banner three-dot pagination, side arrows on the later examples, overlaid source headings and lower Explore Services/Contact Us actions. All three actual supplied hero images are retained.

Read https://www.mdaturbines.com/ on25 October2026: current navigation lists service/parts families and nested detailed scopes. This turn verified structure from retrieved page content, not live hover behaviour. User explicitly requests hover discovery; JBAEL uses its own styling and supplied Thermal/Hydro/Specialist/Auxiliary hierarchy. No competitor assets/business copy imported.

Official Astro configuration reference https://docs.astro.build/en/reference/configuration-reference/#trailingslash and installed preview implementation confirm strict slash matching versus ignore; static host redirect policy is separate. No new business data/assets.

## CHG-008 asset metadata
Read the existing supplied hero WebP dimensions: turbine1725×912; OEM1536×1024; modernisation1536×1024. Corrected HTML width/height attributes to match; no image files were edited or replaced.

## CHG-009 supplied imagery and hierarchy
Latest user request and screenshot text extractions (26 October2026,12:24:31AM and12:29:30AM) identify non-clickable coloured category labels and the grouped scope layout. Exact screenshot pixels were not directly inspected. No new competitor content was retrieved or copied.

Visually inspected contact sheets of all supplied Electrical(21), C&I(9), Testings(18),3D Scaning(4), Rewamping(5), Turbine(23) and Generator(47) images.24 selected images were copied to public/images/catalog-*.webp, maximum1400×1000 with preserved aspect ratio. Exact original filenames are recorded in src/data/assets.json. New dimension metadata covers all public WebPs. Boiler/pressure photos and other missing exact subject images use representative source imagery; no claim that each image depicts the exact named part or a JBAEL-owned facility.

Service/equipment source arrays and original requirement inputs are unchanged. Leaf titles are source entries; short descriptions derive only their parent/category relationship. Additional prose asks visitors for equipment/reference/site/quantity details without inventing capabilities, specifications or service guarantees. Asset rights and company technical approval remain open.

## CHG-014 navigation feedback
User feedback on26 October2026 and screenshots titled8:52:27PM,9:01:48PM and9:02:17PM inform hierarchy clarity. Text was retrieved; image materialization failed, so exact pixels/colours were not inspected. The user approved the subsequent textual/flow-diagram plan. Implementation uses original JBAEL styling and unchanged catalogue business data/images; no competitor image, copy or technical claim imported.

CHG-016: visually inspected user screenshot Screenshot2026-10-26 at11.14.56PM.png in the preceding turn. It shows a large centred white Services panel with only three category rows at the far left and empty remaining width/height. No competitor/source business content or asset changes; this is user UI feedback.

## CHG-025 About reference reinspection — 1 November 2026

S1 pages 10–12 freshly rendered and visually inspected; full text and placed-image metadata read. Source SHA-256 a0259c5a1e60da268f8d029c56f2b4a909f3e870636aca9ae4e40196d8ef4d17. Inspected embedded xrefs 2965 (red industrial head), 3011/3014/3025 (grey/blue variants), 3038 (400×309 spares image), 3041 (circular frame), 3054 (480×360 turbine/workshop image), 5778 (1536×1024 pale industrial/world-map background). Existing S8 red Who We Are image is also suitable. Read-only extraction/render evidence: .review/about-plan/. New public assets not created. Exact planned use and source references are in about-reference-2026-11-01-plan.md.

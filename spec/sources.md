# Sources and provenance

Baseline compiled from documents and code inspected in this conversation on 2026-10-24, and the subsequent agreed planning direction. Originals are now preserved under requirement/ at the Jb-Service project root. Paths below are relative to that root.

| ID | Source | Use |
| --- | --- | --- |
| S1 | requirement/D01. Docs - JBAEL Modification/Website Layout Design/Website Design layout-JBAEL-04092026-C - JBED202609016.pdf (47 pages) | Screen/section intent |
| S2 | requirement/D01. Docs - JBAEL Modification/Raw Data/JBAEL Website Raw Data - JBED202610057.pdf (15 pages; R00, 06.10.2026) | Primary content draft |
| S3 | requirement/JBAEL-Brochure-JBED23526003-R07-10MB.pdf (32 pages) | Capabilities and project evidence |
| S4 | requirement/picxele-jb-enterprise-main/ and requirement/D01. Docs - JBAEL Modification/Images For Website/ | Legacy code and images |
| S5 | https://www.mdaturbines.com/ and /careers/ | Competitor content/navigation benchmark |
| S6 | https://ppsvcs.com/ | Competitor content/navigation benchmark |

S4 photo inventory from prior inspection: Generator 47, Turbine 23, Electrical 21, Testings 18, C&I 9, Rewamping 5, 3D Scaning 4; total 127. Recheck actual files when restored.
S1 page references: home 1-9; about 10-12; services 13-26; equipment/specialisms 27-40; certificates 41-43; careers 44; contact 45; quote 46; image caveat 47.
Known conflicts: Mumbai addresses and office labels differ between S2 and S3; phone numbers differ; S1 contains XX MW and spelling/copy errors. Certificate images were visible in S1; authenticity/current validity was not independently verified.

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

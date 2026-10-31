# Company review fix plan — 28 October 2026

Current implementation supplement — CHG-022, 1 November 2026: the approved nine-image/welcome refinement is implemented and browser-reviewed for local desktop/mobile viewports. FB01–FB04, FB07, FB13, FB16 and FB18 have their named image/layout work completed; consult the image-feedback plan and acceptance.md for exact coverage. This does not close wider CTA/top-control, resource gating/mail, contact/career or missing-document/client work. Original inventory/planning history follows.

Prepared: 31 October 2026. CHG-020, planning only. Application baseline: commit `5d2a450`, V0.6.1. No website implementation changed in this planning task.

31 October follow-up (CHG-021): the user supplied nine local replacement images and a more specific welcome reference. [The image-feedback plan](image-feedback-2026-10-31-plan.md) supersedes affected visual proposals/source gaps here: welcome/Why becomes a single centred stacked section; supplied logo, industry photos, Critical Component photo, About silhouette and thermal turbine image are now available and inspected. Their use is planned, not implemented. Revised brochure, portfolio/client inputs and live delivery dependencies remain unresolved. Original inspection history below is retained.

## Source and coverage

S7: `requirement/JBAEL- Website- Review-28.10.2026-1.xlsx`, worksheet `Website Review`, review date 28/10/2026, R00. SHA-256: `35e229d100c70195cb8c856977a15273a94a2b53f1ccdb09f9783db4e95bdcc0`.

All 22 populated feedback rows (5–22 and 27–30) and 24 embedded images were inspected. Excel stores pictures as rich values: cached #VALUE! cell strings are image placeholders. Original serial numbers skip 11 and 12, restart in Add, and omit a number for the reverse-engineering portfolio. FB01–FB22 below identify entries by worksheet row. Column H contains no replacement copy. Original workbook remains unchanged and excluded from deployment.

E11 links to a component image and G15 to a revised brochure on SharePoint. Both targets were inaccessible through the web reader; their full-size contents remain uninspected. G11's embedded image was inspected. Rows27–29 and E30 contain empty Open destinations, not the portfolio files/client list.

## Feedback map

P1 = first functional/visual pass; P2 = shared resource workflow; P3 = content-dependent additions. READY means specified enough to implement, not already completed. SOURCE means obtain/select an appropriate supplied original. Existing source matches still need browser verification.

| ID | Row / original Sr | Company feedback and references | Current implementation | Planned fix | Priority / dependency | Traceability |
| --- | --- | --- | --- | --- | --- | --- |
| FB01 | 5 / 1 | Welcome creative treatment/plant background. F5/G5 | White two-column welcome/Why panel | Recompose introduction with subtle plant background, reference-style heading/Why treatment and readable live text. Keep supplied copy; Creative shape or Massage is not approved replacement text. | P1 / READY; image selection | R46/T53/A45 |
| FB02 | 6 / 2 | Orange underline below Engineering Limited and text colour. F6/G6 | Emblem plus separately rendered name/tagline | Restore requested underline and identity colours; prefer original supplied logo lockup. Preserve header/menu clearance. D6's explicit orange takes precedence over uncertain screenshot colours. | P1 / SOURCE | R46/T53/A45 |
| FB03 | 7 / 3 | Increase welcome text size | Shared welcome styles used on Home/About | Increase intended welcome body size/spacing with bounded reading width. Proposed starting size18px, adjusted after rendering; check mobile/enlarged text. | P1 / READY | R46/T53/A45 |
| FB04 | 8 / 4 | Clearer industry images and text. F8 | Four dark image-overlay cards | Use better original resolution/crops; rebalance overlay/text contrast, keeping live text. Check all four cards at actual sizes. | P1 / SOURCE | R47/T53/A45 |
| FB05 | 9 / 5 | Thermal/Hydro Explore Services is OK. F9:F10 | Already Explore services with category links | Preserve accepted behaviour and verify. No new feature required. | P1 / existing source match | R47/T52/A46 |
| FB06 | 10 / 6 | Gas/Nuclear Contact us; trailing Charge? | Already Contact Us with contextual contact URLs | Preserve/verify labels and prefill. Charge? is ambiguous and does not establish pricing/payment. | P1 / existing source match | R47/T52/A46 |
| FB07 | 11 / 7 | Duplicate Reverse Engineering/Critical Component image; change Critical Component. F11/G11, E11 | Critical leaf inherits catalog-scanning from parent | Give Critical Component Development an explicit shared catalogue image mapping, preserving the reverse-engineering photo. Updating only company.ts image will not change the rendered homepage card. Match G11 using adequate-resolution original. | P1 / SOURCE | R47/T54/A47 |
| FB08 | 12 / 8 | ISO request to sales@jbepower.com; require name/contact/company/email. F12/G12 | Full public certificate images, enlarge dialog/direct downloads | Use standard summaries/badges like G12 and a shared selected-certificate request form. Require all four fields; notify Sales; deliver full certificate through gated workflow below. | P2 / live integration, certificate approval | R49/T55–T56/A48–A49 |
| FB09 | 13 / 9 | Careers phone mandatory. F13 | Phone optional for every form kind | Require career phone with matching label and future server validation; preserve contact/quote defaults. | P1 / READY | R48/T52/A46 |
| FB10 | 14 / 10 | Mumbai office → Administrative office; old Administrative office → Manufacturing facility. F14 | Three contact office blocks | Rename only those two headings. Preserve all addresses, phones and Central office label. | P1 / READY | R48/T52/A46 |
| FB11 | 15 / 13 | Replace brochure; four required contact fields. G15 | Old brochure public in About/footer | Inspect replacement PDF/revision; replace all brochure entry points with common request workflow. Do not label old file as revised brochure. Preserve original reference. | P2 / SOURCE + integration | R49/T55–T56/A48–A49 |
| FB12 | 16 / 14 | Banner creative shapes missing | Plain welcome/CTA treatment; carousel present | Restore supplied decorative shapes in welcome/banner/CTA where applicable; coordinate with FB01/FB14. Preserve three hero themes, arrows/dots, swipe/drag and mobile caption flow. | P1 / READY; S1 artwork selection | R46/T53/A45 |
| FB13 | 17 / 15 | Footer Logo With Text. F17/G17 | Emblem/external wordmark and repeated tagline | Use approved supplied footer logo treatment without duplicate name/tagline. G17 shows an emblem with small internal lettering; exact original lockup needs source selection. | P1 / SOURCE | R46/T53/A45 |
| FB14 | 18 / 16 | Replace Request Quote. F18/G18 | White homepage CTA from CTA.astro | Reference targets homepage CTA strip: blue panel, document icon, centred copy, orange outline corners. Retain clear /request-a-quote/ link. Scope variant so About Contact CTA is not renamed; no quote-form field redesign inferred. | P1 / READY | R46/T53/A45 |
| FB15 | 19 / 17 | Icon-only Back to top and shape. F19/G19 | Text footer anchor | Add outlined up-arrow/decorative shape, accessible name, focus and usable target. Verify actual top arrival/sticky header and reduced-motion scrolling. | P1 / READY | R46/T53/A45 |
| FB16 | 20 / 18 | Red graphic missing in Who we are. F20/G20 | Plain About copy/approach sidebar | Restore faint red industrial/tower-style motif from supplied design behind readable live content. Ambiguous Potre is not authority to invent a leadership portrait. | P1 / SOURCE | R46/T53/A45 |
| FB17 | 21 / 19 | What we do shapes/icons. F21/G21 | Six plain articles/rectangular actions | Restore supplied decorative background and graphic Services/Spare Parts links; retain all six source areas and adapt reference columns to mobile. | P1 / SOURCE | R46/T53/A45 |
| FB18 | 22 / 20 | Replace thermal service image. F22/G22 | Screenshot identifies Turbine Services; node uses catalog-turbine-assembly | Replace shared thermal/turbine node image with rotor/blading reference or matching original, propagating to cards/details. Do not replace every thermal industry/category image indiscriminately. | P1 / SOURCE | R47/T54/A47 |
| FB19 | 27 / Add1 | Executed Projects document; four fields | Projects/resources deferred; Open empty | Add resource backed by approved file, with revision/source and common request form. No invented project names/results/capacities. | P3 / company file + gate | R50/T57/A48,A50 |
| FB20 | 28 / Add2 | Spares Supply list; four fields | Public equipment catalogue exists, separate document absent | Add approved supplied-spares document and gate. Keep existing public equipment hierarchy; this file is a distinct deliverable. | P3 / company file + gate | R50/T57/A48,A50 |
| FB21 | 29 / no Sr | Reverse Engineering Project Portfolio; four fields | Service exists, portfolio absent; Open empty | Add approved portfolio resource/contextual service action using common gate. Do not present catalogue scope as executed projects. | P3 / company file + gate | R50/T57/A48,A50 |
| FB22 | 30 / 21 | Clients Name Scroll Bar | Client strip absent; Open empty | Add approved client-name strip, defaulting to text names. Provide pause control, hover/focus pause and static reduced-motion fallback; no invented clients/logos. | P3 / approved names | R51/T57/A50 |

## Implementation sequence

1. **T52: small functional corrections.** Career phone and office headings; verify already-matching industry actions. Small first reviewable change.
2. **T53–T54: visual pass.** Branding, welcome/text/industry clarity, About graphics/actions, quote strip and top icon, plus two catalogue-image mappings. Source selection accompanies ready layout work. Small workbook pictures are references, not final full-width images.
3. **T55: shared document-request UI.** One registry/form for three certificates, revised brochure and three portfolio/list files: seven intended resources. Update Home/certifications/About/footer/contextual links together. Proposed /resources/ directory provides discovery without crowding the main menu. Disconnected review grants no download or false send confirmation.
4. **T56: live resource delivery.** Add server validation, mail notification and private file delivery after hosting/provider/recipient configuration. Independent of the larger2GB enquiry-upload integration; credentials do not block the visual pass.
5. **T57: company content.** Populate revised brochure, three approved files, client names and final artwork. Keep unavailable public actions hidden and blocked items in backlog; never add fake files/claims.
6. **T58: review/closure.** Compare browser results with24 images; responsive/keyboard/motion and relevant form/catalogue regressions; build/typecheck/links; record FB evidence and affected spec/checkpoint updates.

## Proposed document workflow

Select resource → enter name, phone, company, email → server validation/abuse checks → Sales notification accepted by mail provider → short-lived download link. This is a proposed immediate-download default. Manual email fulfilment remains an alternative. Sales is explicitly supplied for certificates; common sales@jbepower.com routing for other files is a proposed default pending configuration. No mail is sent in planning.

A versioned registry owns opaque resource ID, public title/type/revision/source and private storage key. Browser submits only allowlisted ID and four required fields; never arbitrary URLs/recipients. Validate server-side, support international phones, use validated Reply-To and keep personal data out of URLs/routine logs. Mail failure retains fields and grants no file. Provider acceptance is not proof of inbox delivery.

Current full certificate images/enlarge dialog and public/downloads/jbael-brochure.pdf bypass any front-end form. At gate implementation, move originals outside public/dist and replace every direct link with the request flow. Public ISO artwork should be badges/summaries. Short-lived signed download authorisation can work without an application database. Previously published files cannot be recalled; collecting contact details does not verify identity or prevent file sharing. This is contact collection before new delivery, not DRM.

Choose/configure mail/private storage and expiry, privacy and retry behaviour in T56; do not claim a client-only dialog implements live delivery. Website pages may stay static with a separate server function/service for requests. Current static-only deployment instructions do not cover that future service. No account system, CRM or database is proposed. Existing2GB enquiry-upload requirement remains separate/in scope.

## Dependencies and interpretation

| Item | Available evidence / unresolved input | Needed for |
| --- | --- | --- |
| Revised brochure | G15 link exists; target file not inspected | FB11 final content |
| Component photo | G11 reference inspected; E11 linked original not retrieved | FB07 final image |
| Logos, motifs and turbine photo | Small G6/G17/G20/G21/G22 references; match supplied originals or obtain adequate-resolution files | FB02,FB13,FB16–FB18 |
| Three portfolio/list files | Rows27–29 have empty destinations | FB19–FB21 |
| Approved client names | E30 empty; no approved list supplied there | FB22 |
| Download operations | Immediate download after Sales notification proposed; manual fulfilment/other routing/expiry/provider unresolved | T56 |
| Ambiguous prose | D5 is not replacement headline; D10 Charge? not pricing authority; footer lockup selected from supplied identity | T53 |

None blocks the already-specified functional/visual fixes. No additional business claims, address edits, pricing or quote-form redesign is inferred.

## Acceptance and current status

- **A45:** reference direction reproduced on Home/About/header/footer with legible live text, correct decorations/icons and accessible controls. Render at320,390,768,1000,1024,1280,1440px, enlarged text and reduced motion. Check logo clearance/single-row header, rightward sequential menus and all carousel interactions after visual changes.
- **A46:** career empty phone rejected; contact/quote defaults retained; exact two office-title changes with addresses unchanged; all four industry actions/prefills correct.
- **A47:** distinct Reverse Engineering/Critical Component images and correct turbine replacement across shared surfaces; source entries/routes/breadcrumbs retained.
- **A48:** all seven intended resources use shared required four-field flow and correct resource identity, keyboard/error/focus behaviour; preview truthfully disconnected. No entry-point bypass once live gate enabled.
- **A49:** server rejects invalid/missing fields/unknown IDs; recipients server-controlled; mail failure grants no file; missing/expired/tampered authorisation denied; full originals absent from public build. Test actual Sales notification and correct-file delivery.
- **A50:** approved originals/revisions for three additions; approved client names only; ticker pause/focus/reduced-motion verified; missing files have no false public action.
- **A51:** every FB01–FB22 closed with evidence or explicit blocker; relevant existing checks and actual browser review recorded against implemented version. Source inspection is not browser proof.

T51 inventory/planning complete. T52–T58 unimplemented; A45–A51 NOT RUN. Existing application/checkpoint remain CHG-019 historical tested state. Planning does not commit, push, deploy or alter assets. Full traceability: requirements.md, tasks.md and acceptance.md.

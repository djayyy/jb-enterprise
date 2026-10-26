# Implementation tasks

CHG-003: source-aligned V0.2 review implemented; CHG-002 evidence below is historical. Checkmarks represent the stated task scope only; partial tasks retain explicit follow-up. See implementation-status.md and acceptance.md.

## V0.1 initial review
- [ ] T01 Inventory restored S1-S4 content under requirement/; verify source claims and identify final logo (R03-R21). Source relocation is complete; content verification remains open.
- [ ] T02 Create isolated new project and Git history; preserve legacy; configure Astro/TypeScript and shared layouts (R01-R02).
- [ ] T03 Build content models and route map; identify source gaps using O01-O11 (R03-R18). Depends T01.
- [x] T04 Implement header/footer/mobile navigation and visual tokens; build homepage plus thermal generator detail for review (R03-R06,R20-R21). Depends T02-T03.
- [ ] T05 Apply templates to all service and equipment groups; contextual enquiry links (R06-R11). Depends T04.
- [ ] T06 Implement About, certifications, projects/resources and honest Careers page (R05,R12,R16-R17). Depends T03-T04.
- [ ] T07 Build three form interfaces and all validation/error/upload states; disconnected preview clearly labelled (R13-R16). Depends T04.
- [ ] T08 Verify content coverage, routes and mobile layouts; record V0.1 evidence and review notes (A01-A06,A10-A11).

## V0.2 refinement
- [ ] T09 Incorporate review feedback; optimise supplied images and mobile interaction (R19-R21). Depends T08.
- [ ] T10 Add static search/filtering, resources and useful no-result states (R18). Depends T05-T06.
- [ ] T11 Review projects/claims/certificates; reconcile business details and required content (O01,O07-O11).

## V1.0 launch candidate
- [ ] T12 Verify deployment access and legacy quote integration; choose email/storage providers and recipients (O02-O06).
- [ ] T13 Implement server validation, CAPTCHA, throttling and email routing; test provider failures (R02,R13-R16). Depends T07,T12.
- [ ] T14 Implement private direct uploads, progress/retry, scanning/access/expiry/cleanup; verify size boundaries (R15-R16). Depends T12; policy O05-O06.
- [ ] T15 Integrate forms and contextual selections; validate test emails/replies and attachments (A07-A09). Depends T13-T14.
- [ ] T16 Add metadata, sitemap, legacy redirects, privacy content and security headers (R20). Depends T11-T15.
- [ ] T17 Run release checks; record browser/build/form evidence and known limits in acceptance.md. Depends T09-T16.
- [ ] T18 Prepare rollback and production cutover; verify website and existing email DNS; release separately from domain transfer. Depends T17 and resolved launch questions.

Update each task with commit/version, evidence and outstanding issues. Never mark tests passed solely because code exists. Database/CMS additions require an explicit scope change.

## Traceability on updates
For each task changed, cite its CHG ID from [change-log.md](change-log.md), related R/A IDs, implementation files and evidence. Follow [workflow.md](workflow.md). Reopen completed tasks when regressions or scope changes invalidate completion. Do not change task status for unrelated documentation edits.

## CHG-002 task evidence — 2026-10-24 UTC
- T01 PARTIAL: S1/S2 extracted; source logo and seven supplied photographs selected. Final claim/photo/contact/certificate approval open.
- T02 PARTIAL: Astro 7.4.2 static scaffold, TypeScript and shared layouts implemented; no Git history created because this directory has no repository. Legacy preserved.
- T03 PARTIAL: service/equipment models and 22 routes implemented. Future projects/resources/certificates remain unmodelled pending content review.
- T04 COMPLETE for first review: home, generator template, shared header/footer, responsive tokens and menu implemented. Build/check and representative Chrome checks pass; full accessibility/performance acceptance remains pending.
- T05 COMPLETE for grouped first-review catalogue and 13 detail pages, PARTIAL against future category pages/search. Contextual links verified.
- T06 PARTIAL: About, quality overview, brochure and honest Careers implemented. About expansion, projects and verified certificate downloads remain.
- T07 PARTIAL: all three disconnected form UIs, native field validation and attachment metadata checks implemented. Real upload/error/progress and delivery states await integration.
- T08 PARTIAL: build/typecheck/tests/links and 17 responsive observations pass. A05 automated scan and A06 Lighthouse not run.
- T10 PARTIAL: service filtering/search implemented early; catalogue/resource/global search remains.
- T09,T11-T18 remain open. No production email, storage, DNS or deployment changed.

Files: src/, public/, scripts/, package.json/lock, Astro/TypeScript configuration. Evidence: acceptance.md and implementation-status.md; tested file hashes in checkpoint.json.

## V0.2 source-alignment tasks — CHG-003
- [x] T19 Rebuild source-matched header/home/three-slide carousel and social strip (R03,R04,R22; A15).
- [x] T20 Restore complete About/What We Do/leadership and certificate image gallery (R05,R12,R22; A16).
- [x] T21 Image-led service family browser with stable in-page selection and deep links (R06-R09,R18,R20,R22; A17).
- [x] T22 Audit source-only content, responsive/browser interactions, build/links; synchronise checkpoint/specs (A01-A06,A10-A12,A15-A17).

CHG-003 evidence for T19–T22: source fidelity check, 23-page build, Astro check (24 files, zero diagnostics), 799 local references and seven tests pass. Chrome verified three slides, play/pause control, keyboard tabs, stable scroll (family y=161 before/after; keyboard service y=633 before/after), Hydro deep-link/prefill, search empty/clear, certificate Escape/focus and mobile menu. Responsive grid overflow at 320px was found and fixed. Current evidence/remaining limits: acceptance.md. T09 review-feedback portion and T06 About/certificate-presentation portion progressed; T10 broad search, T11 business verification and T12–T18 launch work remain open. T22 completion means the recorded review checks and spec synchronisation, not complete WCAG/Lighthouse or production acceptance.

## CHG-004 V0.3
- [x] T23 Improve hero image/control clarity and remove decorative numbering (R23; A18).
- [x] T24 Consistent service/equipment category browsers (R24; A19).
- [x] T25 Verify browser/build/source regression and synchronise specs.

CHG-004 T23–T25 complete for review:25-file typecheck,23-page build,804 local references, source/category verifier and7 tests pass; Chrome verifies rotation, named selectors, category tabs, equipment search/empty/reset/context and12 responsive observations. Full accessibility/performance and production work remain open. T10 equipment search portion now implemented; global/resource search still pending.

## CHG-005 V0.4
- [x] T26 Clean hero controls, enlarge imagery and remove redundant elements (R25; A20).
- [x] T27 Add hierarchical navigation with keyboard/touch behaviour (R26; A21).
- [x] T28 Repair link/state/anchor navigation and verify (R27; A22).

## CHG-006 V0.4.1
- [x] T29 Move theme choices before the hero artwork and adapt banner height (R28; A23).
- [x] T30 Remove premature dropdown dismissal; verify build/links and reconcile interrupted V0.4 specs (R26,R28; A21,A24).

T26–T30 implementation and command verification are complete for review. A20–A24 browser visual, keyboard/touch and pointer journeys remain NOT RUN; these task ticks do not assert browser or production acceptance. CHG-005 evidence is historical; CHG-006 reruns current command checks.

## CHG-007 V0.5
- [x] T31 Restore source in-banner carousel pattern (R29; A25).
- [x] T32 Cascading hover/focus service and equipment navigation (R30; A26).
- [x] T33 Whole-site routing/anchor/query audit and fixes (R27,R31; A27).

T31–T33 review implementation complete:20 tests,28-file check0 diagnostics,23-page build,5495 references and64 HTTP checks pass. Full per-page results: navigation-audit.md. Browser visual/hover/touch/keyboard/scroll acceptance A25–A27 remains NOT RUN; task ticks do not assert those checks or production readiness.

## CHG-008 V0.5.1
- [x] T34 Fill all hero frames without letterboxing, preserve in-banner controls and synchronise source image dimensions (R25,R29,R32; A28).

T34 implementation and command checks complete; actual visual framing acceptance A28 remains NOT RUN.

## CHG-009 V0.6
- [x] T35 Build separate source-driven catalogue trees/pages (R33; A29).
- [x] T36 Make menu/home links canonical and preserve old preview destinations (R34; A30).
- [x] T37 Add relevant supplied imagery and validate both catalogues (R35; A31).

T35–T37 implementation and command verification complete for review:188 pages,26 tests,36-file typecheck0 diagnostics,47996 local references and376 HTTP checks. Browser visual/hover/touch/keyboard/redirect execution remains NOT RUN; these ticks do not assert those checks or production readiness. See CHG-009 and navigation-audit.md.

## CHG-010 V0.6.1
- [x] T38 Simplify both catalogue detail templates, retain search only on indexes, remove redundant cross-navigation and verify (R36; A32).

## CHG-011 Repository cleanup
- [x] T39 Remove generated source archives, enforce ignores and document source/build/hosting boundaries (R37; A33).

## CHG-012 Responsive presentation
- [x] T40 Separate mobile/desktop layout rules and repair banner visibility/actions (R38; A34).
- [x] T41 Audit shared mobile templates/navigation/forms and record regression evidence/limits (R20,R38; A35).

T40–T41 code/static audit complete. A34/A35 command evidence passes; actual browser viewport/touch/keyboard acceptance remains NOT RUN. Full findings and remaining review matrix: mobile-audit.md.

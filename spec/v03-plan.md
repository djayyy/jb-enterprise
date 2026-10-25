# V0.3 clearer navigation and complete imagery

CHG-004 · 25 October 2026. Latest user feedback permits presentation refinements while retaining supplied JBAEL factual content. Supersedes V0.2 numbered selectors, cropped hero and unequal Specialist presentation.

- R23: no decorative numbering that implies steps; three named thumbnail selectors, full uncropped hero images, subtle transitions, explicit reliable auto-rotate state and controls.
- R24: consistent service/equipment category presentation; Thermal/Hydro/Specialist all have images and equal hierarchy. Equipment Thermal/Hydro/Auxiliary uses the same category-card component. Clearly separate choosing category from choosing service or parts.
- Homepage retains three source themes and following source sections. Remove decorative numbers throughout Home/About. Use source imagery only. No generated machinery animation or fabricated 3D content.
- Carousel manual default. Auto-rotate advances immediately on starting, then every six seconds; visible on/off state and stop control. Manual navigation stops it; focus entering from outside/hidden tab/motion-preference change stops it. No mouse-enter cancellation. Fade/slide disabled for reduced motion.
- Service directory retains in-page scope selection and deep links. Add Specialist workshop photo, clear group summaries and explicit Choose a service label. Same image-card pattern for Equipment, which filters to selected parts group and supports local search/empty state, deep links and quote context.
- MD&A /services/ reviewed for category-first information hierarchy only; no company facts/images copied. User screenshot extracted text confirms two adjacent numbered rows; image transfer failed, so exact screenshot pixels were not inspected.

T23 hero/numbering (R04,R20,R22,R23; A18). T24 category consistency and equipment browser (R06–R11,R18,R20,R22,R24; A19). T25 regression checks/spec checkpoint (A02,A04,A06,A10,A17–A19).

A18: full OEM image visible at desktop/mobile; three named selectors, no decorative numbers, keyboard selection, actual timed rotation and stop verified, reduced-motion styles present.
A19: three matching image cards on each directory; correct service/parts group displayed without page-top reset; search empty/recovery, deep links and contextual quote work; no category images missing; responsive checks at320/375/768/1280.

Build/typecheck/existing tests, source/output verifier and browser interactions required. Current affected V0.2 evidence historical until rerun. Email/database/deployment scope unchanged.

Completion: T23–T25 implemented as V0.3; current evidence and remaining verification limits recorded in acceptance.md. No business facts changed.

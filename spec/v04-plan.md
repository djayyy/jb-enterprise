# V0.4 presentation cleanup and navigation repair

CHG-005 · 25 October 2026. Latest user feedback supersedes V0.3 rotation controls, selected badges and repeated equipment shortcuts.

R25: remove visible rotation/start/stop/status UI, Selected badges and repeated Turbine/Generator/Boiler strip. Use a large image-led hero with finite gentle animation and manual named selectors/arrows; no automatic timer. Source imagery and three themes remain.
R26: Services and Equipment Supply expose grouped dropdowns with category -> service/component group -> source scope/parts. Keyboard/touch disclosure, Escape/outside close, mobile scrolling. No hover-only destinations.
R27: individual service links target actual detail sections; equipment items have stable fragment IDs. Category query must reset previous service when missing, validate mismatches, reveal hidden content before scrolling and account for sticky header. Subservice tabs remain in-place; explicit category and incoming links move to content.

T26 Hero/UI cleanup (R25; A20). T27 Hierarchical navigation (R26; A21). T28 Link/state/anchor repair and regression checks (R27; A22).

Tests: compile/build; generated link/fragment/source checks; focused navigation resolver tests covering wrong/stale groups, invalid inputs and stable IDs. Browser tools unavailable in this turn: no substitute browser automation; visual/interactive acceptance must remain NOT RUN, not inherited from V0.3. Existing preview server may be reused. No database, live form or deployment scope.

## CHG-006 refinement / V0.4.1
User reports that theme choices are below the fold and dropdowns dismiss before choosing. R28/T29–T30/A23–A24: move all three choices above artwork, adapt desktop hero to viewport, and remove pointerleave dismissal. Preserve manual keyboard/click controls, grouped source breakdown and deliberate close actions. CHG-005 implementation is retained; interrupted documentation is reconciled in this version.

Implementation complete for review; command evidence and browser NOT RUN limits are in acceptance.md. No browser tool is available in this session, so historical Chrome observations do not establish current behaviour.

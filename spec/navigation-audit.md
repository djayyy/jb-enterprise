# V0.6.1 navigation audit — CHG-010

26 October2026 · Preview http://127.0.0.1:4322/ · Exact source state: checkpoint.json.

## Results
- PASS:188 built documents;45287 local href/src/data-url references, including existing fragments and image assets.
- PASS:562 distinct linked destinations;855 catalogue-tree and enquiry-context assertions; all100 service scopes and59 equipment group/part targets retained.
- PASS:376 HTTP requests, all188 documents plus linked downloads/context URLs and slashless indexes. An additional unknown URL returns branded404 with recovery navigation. Explicit /404.html returns200.
- Historical V0.6:26 unit checks passed; not rerun for this template/CSS-only removal. Current9 referenced CSS assets exist.
- PASS A32: search on exactly2 indexes; all178 nested catalogue pages omit search, sidebar and related lists, retaining breadcrumbs and own children.
- PASS:13 service and12 equipment groups listed without selecting a hidden panel. All10 homepage capability and3 equipment-category links match their canonical pages. Every node has a reachable parent, breadcrumb, photo, title and source-derived summary.

## Corrections and limits
Coloured category buttons became linked labels with separate preview controls. Shared-page scope/part anchors became distinct static URLs. Legacy query/fragment URLs map through a whitelist; new links do not depend on stale filter state. Category hover now includes the adjacent disclosure area. Inherited mobile header-nav positioning is reset on catalogue navigation. Boiler photo matching no longer accidentally matches the substring oil.

Actual browser rendering, pointer travel, keyboard/mobile interactions, local search, Back/Forward/scroll behaviour and execution of compatibility redirects: NOT RUN. HTTP tests serve documents but do not run JavaScript. External telephone/email/LinkedIn values are inventoried, not verified operational destinations. Production redirects and live form/upload integrations remain outside this review.

## Built route inventory
| Route | Internal link occurrences |
| --- | ---: |
| `/404.html` |231|
| `/about/` |235|
| `/careers/` |232|
| `/certifications/` |237|
| `/contact/` |231|
| `/equipment/hydro/hydro-generator-components/excitation-components-and-slip-rings/` |236|
| `/equipment/hydro/hydro-generator-components/generator-bearings-and-air-cooler-components/` |236|
| `/equipment/hydro/hydro-generator-components/` |238|
| `/equipment/hydro/hydro-generator-components/rotor-poles-spider-and-rim-components/` |236|
| `/equipment/hydro/hydro-generator-components/stator-components-and-bars/` |236|
| `/equipment/hydro/hydro-mechanical-components/critical-fasteners/` |236|
| `/equipment/hydro/hydro-mechanical-components/hydraulic-actuation-components/` |236|
| `/equipment/hydro/hydro-mechanical-components/` |238|
| `/equipment/hydro/hydro-mechanical-components/mechanical-seals-wear-rings-and-bushes/` |236|
| `/equipment/hydro/hydro-mechanical-components/oil-pump-and-bearing-components/` |236|
| `/equipment/hydro/hydro-turbine-components/head-bottom-covers-and-shaft-components/` |236|
| `/equipment/hydro/hydro-turbine-components/` |238|
| `/equipment/hydro/hydro-turbine-components/runner-components-and-guide-vanes/` |236|
| `/equipment/hydro/hydro-turbine-components/stay-ring-and-spiral-casing-components/` |236|
| `/equipment/hydro/hydro-turbine-components/wicket-gates-and-linkages/` |236|
| `/equipment/hydro/` |236|
| `/equipment/` |251|
| `/equipment/other/` |237|
| `/equipment/other/pumps-pump-spares/auxiliary-service-pumps/` |236|
| `/equipment/other/pumps-pump-spares/boiler-and-utility-service-pumps/` |236|
| `/equipment/other/pumps-pump-spares/emergency-oil-pumps-and-teflon-seal-assemblies/` |236|
| `/equipment/other/pumps-pump-spares/` |238|
| `/equipment/other/pumps-pump-spares/turbo-driven-boiler-feed-pump-parts/` |236|
| `/equipment/other/seals-gaskets-soft-components/condenser-water-gaskets/` |236|
| `/equipment/other/seals-gaskets-soft-components/diaphragm-seals/` |236|
| `/equipment/other/seals-gaskets-soft-components/` |238|
| `/equipment/other/seals-gaskets-soft-components/teflon-seal-assemblies/` |236|
| `/equipment/other/seals-gaskets-soft-components/turbine-seal-segments/` |236|
| `/equipment/other/transformer-electrical-spares/exciter-wheel-assemblies/` |236|
| `/equipment/other/transformer-electrical-spares/generator-bus-duct-rigid-spacers/` |236|
| `/equipment/other/transformer-electrical-spares/high-voltage-transformer-bushings/` |236|
| `/equipment/other/transformer-electrical-spares/` |238|
| `/equipment/other/transformer-electrical-spares/stator-bars-with-connection-bars/` |236|
| `/equipment/other/valves/boiler-drain-and-vent-valves/` |236|
| `/equipment/other/valves/` |238|
| `/equipment/other/valves/steam-and-feed-water-control-valves/` |236|
| `/equipment/other/valves/steam-dump-valves/` |236|
| `/equipment/other/valves/throttle-and-quick-non-return-valves/` |236|
| `/equipment/thermal/boiler-pressure-parts/critical-piping-components/` |236|
| `/equipment/thermal/boiler-pressure-parts/drain-and-vent-valves/` |236|
| `/equipment/thermal/boiler-pressure-parts/high-pressure-feed-water-heaters/` |236|
| `/equipment/thermal/boiler-pressure-parts/` |238|
| `/equipment/thermal/boiler-pressure-parts/platen-superheater-headers/` |236|
| `/equipment/thermal/cooling-fans-blowers/blower-assemblies/` |236|
| `/equipment/thermal/cooling-fans-blowers/brush-boxes/` |236|
| `/equipment/thermal/cooling-fans-blowers/` |238|
| `/equipment/thermal/cooling-fans-blowers/pa-fan-blades/` |236|
| `/equipment/thermal/cooling-fans-blowers/turbine-fast-quick-cooling-devices/` |236|
| `/equipment/thermal/critical-fasteners/critical-studs-cap-nuts-and-washers/` |236|
| `/equipment/thermal/critical-fasteners/` |237|
| `/equipment/thermal/critical-fasteners/ipcv-bonnet-studs-and-nuts/` |236|
| `/equipment/thermal/critical-fasteners/turbine-and-pump-coupling-bolts/` |236|
| `/equipment/thermal/generator-spares-components/bus-duct-rigid-spacers/` |236|
| `/equipment/thermal/generator-spares-components/generator-components-and-spares/` |236|
| `/equipment/thermal/generator-spares-components/generator-fans-and-exciter-wheel-assemblies/` |236|
| `/equipment/thermal/generator-spares-components/` |238|
| `/equipment/thermal/generator-spares-components/top-and-bottom-stator-bars-with-connection-bars/` |236|
| `/equipment/thermal/` |238|
| `/equipment/thermal/turbine-spares-components/diaphragm-seals/` |236|
| `/equipment/thermal/turbine-spares-components/` |238|
| `/equipment/thermal/turbine-spares-components/ipcv-bonnet-studs-and-nuts/` |236|
| `/equipment/thermal/turbine-spares-components/throttle-steam-dump-and-qnrv-valves/` |236|
| `/equipment/thermal/turbine-spares-components/turbine-blades-and-seal-segments/` |236|
| `/` |264|
| `/privacy/` |230|
| `/request-a-quote/` |232|
| `/services/hydro/electrical-controls/cable-laying-termination-and-instrument-installation/` |236|
| `/services/hydro/electrical-controls/excitation-systems/` |236|
| `/services/hydro/electrical-controls/generator-and-transformer-electrical-systems/` |236|
| `/services/hydro/electrical-controls/ht-lt-switchgear-and-protection/` |236|
| `/services/hydro/electrical-controls/` |240|
| `/services/hydro/electrical-controls/plc-dcs-verification-commissioning-and-troubleshooting/` |236|
| `/services/hydro/electrical-controls/vibration-and-speed-measurement/` |236|
| `/services/hydro/generator/air-cooler-and-excitation-system-inspection/` |236|
| `/services/hydro/generator/bearing-repair-and-white-metal-re-metalling/` |236|
| `/services/hydro/generator/electrical-mechanical-testing-and-commissioning-support/` |236|
| `/services/hydro/generator/` |240|
| `/services/hydro/generator/rotor-pole-spider-and-rim-inspection/` |236|
| `/services/hydro/generator/shaft-and-journal-repair/` |236|
| `/services/hydro/generator/stator-core-winding-and-bar-inspection-repair/` |236|
| `/services/hydro/` |236|
| `/services/hydro/turbine/balancing-machining-welding-and-commissioning/` |236|
| `/services/hydro/turbine/bearing-and-mechanical-seal-work/` |236|
| `/services/hydro/turbine/erection-dismantling-and-reassembly/` |236|
| `/services/hydro/turbine/` |241|
| `/services/hydro/turbine/runner-runner-blade-and-guide-vane-repair/` |236|
| `/services/hydro/turbine/shaft-inspection-and-alignment/` |236|
| `/services/hydro/turbine/spiral-casing-stay-ring-and-cover-refurbishment/` |236|
| `/services/hydro/turbine/wicket-gate-mechanism-inspection/` |236|
| `/services/` |252|
| `/services/lubrication-reliability/` |241|
| `/services/lubrication-reliability/lubricant-selection-and-supply/` |236|
| `/services/lubrication-reliability/moisture-temperature-and-pressure-monitoring/` |236|
| `/services/lubrication-reliability/oil-reconditioning-varnish-mitigation-and-ion-exchange/` |236|
| `/services/lubrication-reliability/onsite-remote-support-failure-analysis-and-shutdown-planning/` |236|
| `/services/lubrication-reliability/tan-mpc-viscosity-cleanliness-and-particle-testing/` |236|
| `/services/lubrication-reliability/tribology-training-sops-and-contamination-control/` |236|
| `/services/lubrication-reliability/vacuum-dehydration-filtration-and-desiccant-breathers/` |236|
| `/services/oem-sourcing/bearings-seals-pumps-and-mechanical-drives/` |236|
| `/services/oem-sourcing/boiler-auxiliaries-control-valves-and-piping/` |236|
| `/services/oem-sourcing/compressor-combustion-and-airflow-components/` |236|
| `/services/oem-sourcing/emergency-inventory-support-for-selected-critical-spares/` |236|
| `/services/oem-sourcing/fasteners-and-maintenance-consumables/` |236|
| `/services/oem-sourcing/` |241|
| `/services/oem-sourcing/logistics-customs-and-inland-transportation-coordination/` |236|
| `/services/oem-sourcing/turbine-generator-and-winding-components/` |236|
| `/services/refurbishment/casing-steam-chamber-and-diaphragm-restoration/` |236|
| `/services/refurbishment/critical-welding-machining-and-fastener-manufacture/` |236|
| `/services/refurbishment/generator-end-shield-and-hydrogen-cooler-enclosure-repair/` |236|
| `/services/refurbishment/` |241|
| `/services/refurbishment/revamping-of-incomplete-or-idle-units/` |236|
| `/services/refurbishment/sealing-alignment-fitment-and-dynamic-balancing/` |236|
| `/services/refurbishment/steam-path-optimisation-and-shutdown-readiness/` |236|
| `/services/refurbishment/turbine-generator-refurbishment/` |236|
| `/services/reverse-engineering/3d-models-and-engineering-drawings/` |236|
| `/services/reverse-engineering/critical-component-development/` |236|
| `/services/reverse-engineering/design-validation/` |236|
| `/services/reverse-engineering/dimensional-measurement-and-3d-scanning/` |236|
| `/services/reverse-engineering/` |242|
| `/services/reverse-engineering/manufacturing-and-quality-validation/` |236|
| `/services/reverse-engineering/material-science-and-testing/` |236|
| `/services/reverse-engineering/simulation-and-engineering-analysis/` |236|
| `/services/reverse-engineering/technical-visit-and-pre-inspection/` |236|
| `/services/specialist/` |238|
| `/services/testing-inspection/bearing-shaft-and-journal-inspections/` |236|
| `/services/testing-inspection/bump-tests-horn-drop-tests-and-condition-assessment/` |236|
| `/services/testing-inspection/cable-ct-pt-vt-protection-relay-and-trip-logic-testing/` |236|
| `/services/testing-inspection/dimensional-alignment-and-runout-checks/` |236|
| `/services/testing-inspection/` |242|
| `/services/testing-inspection/ir-pi-hv-and-winding-resistance-testing/` |236|
| `/services/testing-inspection/pressure-leak-hydrostatic-and-non-destructive-testing/` |236|
| `/services/testing-inspection/transformer-ratio-oil-testing-contact-earth-and-continuity-checks/` |236|
| `/services/testing-inspection/vibration-analysis-and-dynamic-balancing/` |236|
| `/services/thermal/boiler/burner-and-fuel-system-inspection/` |236|
| `/services/thermal/boiler/component-repair-and-replacement/` |236|
| `/services/thermal/boiler/condition-leak-corrosion-and-scaling-assessment/` |236|
| `/services/thermal/boiler/control-and-alarm-verification/` |236|
| `/services/thermal/boiler/final-safety-and-operational-testing/` |236|
| `/services/thermal/boiler/` |242|
| `/services/thermal/boiler/pressure-temperature-flame-detection-and-ignition-testing/` |236|
| `/services/thermal/boiler/tube-cleaning-and-fan-blower-maintenance/` |236|
| `/services/thermal/boiler/water-treatment-system-inspection/` |236|
| `/services/thermal/control-instrumentation/calibration-loop-checking-and-plc-dcs-interfaces/` |236|
| `/services/thermal/control-instrumentation/field-instruments-transmitters-and-gauges/` |236|
| `/services/thermal/control-instrumentation/functional-testing-commissioning-and-troubleshooting/` |236|
| `/services/thermal/control-instrumentation/` |241|
| `/services/thermal/control-instrumentation/junction-boxes-termination-and-continuity-testing/` |236|
| `/services/thermal/control-instrumentation/lubrication-and-condenser-instrumentation/` |236|
| `/services/thermal/control-instrumentation/temperature-pressure-flow-and-level-measurement/` |236|
| `/services/thermal/control-instrumentation/vibration-and-speed-instrumentation/` |236|
| `/services/thermal/electrical/33-kv-gis-ht-panels-and-motor-systems/` |236|
| `/services/thermal/electrical/cable-laying-and-termination/` |236|
| `/services/thermal/electrical/` |241|
| `/services/thermal/electrical/insulation-resistance-and-hv-testing/` |236|
| `/services/thermal/electrical/isolated-phase-bus-duct-and-transformer-systems/` |236|
| `/services/thermal/electrical/lt-panels-pmcc-tgmcc-and-mldb-systems/` |236|
| `/services/thermal/electrical/pre-commissioning-and-operational-testing/` |236|
| `/services/thermal/electrical/protection-integration-and-relay-verification/` |236|
| `/services/thermal/generator/bearing-inspection-repair-and-white-metal-re-metalling/` |236|
| `/services/thermal/generator/cooler-repair-and-refurbishment/` |236|
| `/services/thermal/generator/core-and-winding-assessment/` |236|
| `/services/thermal/generator/core-tightening-and-wedging/` |236|
| `/services/thermal/generator/ct-and-neutral-adaptor-box-erection/` |236|
| `/services/thermal/generator/electrical-and-mechanical-testing/` |236|
| `/services/thermal/generator/generator-commissioning-and-reliability-support/` |236|
| `/services/thermal/generator/generator-stator-rewinding/` |236|
| `/services/thermal/generator/` |248|
| `/services/thermal/generator/retaining-ring-replacement-and-installation/` |236|
| `/services/thermal/generator/rotor-fan-blade-repair-and-replacement/` |236|
| `/services/thermal/generator/rotor-inspection-repair-and-winding-inspection/` |236|
| `/services/thermal/generator/shaft-and-journal-repair-rotor-face-matching/` |236|
| `/services/thermal/generator/stator-bar-repair-and-replacement/` |236|
| `/services/thermal/generator/stator-inspection-and-cleaning/` |236|
| `/services/thermal/` |238|
| `/services/thermal/turbine/bearing-inspection-and-valve-servicing/` |236|
| `/services/thermal/turbine/blading-inspection-and-repair/` |236|
| `/services/thermal/turbine/capital-and-annual-overhauling/` |236|
| `/services/thermal/turbine/diaphragm-steam-chamber-and-casing-refurbishment/` |236|
| `/services/thermal/turbine/dynamic-balancing-precision-machining-and-welding/` |236|
| `/services/thermal/turbine/hp-ip-and-lp-component-restoration/` |236|
| `/services/thermal/turbine/` |242|
| `/services/thermal/turbine/ndt-condition-assessment-and-commissioning/` |236|
| `/services/thermal/turbine/turbine-erection-and-assembly/` |236|

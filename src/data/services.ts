export type Service = {
  slug: string;
  title: string;
  group: string;
  summary: string;
  image: string;
  scope: string[];
  source: string;
};
export const services: Service[] = [
  {
    slug: "thermal/turbine",
    title: "Turbine services",
    group: "Thermal",
    summary:
      "Precision support for steam turbines, from erection and overhaul to restoration and commissioning.",
    image: "turbine",
    scope: [
      "Turbine erection and assembly",
      "Capital and annual overhauling",
      "HP, IP and LP component restoration",
      "Blading inspection and repair",
      "Diaphragm, steam chamber and casing refurbishment",
      "Bearing inspection and valve servicing",
      "Dynamic balancing, precision machining and welding",
      "NDT, condition assessment and commissioning",
    ],
    source: "S2 pp.7–8",
  },
  {
    slug: "thermal/generator",
    title: "Generator services",
    group: "Thermal",
    summary:
      "Repair, refurbishment and lifecycle support for generator stators, rotors and associated auxiliaries.",
    image: "generator-hero",
    scope: [
      "Stator inspection and cleaning",
      "Core and winding assessment",
      "Stator bar repair and replacement",
      "Generator stator rewinding",
      "Core tightening and wedging",
      "Rotor inspection, repair and winding inspection",
      "Shaft and journal repair; rotor face matching",
      "Retaining ring replacement and installation",
      "Rotor fan blade repair and replacement",
      "Bearing inspection, repair and white-metal re-metalling",
      "Cooler repair and refurbishment",
      "CT and neutral adaptor box erection",
      "Electrical and mechanical testing",
      "Generator commissioning and reliability support",
    ],
    source: "S2 p.7",
  },
  {
    slug: "thermal/boiler",
    title: "Boiler services",
    group: "Thermal",
    summary:
      "Structured inspection, maintenance and restoration for critical boiler systems.",
    image: "workshop",
    scope: [
      "Condition, leak, corrosion and scaling assessment",
      "Burner and fuel system inspection",
      "Tube cleaning and fan/blower maintenance",
      "Water treatment system inspection",
      "Component repair and replacement",
      "Pressure, temperature, flame detection and ignition testing",
      "Control and alarm verification",
      "Final safety and operational testing",
    ],
    source: "S2 pp.7–8",
  },
  {
    slug: "thermal/electrical",
    title: "Electrical services",
    group: "Thermal",
    summary:
      "Installation, testing and commissioning support from generator to grid.",
    image: "inspection",
    scope: [
      "Isolated phase bus duct and transformer systems",
      "33 kV GIS, HT panels and motor systems",
      "LT panels, PMCC, TGMCC and MLDB systems",
      "Cable laying and termination",
      "Protection integration and relay verification",
      "Insulation resistance and HV testing",
      "Pre-commissioning and operational testing",
    ],
    source: "S2 p.8",
  },
  {
    slug: "thermal/control-instrumentation",
    title: "Control & instrumentation",
    group: "Thermal",
    summary:
      "Measurement, calibration and control-system support for turbines, generators and auxiliaries.",
    image: "generator-work",
    scope: [
      "Field instruments, transmitters and gauges",
      "Temperature, pressure, flow and level measurement",
      "Vibration and speed instrumentation",
      "Lubrication and condenser instrumentation",
      "Junction boxes, termination and continuity testing",
      "Calibration, loop checking and PLC/DCS interfaces",
      "Functional testing, commissioning and troubleshooting",
    ],
    source: "S2 p.8",
  },
  {
    slug: "hydro/turbine",
    title: "Hydro turbine services",
    group: "Hydro",
    summary:
      "Assembly, refurbishment and alignment support for hydraulic turbine equipment.",
    image: "turbine",
    scope: [
      "Erection, dismantling and reassembly",
      "Runner, runner blade and guide vane repair",
      "Wicket gate mechanism inspection",
      "Spiral casing, stay ring and cover refurbishment",
      "Shaft inspection and alignment",
      "Bearing and mechanical seal work",
      "Balancing, machining, welding and commissioning",
    ],
    source: "S2 pp.8–9",
  },
  {
    slug: "hydro/generator",
    title: "Hydro generator services",
    group: "Hydro",
    summary:
      "Inspection and restoration of hydro generator stators, rotors and supporting systems.",
    image: "stator",
    scope: [
      "Stator core, winding and bar inspection/repair",
      "Rotor pole, spider and rim inspection",
      "Shaft and journal repair",
      "Bearing repair and white-metal re-metalling",
      "Air cooler and excitation-system inspection",
      "Electrical/mechanical testing and commissioning support",
    ],
    source: "S2 p.9",
  },
  {
    slug: "hydro/electrical-controls",
    title: "Hydro electrical & controls",
    group: "Hydro",
    summary:
      "Electrical and instrumentation support for hydro power generation systems.",
    image: "inspection",
    scope: [
      "Generator and transformer electrical systems",
      "HT/LT switchgear and protection",
      "Excitation systems",
      "Cable laying, termination and instrument installation",
      "Vibration and speed measurement",
      "PLC/DCS verification, commissioning and troubleshooting",
    ],
    source: "S2 p.9",
  },
  {
    slug: "testing-inspection",
    title: "Testing & inspection",
    group: "Specialist",
    summary:
      "Understand equipment condition with mechanical inspections and electrical testing.",
    image: "inspection",
    scope: [
      "Dimensional, alignment and runout checks",
      "Vibration analysis and dynamic balancing",
      "Bearing, shaft and journal inspections",
      "Pressure, leak, hydrostatic and non-destructive testing",
      "Bump tests, horn drop tests and condition assessment",
      "IR, PI, HV and winding-resistance testing",
      "Transformer ratio/oil testing; contact, earth and continuity checks",
      "Cable, CT, PT/VT, protection, relay and trip-logic testing",
    ],
    source: "S2 pp.9–10",
  },
  {
    slug: "refurbishment",
    title: "Refurbishment & repair",
    group: "Specialist",
    summary:
      "Restore critical components and bring idle equipment back towards operational readiness.",
    image: "generator-work",
    scope: [
      "Revamping of incomplete or idle units",
      "Turbine-generator refurbishment",
      "Casing, steam chamber and diaphragm restoration",
      "Generator end shield and hydrogen cooler enclosure repair",
      "Critical welding, machining and fastener manufacture",
      "Sealing, alignment, fitment and dynamic balancing",
      "Steam path optimisation and shutdown readiness",
    ],
    source: "S2 p.10",
  },
  {
    slug: "reverse-engineering",
    title: "Reverse engineering",
    group: "Specialist",
    summary:
      "From an existing component to a validated engineering drawing and manufactured replacement.",
    image: "rotor",
    scope: [
      "Technical visit and pre-inspection",
      "Dimensional measurement and 3D scanning",
      "3D models and engineering drawings",
      "Simulation and engineering analysis",
      "Material science and testing",
      "Design validation",
      "Manufacturing and quality validation",
      "Critical component development",
    ],
    source: "S2 pp.12–13",
  },
  {
    slug: "lubrication-reliability",
    title: "Lubrication reliability",
    group: "Specialist",
    summary:
      "Manage friction, oil condition and contamination across rotating and auxiliary assets.",
    image: "turbine",
    scope: [
      "Lubricant selection and supply",
      "TAN, MPC, viscosity, cleanliness and particle testing",
      "Moisture, temperature and pressure monitoring",
      "Vacuum dehydration, filtration and desiccant breathers",
      "Oil reconditioning, varnish mitigation and ion exchange",
      "Onsite/remote support, failure analysis and shutdown planning",
      "Tribology training, SOPs and contamination control",
    ],
    source: "S2 p.10",
  },
  {
    slug: "oem-sourcing",
    title: "OEM spares & sourcing",
    group: "Specialist",
    summary:
      "Sourcing and supply support for critical power plant equipment and replacement components.",
    image: "rotor",
    scope: [
      "Turbine, generator and winding components",
      "Compressor, combustion and airflow components",
      "Bearings, seals, pumps and mechanical drives",
      "Boiler auxiliaries, control valves and piping",
      "Fasteners and maintenance consumables",
      "Logistics, customs and inland transportation coordination",
      "Emergency inventory support for selected critical spares",
    ],
    source: "S2 p.12",
  },
];
export const serviceUrl = (s: Service) => `/services/${s.slug}/`;
export const quoteUrl = (title: string) =>
  `/request-a-quote/?service=${encodeURIComponent(title)}`;

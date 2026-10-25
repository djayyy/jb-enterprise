import test from "node:test";
import assert from "node:assert/strict";
import {
  resolveServiceSelection,
  resolveEquipmentSelection,
  equipmentAnchor,
  equipmentItemUrl,
  serviceDetailUrl,
  partAnchor,
  equipmentArrivalTarget,
} from "../src/lib/navigation.mjs";
const services = [
  { slug: "thermal/turbine", group: "Thermal" },
  { slug: "thermal/generator", group: "Thermal" },
  { slug: "hydro/turbine", group: "Hydro" },
  { slug: "hydro/generator", group: "Hydro" },
  { slug: "refurbishment", group: "Specialist" },
];
test("category-only navigation resets prior service, including returning to same category", () => {
  assert.equal(
    resolveServiceSelection(
      "?group=Hydro&service=hydro/generator",
      "",
      services,
    ).selected,
    "hydro/generator",
  );
  assert.deepEqual(resolveServiceSelection("?group=Thermal", "", services), {
    family: "Thermal",
    selected: "thermal/turbine",
    query: "",
  });
  assert.equal(
    resolveServiceSelection("?group=Hydro", "", services).selected,
    "hydro/turbine",
  );
});
test("a service fragment alone selects its actual category and scope", () => {
  assert.deepEqual(
    resolveServiceSelection("", "#scope-hydro-generator", services),
    {
      family: "Hydro",
      selected: "hydro/generator",
      query: "",
    },
  );
  assert.equal(
    resolveServiceSelection("?group=Thermal", "#scope-refurbishment", services)
      .family,
    "Specialist",
  );
});
test("incoming search cannot hide an explicit service, but matching filters survive", () => {
  const searchable = [
    {
      slug: "hydro/generator",
      group: "Hydro",
      search: "hydro generator rewinding",
    },
  ];
  assert.equal(
    resolveServiceSelection("?service=hydro/generator&q=boiler", "", searchable)
      .query,
    "",
  );
  assert.equal(
    resolveServiceSelection(
      "?service=hydro/generator&q=rewinding",
      "",
      searchable,
    ).query,
    "rewinding",
  );
});
test("individual parts have distinct destinations and reveal their family", () => {
  const a = partAnchor("other", "Valves", "Steam dump valves");
  const b = partAnchor("thermal", "Turbine spares", "Steam dump valves");
  assert.notEqual(a, b);
  assert.ok(
    equipmentItemUrl("other", "Valves", "Steam dump valves").endsWith("#" + a),
  );
  assert.deepEqual(
    resolveEquipmentSelection("?group=thermal&q=missing", "#" + a, [
      { group: "thermal", anchors: [b] },
      { group: "other", anchors: [a] },
    ]),
    { group: "other", query: "" },
  );
});
test("equipment Back to top retains the main target; legacy categories target workspace", () => {
  assert.equal(
    equipmentArrivalTarget("#main", ["main", "equipment-workspace"]),
    "main",
  );
  assert.equal(
    equipmentArrivalTarget("#hydro", ["hydro"]),
    "equipment-workspace",
  );
  assert.equal(
    equipmentArrivalTarget("#missing", ["main"]),
    "equipment-workspace",
  );
});
test("valid service determines category when query mismatches", () => {
  assert.deepEqual(
    resolveServiceSelection(
      "?group=Thermal&service=hydro/generator",
      "",
      services,
    ),
    { family: "Hydro", selected: "hydro/generator", query: "" },
  );
});
test("unknown service/group has deterministic safe fallback and bounded query", () => {
  const r = resolveServiceSelection(
    "?group=invalid&service=invalid&q=" + "a".repeat(400),
    "",
    services,
  );
  assert.equal(r.family, "Thermal");
  assert.equal(r.selected, "thermal/turbine");
  assert.equal(r.query.length, 150);
  assert.equal(
    resolveServiceSelection("", "#specialist", services).selected,
    "refurbishment",
  );
});
const anchor = equipmentAnchor("other", "Pumps & pump spares");
const parts = [
  { group: "thermal", anchors: ["parts-thermal-turbine"] },
  { group: "hydro", anchors: ["parts-hydro-generator"] },
  { group: "other", anchors: [anchor] },
];
test("equipment fragment reveals correct category and clears hiding search", () => {
  assert.deepEqual(
    resolveEquipmentSelection("?group=thermal&q=zzzz", "#" + anchor, parts),
    { group: "other", query: "" },
  );
  assert.equal(resolveEquipmentSelection("", "#hydro", parts).group, "hydro");
  assert.equal(
    resolveEquipmentSelection("?group=other", "", parts).group,
    "other",
  );
});
test("unknown equipment targets fall back safely and queries remain bounded", () => {
  assert.equal(
    resolveEquipmentSelection("?group=unknown", "#missing", parts).group,
    "thermal",
  );
  assert.equal(
    resolveEquipmentSelection("?q=" + "b".repeat(400), "", parts).query.length,
    150,
  );
});
test("canonical links identify exact detail and equipment fragments", () => {
  assert.equal(
    serviceDetailUrl("thermal/generator"),
    "/services/thermal/generator/",
  );
  assert.equal(
    serviceDetailUrl("hydro/generator", 2),
    "/services/hydro/generator/#scope-item-3",
  );
  assert.equal(
    equipmentItemUrl("other", "Pumps & pump spares"),
    "/equipment/?group=other#parts-other-pumps-pump-spares",
  );
});

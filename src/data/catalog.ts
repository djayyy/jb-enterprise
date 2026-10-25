import { services } from "./services";
import { equipment } from "./equipment";
import { buildCatalog } from "../lib/catalog-tree.mjs";
export const catalog = buildCatalog(services, equipment);

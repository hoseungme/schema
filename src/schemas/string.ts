import { Symbols } from "./symbols";
import { Schema } from "./types";

export interface StringSchema extends Schema {
  [key: typeof Symbols.Kind]: "String";

  type: "string";
}

export type ResolveStringSchema = string;

export function createStringSchema(): StringSchema {
  return { [Symbols.Kind]: "String", type: "string" };
}

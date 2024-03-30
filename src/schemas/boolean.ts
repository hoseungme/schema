import { Symbols } from "./symbols";
import { Schema } from "./types";

export interface BooleanSchema extends Schema {
  [key: typeof Symbols.Kind]: "Boolean";

  type: "boolean";
}

export type ResolveBooleanSchema = boolean;

export function createBooleanSchema(): BooleanSchema {
  return { [Symbols.Kind]: "Boolean", type: "boolean" };
}

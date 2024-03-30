import { Symbols } from "./symbols";
import { Schema } from "./types";

export interface NumberSchema extends Schema {
  [key: typeof Symbols.Kind]: "Number";

  type: "number";
}

export type ResolveNumberSchema = number;

export function createNumberSchema(): NumberSchema {
  return { [Symbols.Kind]: "Number", type: "number" };
}

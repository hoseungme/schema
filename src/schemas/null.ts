import { Symbols } from "./symbols";
import { Schema } from "./types";

export interface NullSchema extends Schema {
  [key: typeof Symbols.Kind]: "Null";

  type: "null";
}

export type ResolveNullSchema = null;

export function createNullSchema(): NullSchema {
  return { [Symbols.Kind]: "Null", type: "null" };
}

export function isNullSchema(schema: Schema): schema is NullSchema {
  return schema[Symbols.Kind] === "Null";
}

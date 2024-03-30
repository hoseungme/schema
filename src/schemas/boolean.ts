import { Symbols } from "./symbols";
import { MatchFunc, Schema } from "./types";

type BooleanMatchFunc = MatchFunc<boolean>;

export interface BooleanSchema extends Schema {
  [key: typeof Symbols.Kind]: "Boolean";
  match: BooleanMatchFunc;

  type: "boolean";
}

export type ResolveBooleanSchema = boolean;

export function createBooleanSchema(): BooleanSchema {
  const match = ((value) => {
    return typeof value === "boolean";
  }) as BooleanMatchFunc;

  return {
    [Symbols.Kind]: "Boolean",
    match,

    type: "boolean",
  };
}

export function isBooleanSchema(schema: Schema): schema is BooleanSchema {
  return schema[Symbols.Kind] === "Boolean";
}

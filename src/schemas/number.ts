import { Symbols } from "./symbols";
import { MatchFunc, Schema } from "./types";

type NumberMatchFunc = MatchFunc<number>;

export interface NumberSchema extends Schema {
  [key: typeof Symbols.Kind]: "Number";
  match: NumberMatchFunc;

  type: "number";
}

export type ResolveNumberSchema = number;

export function createNumberSchema(): NumberSchema {
  const match = ((value) => {
    return typeof value === "number";
  }) as NumberMatchFunc;

  return {
    [Symbols.Kind]: "Number",
    match,

    type: "number",
  };
}

export function isNumberSchema(schema: Schema): schema is NumberSchema {
  return schema[Symbols.Kind] === "Number";
}

import { Symbols } from "./symbols";
import { MatchFunc, Schema } from "./types";

type StringMatchFunc = MatchFunc<string>;

export interface StringSchema extends Schema {
  [key: typeof Symbols.Kind]: "String";

  type: "string";
}

export type ResolveStringSchema = string;

export function createStringSchema(): StringSchema {
  const match = ((value) => {
    return typeof value === "string";
  }) as StringMatchFunc;

  return {
    [Symbols.Kind]: "String",
    match,

    type: "string",
  };
}

export function isStringSchema(schema: Schema): schema is StringSchema {
  return schema[Symbols.Kind] === "String";
}

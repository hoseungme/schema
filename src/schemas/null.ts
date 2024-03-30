import { Symbols } from "./symbols";
import { MatchFunc, Schema } from "./types";

type NullMatchFunc = MatchFunc<null>;

export interface NullSchema extends Schema {
  [key: typeof Symbols.Kind]: "Null";
  match: NullMatchFunc;

  type: "null";
}

export type ResolveNullSchema = null;

export function createNullSchema(): NullSchema {
  const match = ((value) => {
    return value === null;
  }) as NullMatchFunc;

  return {
    [Symbols.Kind]: "Null",
    match,

    type: "null",
  };
}

export function isNullSchema(schema: Schema): schema is NullSchema {
  return schema[Symbols.Kind] === "Null";
}

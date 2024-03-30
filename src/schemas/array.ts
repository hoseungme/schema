import { Symbols } from "./symbols";
import { MatchFunc, ResolveSchema, Schema } from "./types";

type ResolveItems<T extends Schema> = Array<ResolveSchema<T>>;

type ArrayMatchFunc<T extends Schema> = MatchFunc<ResolveItems<T>>;

export interface ArraySchema<T extends Schema = Schema> extends Schema {
  [key: typeof Symbols.Kind]: "Array";
  match: ArrayMatchFunc<T>;

  type: "array";
  items: T;
}

export type ResolveArrayScehma<T extends ArraySchema> = ResolveItems<T["items"]>;

export function createArraySchema<T extends Schema>(items: T): ArraySchema<T> {
  const match = ((value) => {
    return value instanceof Array && value.every(items.match);
  }) as ArrayMatchFunc<T>;

  return {
    [Symbols.Kind]: "Array",
    match,

    type: "array",
    items,
  };
}

export function isArraySchema(schema: Schema): schema is ArraySchema {
  return schema[Symbols.Kind] === "Array";
}

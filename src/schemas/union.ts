import { Symbols } from "./symbols";
import { MatchFunc, ResolveSchema, Schema } from "./types";

type UnionMatchFunc<T extends Schema> = MatchFunc<ResolveSchema<T>>;

export interface UnionSchema<T extends Schema = Schema> extends Schema {
  [key: typeof Symbols.Kind]: "Union";
  match: UnionMatchFunc<T>;

  anyOf: Array<T>;
}

export type ResolveUnionSchema<T extends UnionSchema> = ResolveSchema<T["anyOf"][number]>;

export function createUnionSchema<T extends Schema>(schemas: T[]): UnionSchema<T> {
  const match = ((value) => {
    return schemas.some((schema) => schema.match(value));
  }) as UnionMatchFunc<T>;

  return {
    [Symbols.Kind]: "Union",
    match,

    anyOf: schemas,
  };
}

export function isUnionSchema(schema: Schema): schema is UnionSchema {
  return schema[Symbols.Kind] === "Union";
}

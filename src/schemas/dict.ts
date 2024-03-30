import { Symbols } from "./symbols";
import { MatchFunc, ResolveSchema, Schema } from "./types";

type ResolveAdditionalProperties<T extends Schema> = { [key: string]: ResolveSchema<T> };

type DictMatchFunc<T extends Schema> = MatchFunc<ResolveAdditionalProperties<T>>;

export interface DictSchema<T extends Schema = Schema> extends Schema {
  [key: typeof Symbols.Kind]: "Dict";
  match: DictMatchFunc<T>;

  type: "object";
  properties: Record<string, never>;
  additionalProperties: T;
}

export type ResolveDictSchema<T extends DictSchema> = ResolveAdditionalProperties<T["additionalProperties"]>;

export function createDictSchema<T extends Schema>(schema: T): DictSchema<T> {
  const match = ((value) => {
    return typeof value === "object" && Object.values(value).every(schema.match);
  }) as DictMatchFunc<T>;

  return {
    [Symbols.Kind]: "Dict",
    match,

    type: "object",
    properties: {},
    additionalProperties: schema,
  };
}

export function isDictSchema(schema: Schema): schema is DictSchema {
  return schema[Symbols.Kind] === "Dict";
}

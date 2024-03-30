import { Symbols } from "./symbols";
import { ResolveSchema, Schema } from "./types";

export interface UnionSchema<T extends Schema = Schema> extends Schema {
  [key: typeof Symbols.Kind]: "Union";

  anyOf: T[];
}

export type ResolveUnionSchema<T extends UnionSchema> = ResolveSchema<T["anyOf"][number]>;

export function createUnionSchema<T extends Schema>(schemas: T[]): UnionSchema<T> {
  return { [Symbols.Kind]: "Union", anyOf: schemas };
}

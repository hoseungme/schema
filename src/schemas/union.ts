import { ResolveSchema, Schema } from "./types";
import { toJSON } from "./utils";

export interface UnionSchema<T extends Schema = Schema> extends Schema {
  __kind: "Union";

  anyOf: T[];
}

export type ResolveUnionSchema<T extends UnionSchema> = ResolveSchema<T["anyOf"][number]>;

export function createUnionSchema<T extends Schema>(schemas: T[]): UnionSchema<T> {
  return { __kind: "Union", anyOf: schemas, toJSON };
}

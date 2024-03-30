import { Resolve, Schema } from "../types";

export interface UnionSchema<T extends Schema = Schema> {
  __kind: "Union";
  __resolved: Resolve<T>;

  anyOf: T[];
}

export function createUnionSchema<T extends Schema>(schemas: T[]): UnionSchema<T> {
  return { __kind: "Union", anyOf: schemas } as UnionSchema<T>;
}

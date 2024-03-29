import { Resolve, Schema } from "../types";

export interface ArraySchema<T extends Schema = Schema> extends Schema {
  __kind: "Array";
  __resolved: Resolve<T>[];

  type: "array";
  items: T;
}

export function Array<T extends Schema>(items: T): ArraySchema<T> {
  return { __kind: "Array", type: "array", items } as ArraySchema<T>;
}

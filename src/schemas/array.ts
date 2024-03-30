import { ResolveSchema, Schema } from "./types";
import { toJSON } from "./utils";

export interface ArraySchema<T extends Schema = Schema> extends Schema {
  __kind: "Array";

  type: "array";
  items: T;
}

export type ResolveArrayScehma<T extends ArraySchema> = ResolveSchema<T["items"]>[];

export function createArraySchema<T extends Schema>(items: T): ArraySchema<T> {
  return { __kind: "Array", type: "array", items, toJSON };
}

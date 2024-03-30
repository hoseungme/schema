import { Symbols } from "./symbols";
import { ResolveSchema, Schema } from "./types";

export interface ArraySchema<T extends Schema = Schema> extends Schema {
  [key: typeof Symbols.Kind]: "Array";

  type: "array";
  items: T;
}

export type ResolveArrayScehma<T extends ArraySchema> = ResolveSchema<T["items"]>[];

export function createArraySchema<T extends Schema>(items: T): ArraySchema<T> {
  return { [Symbols.Kind]: "Array", type: "array", items };
}

export function isArraySchema(schema: Schema): schema is ArraySchema {
  return schema[Symbols.Kind] === "Array";
}

import { ResolveSchema, Schema } from "./types";
import { toJSON } from "./utils";

export interface DictSchema<T extends Schema = Schema> extends Schema {
  __kind: "Dict";

  type: "object";
  properties: Record<string, never>;
  additionalProperties: T;
}

export type ResolveDictSchema<T extends DictSchema> = { [key: string]: ResolveSchema<T["additionalProperties"]> };

export function createDictSchema<T extends Schema>(schema: T): DictSchema<T> {
  return { __kind: "Dict", type: "object", properties: {}, additionalProperties: schema, toJSON };
}

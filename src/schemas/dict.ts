import { Symbols } from "./symbols";
import { ResolveSchema, Schema } from "./types";

export interface DictSchema<T extends Schema = Schema> extends Schema {
  [key: typeof Symbols.Kind]: "Dict";

  type: "object";
  properties: Record<string, never>;
  additionalProperties: T;
}

export type ResolveDictSchema<T extends DictSchema> = { [key: string]: ResolveSchema<T["additionalProperties"]> };

export function createDictSchema<T extends Schema>(schema: T): DictSchema<T> {
  return { [Symbols.Kind]: "Dict", type: "object", properties: {}, additionalProperties: schema };
}

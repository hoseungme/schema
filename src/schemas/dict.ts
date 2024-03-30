import { Resolve, Schema } from "../types";

export interface DictSchema<T extends Schema = Schema> extends Schema {
  __kind: "Dict";
  __resolved: { [key: string]: Resolve<T> };

  type: "object";
  properties: Record<string, never>;
  additionalProperties: T;
}

export function createDictSchema<T extends Schema>(schema: T): DictSchema<T> {
  return { __kind: "Dict", type: "object", properties: {}, additionalProperties: schema } as DictSchema<T>;
}

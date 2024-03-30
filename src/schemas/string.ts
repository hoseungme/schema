import { Schema } from "./types";

export interface StringSchema extends Schema {
  __kind: "String";
  __resolved: string;

  type: "string";
}

export function createStringSchema(): StringSchema {
  return { __kind: "String", type: "string" } as StringSchema;
}

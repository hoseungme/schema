import { Schema } from "./types";
import { toJSON } from "./utils";

export interface StringSchema extends Schema {
  __kind: "String";

  type: "string";
}

export type ResolveStringSchema = string;

export function createStringSchema(): StringSchema {
  return { __kind: "String", type: "string", toJSON };
}

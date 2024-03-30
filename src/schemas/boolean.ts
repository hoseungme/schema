import { Schema } from "./types";
import { toJSON } from "./utils";

export interface BooleanSchema extends Schema {
  __kind: "Boolean";

  type: "boolean";
}

export type ResolveBooleanSchema = boolean;

export function createBooleanSchema(): BooleanSchema {
  return { __kind: "Boolean", type: "boolean", toJSON };
}

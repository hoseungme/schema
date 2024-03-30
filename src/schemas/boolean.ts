import { Schema } from "../types";

export interface BooleanSchema extends Schema {
  __kind: "Boolean";
  __resolved: boolean;

  type: "boolean";
}

export function createBooleanSchema(): BooleanSchema {
  return { __kind: "Boolean", type: "boolean" } as BooleanSchema;
}

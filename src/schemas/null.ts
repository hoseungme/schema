import { Schema } from "./types";

export interface NullSchema extends Schema {
  __kind: "Null";
  __resolved: null;

  type: "null";
}

export function createNullSchema(): NullSchema {
  return { __kind: "Null", type: "null" } as NullSchema;
}

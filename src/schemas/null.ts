import { Schema } from "../types/schema";

export interface NullSchema extends Schema {
  __kind: "Null";
  __resolved: null;

  type: "null";
}

export function Null(): NullSchema {
  return { __kind: "Null", type: "null" } as NullSchema;
}

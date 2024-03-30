import { Schema } from "./types";
import { toJSON } from "./utils";

export interface NullSchema extends Schema {
  __kind: "Null";

  type: "null";
}

export type ResolveNullSchema = null;

export function createNullSchema(): NullSchema {
  return { __kind: "Null", type: "null", toJSON };
}

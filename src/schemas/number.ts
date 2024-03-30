import { Schema } from "./types";
import { toJSON } from "./utils";

export interface NumberSchema extends Schema {
  __kind: "Number";

  type: "number";
}

export type ResolveNumberSchema = number;

export function createNumberSchema(): NumberSchema {
  return { __kind: "Number", type: "number", toJSON };
}

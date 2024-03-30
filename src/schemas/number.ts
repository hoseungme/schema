import { Schema } from "../types/schema";

export interface NumberSchema extends Schema {
  __kind: "Number";
  __resolved: number;

  type: "number";
}

export type ResolveNumber = number;

export function createNumberSchema(): NumberSchema {
  return { __kind: "Number", type: "number" } as NumberSchema;
}

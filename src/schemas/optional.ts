import { Schema } from "./types";

export type OptionalSchema<T extends Schema = Schema> = T & { __optional: "Optional" };

export function createOptionalSchema<T extends Schema>(schema: T): OptionalSchema<T> {
  return { ...schema, __optional: "Optional" };
}

export function isOptionalSchema<T extends Schema>(schema: T): schema is OptionalSchema<T> {
  return (schema as any).__optional === "Optional";
}

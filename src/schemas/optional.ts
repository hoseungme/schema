import { Schema } from "../types/schema";

export type OptionalSchema<T extends Schema = Schema> = T & { __optional: "Optional" };

export function Optional<T extends Schema>(schema: T): OptionalSchema<T> {
  return { ...schema, __optional: "Optional" };
}

export function isOptional<T extends Schema>(schema: T): schema is OptionalSchema<T> {
  return (schema as any).__optional === "Optional";
}

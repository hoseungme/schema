import { Symbols } from "./symbols";
import { Schema } from "./types";

export type OptionalSchema<T extends Schema = Schema> = T & { [key: typeof Symbols.Optional]: "Optional" };

export function createOptionalSchema<T extends Schema>(schema: T): OptionalSchema<T> {
  return { ...schema, [Symbols.Optional]: "Optional" };
}

export function isOptionalSchema<T extends Schema>(schema: T): schema is OptionalSchema<T> {
  return (schema as any)[Symbols.Optional] === "Optional";
}

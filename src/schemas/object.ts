import { ResolveSchema, Schema } from "./types";
import { isOptionalSchema, OptionalSchema } from "./optional";
import { Symbols } from "./symbols";

export type Properties = Record<string, Schema>;

type OptionalPropertyKeys<T extends Properties> = {
  [K in keyof T]: T[K] extends OptionalSchema<T[K]> ? K : never;
}[keyof T];
type RequiredPropertyKeys<T extends Properties> = keyof Omit<T, OptionalPropertyKeys<T>>;

type ResolveProperties<T extends Properties> = { [K in keyof T]: ResolveSchema<T[K]> };

export interface ObjectSchema<T extends Properties = Properties> extends Schema {
  [key: typeof Symbols.Kind]: "Object";

  type: "object";
  properties: T;
  required: string[];
}

export type ResolveObjectSchema<T extends ObjectSchema> = Partial<
  Pick<ResolveProperties<T["properties"]>, OptionalPropertyKeys<T["properties"]>>
> &
  Pick<ResolveProperties<T["properties"]>, RequiredPropertyKeys<T["properties"]>>;

export function createObjectSchema<T extends Properties>(properties: T): ObjectSchema<T> {
  const entries = Object.entries(properties);
  const required = entries.filter(([, schema]) => !isOptionalSchema(schema)).map(([key]) => key);

  return { [Symbols.Kind]: "Object", type: "object", properties, required };
}

export function isObjectSchema(schema: Schema): schema is ObjectSchema {
  return schema[Symbols.Kind] === "Object";
}

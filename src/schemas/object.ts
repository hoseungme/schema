import { MatchFunc, ResolveSchema, Schema } from "./types";
import { isOptionalSchema, OptionalSchema } from "./optional";
import { Symbols } from "./symbols";

export type Properties = Record<string, Schema>;

type OptionalPropertyKeys<T extends Properties> = {
  [K in keyof T]: T[K] extends OptionalSchema<T[K]> ? K : never;
}[keyof T];
type RequiredPropertyKeys<T extends Properties> = keyof Omit<T, OptionalPropertyKeys<T>>;

type ResolveProperties<T extends Properties> = { [K in keyof T]: ResolveSchema<T[K]> };

type ObjectMatchFunc<T extends Properties> = MatchFunc<ResolveProperties<T>>;

export interface ObjectSchema<T extends Properties = Properties> extends Schema {
  [key: typeof Symbols.Kind]: "Object";
  match: ObjectMatchFunc<T>;

  type: "object";
  properties: T;
  required: Array<string>;
}

export type ResolveObjectSchema<T extends ObjectSchema> = Partial<
  Pick<ResolveProperties<T["properties"]>, OptionalPropertyKeys<T["properties"]>>
> &
  Pick<ResolveProperties<T["properties"]>, RequiredPropertyKeys<T["properties"]>>;

export function createObjectSchema<T extends Properties>(properties: T): ObjectSchema<T> {
  const required = Object.entries(properties)
    .filter(([, schema]) => !isOptionalSchema(schema))
    .map(([key]) => key);

  const match = ((value) => {
    const isObject = typeof value === "object";
    if (!isObject) {
      return false;
    }

    const hasAllRequiredProperties = required.every((key) => value[key] !== undefined);
    if (!hasAllRequiredProperties) {
      return false;
    }

    const isAllValueMatched = Object.entries(value).every(([key, value]) => properties[key].match(value));
    if (!isAllValueMatched) {
      return false;
    }

    return true;
  }) as ObjectMatchFunc<T>;

  return {
    [Symbols.Kind]: "Object",
    match,

    type: "object",
    properties,
    required,
  };
}

export function isObjectSchema(schema: Schema): schema is ObjectSchema {
  return schema[Symbols.Kind] === "Object";
}

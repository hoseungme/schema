import { Resolve, Schema } from "../types";
import { objectEntries } from "../utils/object";
import { isOptional, OptionalSchema } from "./optional";

type Properties = Record<string, Schema>;

type OptionalPropertyKeys<T extends Properties> = {
  [K in keyof T]: T[K] extends OptionalSchema<T[K]> ? K : never;
}[keyof T];
type RequiredPropertyKeys<T extends Properties> = keyof Omit<T, OptionalPropertyKeys<T>>;

type ResolveProperties<T extends Properties> = { [K in keyof T]: Resolve<T[K]> };

type ResolveObjectSchema<T extends Properties> = Pick<ResolveProperties<T>, RequiredPropertyKeys<T>> &
  Partial<Pick<ResolveProperties<T>, OptionalPropertyKeys<T>>>;

export interface ObjectSchema<T extends Properties = Properties> extends Schema {
  __kind: "Object";
  __resolved: ResolveObjectSchema<T>;

  type: "object";
  properties: T;
  required: string[];
}

export function Object<T extends Properties>(properties: T): ObjectSchema<T> {
  const entries = objectEntries(properties);
  const required = entries.filter(([, schema]) => isOptional(schema)).map(([key]) => key);

  return { __kind: "Object", type: "object", properties, required } as ObjectSchema<T>;
}

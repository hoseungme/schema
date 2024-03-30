import { Symbols } from "./symbols";
import { MatchFunc, Schema } from "./types";

export type LiteralValue = number | string | boolean;

export type LiteralMatchFunc<T extends LiteralValue> = MatchFunc<T>;

export interface LiteralSchema<T extends LiteralValue = LiteralValue> extends Schema {
  [key: typeof Symbols.Kind]: "Literal";
  match: LiteralMatchFunc<T>;

  type: T extends number ? "number" : T extends string ? "string" : "boolean";
  const: T;
}

export type ResolveLiteralSchema<T extends LiteralSchema> = T["const"];

export function createLiteralSchema<T extends LiteralValue = LiteralValue>(literal: T): LiteralSchema<T> {
  const match = ((value) => {
    return value === literal;
  }) as LiteralMatchFunc<T>;

  return {
    [Symbols.Kind]: "Literal",
    match,

    type: (() => {
      const typeofValue = typeof literal;
      switch (typeofValue) {
        case "number":
        case "string":
        case "boolean":
          return typeofValue as LiteralSchema<T>["type"];
        default:
          throw new Error("unexpected value");
      }
    })(),
    const: literal,
  };
}

export function isLiteralSchema(schema: Schema): schema is LiteralSchema {
  return schema[Symbols.Kind] === "Literal";
}

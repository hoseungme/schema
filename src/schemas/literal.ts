import { Symbols } from "./symbols";
import { Schema } from "./types";

export type LiteralValue = number | string | boolean;

export interface LiteralSchema<T extends LiteralValue = LiteralValue> extends Schema {
  [key: typeof Symbols.Kind]: "Literal";

  type: T extends number ? "number" : T extends string ? "string" : "boolean";
  const: T;
}

export type ResolveLiteralSchema<T extends LiteralSchema> = T["const"];

export function createLiteralSchema<T extends LiteralValue = LiteralValue>(value: T): LiteralSchema<T> {
  return {
    [Symbols.Kind]: "Literal",
    type: (() => {
      const typeofValue = typeof value;
      switch (typeofValue) {
        case "number":
        case "string":
        case "boolean":
          return typeofValue as LiteralSchema<T>["type"];
        default:
          throw new Error("unexpected value");
      }
    })(),
    const: value,
  };
}

export function isLiteralSchema(schema: Schema): schema is LiteralSchema {
  return schema[Symbols.Kind] === "Literal";
}

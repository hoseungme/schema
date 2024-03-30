import { Schema } from "./types";
import { toJSON } from "./utils";

export type LiteralValue = number | string | boolean;

export interface LiteralSchema<T extends LiteralValue = LiteralValue> extends Schema {
  __kind: "Literal";

  type: T extends number ? "number" : T extends string ? "string" : "boolean";
  const: T;
}

export type ResolveLiteralSchema<T extends LiteralSchema> = T["const"];

export function createLiteralSchema<T extends LiteralValue = LiteralValue>(value: T): LiteralSchema<T> {
  return {
    __kind: "Literal",
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
    toJSON,
  };
}

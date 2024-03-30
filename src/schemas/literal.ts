import { Schema } from "../types/schema";

type LiteralValue = number | string | boolean;

export interface LiteralSchema<T extends LiteralValue = LiteralValue> extends Schema {
  __kind: "Literal";
  __resolved: T;

  type: T extends number ? "number" : T extends string ? "string" : "boolean";
  const: T;
}

export function createLiteralSchema<T extends LiteralValue = LiteralValue>(value: T): LiteralSchema<T> {
  return {
    __kind: "Literal",
    type: (() => {
      const typeofValue = typeof value;
      switch (typeofValue) {
        case "number":
        case "string":
        case "boolean":
          return typeofValue;
        default:
          throw new Error("unexpected value");
      }
    })(),
    const: value,
  } as LiteralSchema<T>;
}

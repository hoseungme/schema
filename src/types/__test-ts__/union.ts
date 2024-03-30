import { Schema } from "../..";
import { expect } from "./utils/assert";

expect(Schema.Union([Schema.Number(), Schema.String()])).toBeResolved<number | string>();

expect(Schema.Union([Schema.Literal(123), Schema.Literal("foo"), Schema.Literal("bar")])).toBeResolved<
  123 | "foo" | "bar"
>();

expect(
  Schema.Union([
    Schema.Object({
      a: Schema.Number(),
    }),
    Schema.Object({
      b: Schema.String(),
    }),
  ])
).toBeResolved<{ a: number } | { b: string }>();

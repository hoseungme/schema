import { Schema } from "../..";
import { expect } from "./utils/assert";

expect(
  Schema.Object({
    a: Schema.Number(),
    b: Schema.String(),
  })
).toBeResolved<{ a: number; b: string }>();

expect(
  Schema.Object({
    a: Schema.Object({
      a: Schema.Number(),
      b: Schema.String(),
    }),
    b: Schema.Object({
      a: Schema.Number(),
      b: Schema.String(),
    }),
  })
).toBeResolved<{
  a: {
    a: number;
    b: string;
  };
  b: {
    a: number;
    b: string;
  };
}>();

expect(
  Schema.Object({
    a: Schema.Literal(123),
    b: Schema.Literal("foo"),
  })
).toBeResolved<{ a: 123; b: "foo" }>();

expect(
  Schema.Object({
    a: Schema.Number(),
    b: Schema.Optional(Schema.String()),
  })
).toBeResolved<{ a: number }>();

expect(
  Schema.Object({
    a: Schema.Number(),
    b: Schema.Optional(Schema.String()),
  })
).toBeResolved<{ a: number; b: string }>();

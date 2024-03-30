import { S } from "..";
import { expect } from "./utils/assert";

expect(
  S.Object({
    a: S.Number(),
    b: S.String(),
  })
).toBeResolved<{ a: number; b: string }>();

expect(
  S.Object({
    a: S.Object({
      a: S.Number(),
      b: S.String(),
    }),
    b: S.Object({
      a: S.Number(),
      b: S.String(),
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
  S.Object({
    a: S.Literal(123),
    b: S.Literal("foo"),
  })
).toBeResolved<{ a: 123; b: "foo" }>();

expect(
  S.Object({
    a: S.Number(),
    b: S.Optional(S.String()),
  })
).toBeResolved<{ a: number }>();

expect(
  S.Object({
    a: S.Number(),
    b: S.Optional(S.String()),
  })
).toBeResolved<{ a: number; b: string }>();

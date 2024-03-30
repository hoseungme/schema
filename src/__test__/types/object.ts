import { S } from "../..";
import { expect, unknownValue } from "./utils/assert";

expect
  .schema(
    S.Object({
      a: S.Number(),
      b: S.String(),
    })
  )
  .toBeResolved<{ a: number; b: string }>();

expect
  .schema(
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
  )
  .toBeResolved<{
    a: {
      a: number;
      b: string;
    };
    b: {
      a: number;
      b: string;
    };
  }>();

expect
  .schema(
    S.Object({
      a: S.Literal(123),
      b: S.Literal("foo"),
    })
  )
  .toBeResolved<{ a: 123; b: "foo" }>();

expect
  .schema(
    S.Object({
      a: S.Number(),
      b: S.Optional(S.String()),
    })
  )
  .toBeResolved<{ a: number; b?: string }>();

if (
  S.Object({
    a: S.Number(),
    b: S.String(),
  }).match(unknownValue)
) {
  expect(unknownValue).toBe<{ a: number; b: string }>();
}

if (
  S.Object({
    a: S.Object({
      a: S.Number(),
      b: S.String(),
    }),
    b: S.Object({
      a: S.Number(),
      b: S.String(),
    }),
  }).match(unknownValue)
) {
  expect(unknownValue).toBe<{
    a: {
      a: number;
      b: string;
    };
    b: {
      a: number;
      b: string;
    };
  }>();
}

if (
  S.Object({
    a: S.Literal(123),
    b: S.Literal("foo"),
  }).match(unknownValue)
) {
  expect(unknownValue).toBe<{ a: 123; b: "foo" }>();
}

if (
  S.Object({
    a: S.Number(),
    b: S.Optional(S.String()),
  }).match(unknownValue)
) {
  expect(unknownValue).toBe<{ a: number; b?: string }>();
}

import { S } from "../..";
import { expect, unknownValue } from "./utils/assert";

expect.schema(S.Union([S.Number(), S.String()])).toBeResolved<number | string>();

expect.schema(S.Union([S.Literal(123), S.Literal("foo"), S.Literal("bar")])).toBeResolved<123 | "foo" | "bar">();

expect
  .schema(
    S.Union([
      S.Object({
        a: S.Number(),
      }),
      S.Object({
        b: S.String(),
      }),
    ])
  )
  .toBeResolved<{ a: number } | { b: string }>();

if (S.Union([S.Number(), S.String()]).match(unknownValue)) {
  expect(unknownValue).toBe<number | string>();
}

if (S.Union([S.Literal(123), S.Literal("foo"), S.Literal("bar")]).match(unknownValue)) {
  expect(unknownValue).toBe<123 | "foo" | "bar">();
}

if (
  S.Union([
    S.Object({
      a: S.Number(),
    }),
    S.Object({
      b: S.String(),
    }),
  ]).match(unknownValue)
) {
  expect(unknownValue).toBe<{ a: number } | { b: string }>();
}

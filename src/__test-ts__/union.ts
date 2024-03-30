import { S } from "..";
import { expect } from "./utils/assert";

expect(S.Union([S.Number(), S.String()])).toBeResolved<number | string>();

expect(S.Union([S.Literal(123), S.Literal("foo"), S.Literal("bar")])).toBeResolved<123 | "foo" | "bar">();

expect(
  S.Union([
    S.Object({
      a: S.Number(),
    }),
    S.Object({
      b: S.String(),
    }),
  ])
).toBeResolved<{ a: number } | { b: string }>();

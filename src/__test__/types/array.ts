import { S } from "../..";
import { expect, unknownValue } from "./utils/assert";

expect.schema(S.Array(S.Number())).toBeResolved<Array<number>>();

expect.schema(S.Array(S.String())).toBeResolved<Array<string>>();

expect.schema(S.Array(S.Boolean())).toBeResolved<Array<boolean>>();

expect.schema(S.Array(S.Union([S.Number(), S.String()]))).toBeResolved<Array<number | string>>();

expect
  .schema(
    S.Array(
      S.Object({
        a: S.Number(),
        b: S.String(),
      })
    )
  )
  .toBeResolved<Array<{ a: number; b: string }>>();

if (S.Array(S.Number()).match(unknownValue)) {
  expect(unknownValue).toBe<Array<number>>();
}

if (S.Array(S.String()).match(unknownValue)) {
  expect(unknownValue).toBe<Array<string>>();
}

if (S.Array(S.Boolean()).match(unknownValue)) {
  expect(unknownValue).toBe<Array<boolean>>();
}

if (S.Array(S.Union([S.Number(), S.String()])).match(unknownValue)) {
  expect(unknownValue).toBe<Array<number | string>>();
}

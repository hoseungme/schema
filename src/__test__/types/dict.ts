import { S } from "../..";
import { expect, unknownValue } from "./utils/assert";

expect.schema(S.Dict(S.Number())).toBeResolved<{ [key: string]: number }>();

expect.schema(S.Dict(S.String())).toBeResolved<{ [key: string]: string }>();

expect.schema(S.Dict(S.Boolean())).toBeResolved<{ [key: string]: boolean }>();

expect.schema(S.Dict(S.Array(S.Number()))).toBeResolved<{ [key: string]: Array<number> }>();

expect
  .schema(
    S.Dict(
      S.Object({
        a: S.Number(),
        b: S.String(),
      })
    )
  )
  .toBeResolved<{ [key: string]: { a: number; b: string } }>();

if (S.Dict(S.Number()).match(unknownValue)) {
  expect(unknownValue).toBe<{ [key: string]: number }>();
}

if (S.Dict(S.String()).match(unknownValue)) {
  expect(unknownValue).toBe<{ [key: string]: string }>();
}

if (S.Dict(S.Boolean()).match(unknownValue)) {
  expect(unknownValue).toBe<{ [key: string]: boolean }>();
}

if (S.Dict(S.Array(S.Number())).match(unknownValue)) {
  expect(unknownValue).toBe<{ [key: string]: Array<number> }>();
}

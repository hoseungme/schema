import { S } from "..";
import { expect } from "./utils/assert";

expect(S.Array(S.Number())).toBeResolved<Array<number>>();

expect(S.Array(S.String())).toBeResolved<Array<string>>();

expect(S.Array(S.Boolean())).toBeResolved<Array<boolean>>();

expect(S.Array(S.Union([S.Number(), S.String()]))).toBeResolved<Array<number | string>>();

expect(
  S.Array(
    S.Object({
      a: S.Number(),
      b: S.String(),
    })
  )
).toBeResolved<Array<{ a: number; b: string }>>();

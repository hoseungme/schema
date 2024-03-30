import { S } from "../..";
import { expect } from "./utils/assert";

expect(S.Dict(S.Number())).toBeResolved<{ [key: string]: number }>();

expect(S.Dict(S.String())).toBeResolved<{ [key: string]: string }>();

expect(S.Dict(S.Boolean())).toBeResolved<{ [key: string]: boolean }>();

expect(S.Dict(S.Array(S.Number()))).toBeResolved<{ [key: string]: Array<number> }>();

expect(
  S.Dict(
    S.Object({
      a: S.Number(),
      b: S.String(),
    })
  )
).toBeResolved<{ [key: string]: { a: number; b: string } }>();

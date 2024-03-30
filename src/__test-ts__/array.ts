import { Schema } from "..";
import { expect } from "./utils/assert";

expect(Schema.Array(Schema.Number())).toBeResolved<Array<number>>();

expect(Schema.Array(Schema.String())).toBeResolved<Array<string>>();

expect(Schema.Array(Schema.Boolean())).toBeResolved<Array<boolean>>();

expect(Schema.Array(Schema.Union([Schema.Number(), Schema.String()]))).toBeResolved<Array<number | string>>();

expect(
  Schema.Array(
    Schema.Object({
      a: Schema.Number(),
      b: Schema.String(),
    })
  )
).toBeResolved<Array<{ a: number; b: string }>>();

import { Schema } from "..";
import { expect } from "./utils/assert";

expect(Schema.Dict(Schema.Number())).toBeResolved<{ [key: string]: number }>();

expect(Schema.Dict(Schema.String())).toBeResolved<{ [key: string]: string }>();

expect(Schema.Dict(Schema.Boolean())).toBeResolved<{ [key: string]: boolean }>();

expect(Schema.Dict(Schema.Array(Schema.Number()))).toBeResolved<{ [key: string]: Array<number> }>();

expect(
  Schema.Dict(
    Schema.Object({
      a: Schema.Number(),
      b: Schema.String(),
    })
  )
).toBeResolved<{ [key: string]: { a: number; b: string } }>();

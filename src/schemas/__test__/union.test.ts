import { expect } from "chai";
import { Schema } from "../..";

describe("Schema.Union", () => {
  describe("should return UnionSchema", () => {
    const schemas = [Schema.Number(), Schema.String(), Schema.Object({ foo: Schema.Literal("bar") })];
    const schema = Schema.Union(schemas);
    expect(schema.__kind).to.be.eq("Union");
    expect(schema.anyOf).to.be.deep.eq(schemas);
  });
});

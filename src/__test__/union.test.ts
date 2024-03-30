import { expect } from "chai";
import { S } from "..";

describe("S.Union", () => {
  describe("should return UnionSchema", () => {
    const schemas = [S.Number(), S.String(), S.Object({ foo: S.Literal("bar") })];
    const schema = S.Union(schemas);

    expect(schema.__kind).to.be.eq("Union");
    expect(schema.anyOf).to.be.deep.eq(schemas);
  });
});

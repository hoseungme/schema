import { expect } from "chai";
import { S } from "../..";

describe("S.Union()", () => {
  describe("should return UnionSchema", () => {
    const schemas = [S.Number(), S.String()];
    const schema = S.Union(schemas);

    expect(schema.anyOf).to.be.deep.eq(schemas);
  });

  it("should be correctly stringified", () => {
    const schema = S.Union([S.Number(), S.String()]);

    expect(JSON.stringify(schema)).to.be.eq(
      JSON.stringify({
        anyOf: [{ type: "number" }, { type: "string" }],
      })
    );
  });
});

describe("S.isUnion()", () => {
  it("should return true only for UnionSchema", () => {
    expect(S.isUnion(S.Union([S.Number(), S.String()]))).to.be.eq(true);
    expect(S.isUnion(S.Number())).to.be.eq(false);
  });
});

describe("S.Union().match()", () => {
  it("should return true only for correct value", () => {
    const schema = S.Union([S.Number(), S.String()]);

    expect(schema.match(123)).to.be.eq(true);
    expect(schema.match("foo")).to.be.eq(true);
    expect(schema.match(true)).to.be.eq(false);
  });
});

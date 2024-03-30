import { expect } from "chai";
import { S } from "../..";

describe("S.Boolean()", () => {
  it("should return correct BooleanSchema", () => {
    const schema = S.Boolean();

    expect(schema.type).to.be.eq("boolean");
  });

  it("should be correctly stringified", () => {
    const schema = S.Boolean();

    expect(JSON.stringify(schema)).to.be.eq(JSON.stringify({ type: "boolean" }));
  });
});

describe("S.isBoolean()", () => {
  it("should return true only for BooleanSchema", () => {
    expect(S.isBoolean(S.Boolean())).to.be.eq(true);
    expect(S.isBoolean(S.Number())).to.be.eq(false);
  });
});

describe("S.Boolean().match()", () => {
  it("should return true only for correct value", () => {
    const schema = S.Boolean();

    expect(schema.match(true)).to.be.eq(true);
    expect(schema.match(false)).to.be.eq(true);
    expect(schema.match(123)).to.be.eq(false);
    expect(schema.match("foo")).to.be.eq(false);
  });
});

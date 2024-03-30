import { expect } from "chai";
import { S } from "../..";

describe("S.Literal()", () => {
  it("should return correct LiteralSchema", () => {
    const schema = S.Literal("foo");

    expect(schema.type).to.be.eq("string");
    expect(schema.const).to.be.eq("foo");
  });

  it("should be correctly stringified", () => {
    const schema = S.Literal(123);

    expect(JSON.stringify(schema)).to.be.eq(JSON.stringify({ type: "number", const: 123 }));
  });
});

describe("S.isLiteral()", () => {
  it("should return true only for LiteralSchema", () => {
    expect(S.isLiteral(S.Literal(123))).to.be.eq(true);
    expect(S.isLiteral(S.Number())).to.be.eq(false);
  });
});

describe("S.Literal().match()", () => {
  it("should return true only for correct value", () => {
    const schema = S.Literal(123);

    expect(schema.match(123)).to.be.eq(true);
    expect(schema.match(456)).to.be.eq(false);
    expect(schema.match("foo")).to.be.eq(false);
  });
});

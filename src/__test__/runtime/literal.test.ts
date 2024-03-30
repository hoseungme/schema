import { expect } from "chai";
import { S } from "../..";

describe("S.Literal", () => {
  it("should return correct LiteralSchema", () => {
    const schema = S.Literal("foo");

    expect(schema.__kind).to.be.eq("Literal");
    expect(schema.type).to.be.eq("string");
    expect(schema.const).to.be.eq("foo");
  });
});

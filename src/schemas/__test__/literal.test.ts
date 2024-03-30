import { expect } from "chai";
import { Schema } from "../..";

describe("Schema.Literal", () => {
  it("should return correct LiteralSchema", () => {
    const schema = Schema.Literal("foo");

    expect(schema.__kind).to.be.eq("Literal");
    expect(schema.type).to.be.eq("string");
    expect(schema.const).to.be.eq("foo");
  });
});

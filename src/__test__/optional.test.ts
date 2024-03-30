import { expect } from "chai";
import { Schema } from "..";

describe("Schema.Optional", () => {
  it("should return correct OptionalSchema", () => {
    const schema = Schema.Optional(Schema.Number());

    expect(schema.__kind).to.be.eq("Number");
    expect(schema.__optional).to.be.eq("Optional");
    expect(schema.type).to.be.eq("number");
  });
});

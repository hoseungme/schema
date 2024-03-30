import { expect } from "chai";
import { Schema } from "..";

describe("Schema.String", () => {
  it("should return correct StringSchema", () => {
    const schema = Schema.String();

    expect(schema.__kind).to.be.eq("String");
    expect(schema.type).to.be.eq("string");
  });
});

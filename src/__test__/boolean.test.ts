import { expect } from "chai";
import { Schema } from "..";

describe("Schema.Boolean", () => {
  it("should return correct BooleanSchema", () => {
    const schema = Schema.Boolean();

    expect(schema.__kind).to.be.eq("Boolean");
    expect(schema.type).to.be.eq("boolean");
  });
});

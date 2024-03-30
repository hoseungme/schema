import { expect } from "chai";
import { Schema } from "..";

describe("Schema.Null", () => {
  it("should return correct NullSchema", () => {
    const schema = Schema.Null();

    expect(schema.__kind).to.be.eq("Null");
    expect(schema.type).to.be.eq("null");
  });
});

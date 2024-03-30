import { expect } from "chai";
import { Schema } from "..";

describe("Schema.Number", () => {
  it("should return correct NumberSchema", () => {
    const schema = Schema.Number();

    expect(schema.__kind).to.be.eq("Number");
    expect(schema.type).to.be.eq("number");
  });
});

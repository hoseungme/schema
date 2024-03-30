import { expect } from "chai";
import { S } from "../..";

describe("S.Boolean", () => {
  it("should return correct BooleanSchema", () => {
    const schema = S.Boolean();

    expect(schema.__kind).to.be.eq("Boolean");
    expect(schema.type).to.be.eq("boolean");
  });
});

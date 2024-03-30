import { expect } from "chai";
import { S } from "..";

describe("S.Null", () => {
  it("should return correct NullSchema", () => {
    const schema = S.Null();

    expect(schema.__kind).to.be.eq("Null");
    expect(schema.type).to.be.eq("null");
  });
});

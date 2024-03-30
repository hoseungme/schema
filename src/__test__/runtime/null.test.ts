import { expect } from "chai";
import { S } from "../..";

describe("S.Null", () => {
  it("should return correct NullSchema", () => {
    const schema = S.Null();

    expect(schema.type).to.be.eq("null");
  });

  it("should be correctly stringified", () => {
    const schema = S.Null();

    expect(JSON.stringify(schema)).to.be.eq(JSON.stringify({ type: "null" }));
  });
});

describe("S.isNull", () => {
  it("should return true only for NullSchema", () => {
    expect(S.isNull(S.Null())).to.be.eq(true);
    expect(S.isNull(S.Number())).to.be.eq(false);
  });
});

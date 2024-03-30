import { expect } from "chai";
import { S } from "../..";

describe("S.Boolean", () => {
  it("should return correct BooleanSchema", () => {
    const schema = S.Boolean();

    expect(schema.type).to.be.eq("boolean");
  });

  it("should be correctly stringified", () => {
    const schema = S.Boolean();

    expect(JSON.stringify(schema)).to.be.eq(JSON.stringify({ type: "boolean" }));
  });
});

describe("S.isBoolean", () => {
  it("should return true only for BooleanSchema", () => {
    expect(S.isBoolean(S.Boolean())).to.be.eq(true);
    expect(S.isBoolean(S.Number())).to.be.eq(false);
  });
});

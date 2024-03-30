import { expect } from "chai";
import { S } from "../..";

describe("S.String", () => {
  it("should return correct StringSchema", () => {
    const schema = S.String();

    expect(schema.type).to.be.eq("string");
  });

  it("should be correctly stringified", () => {
    const schema = S.String();

    expect(JSON.stringify(schema)).to.be.eq(JSON.stringify({ type: "string" }));
  });
});

describe("S.isString", () => {
  it("should return true only for StringSchema", () => {
    expect(S.isString(S.String())).to.be.eq(true);
    expect(S.isString(S.Number())).to.be.eq(false);
  });
});

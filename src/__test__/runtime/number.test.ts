import { expect } from "chai";
import { S } from "../..";

describe("S.Number()", () => {
  it("should return correct NumberSchema", () => {
    const schema = S.Number();

    expect(schema.type).to.be.eq("number");
  });

  it("should be correctly stringified", () => {
    const schema = S.Number();

    expect(JSON.stringify(schema)).to.be.eq(JSON.stringify({ type: "number" }));
  });
});

describe("S.isNumber()", () => {
  it("should return true only for NumberSchema", () => {
    expect(S.isNumber(S.Number())).to.be.eq(true);
    expect(S.isNumber(S.String())).to.be.eq(false);
  });
});

describe("S.Number().match()", () => {
  it("should return true only for correct value", () => {
    const schema = S.Number();

    expect(schema.match(123)).to.be.eq(true);
    expect(schema.match("foo")).to.be.eq(false);
  });
});

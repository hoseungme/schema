import { expect } from "chai";
import { S } from "../..";

describe("S.Optional", () => {
  it("should return correct OptionalSchema", () => {
    const schema = S.Optional(S.Number());

    expect(schema.type).to.be.eq("number");
  });

  it("should be correctly stringified", () => {
    const schema = S.Optional(S.Number());

    expect(JSON.stringify(schema)).to.be.eq(JSON.stringify({ type: "number" }));
  });
});

describe("S.isOptional", () => {
  it("should return true only for OptionalSchema", () => {
    expect(S.isOptional(S.Optional(S.Number()))).to.be.eq(true);
    expect(S.isOptional(S.Number())).to.be.eq(false);
  });
});

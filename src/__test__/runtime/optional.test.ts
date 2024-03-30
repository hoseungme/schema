import { expect } from "chai";
import { S } from "../..";

describe("S.Optional", () => {
  it("should return correct OptionalSchema", () => {
    const schema = S.Optional(S.Number());

    expect(schema.__kind).to.be.eq("Number");
    expect(schema.__optional).to.be.eq("Optional");
    expect(schema.type).to.be.eq("number");
  });
});

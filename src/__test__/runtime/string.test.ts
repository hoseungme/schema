import { expect } from "chai";
import { S } from "../..";

describe("S.String", () => {
  it("should return correct StringSchema", () => {
    const schema = S.String();

    expect(schema.__kind).to.be.eq("String");
    expect(schema.type).to.be.eq("string");
  });
});

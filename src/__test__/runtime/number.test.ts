import { expect } from "chai";
import { S } from "../..";

describe("S.Number", () => {
  it("should return correct NumberSchema", () => {
    const schema = S.Number();

    expect(schema.__kind).to.be.eq("Number");
    expect(schema.type).to.be.eq("number");
  });
});

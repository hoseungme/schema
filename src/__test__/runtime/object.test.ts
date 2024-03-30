import { expect } from "chai";
import { S } from "../..";

describe("S.Object", () => {
  it("should return correct ObjectSchema", () => {
    const properties = {
      foo: S.Literal("bar"),
      num: S.Optional(S.Number()),
    };
    const schema = S.Object(properties);

    expect(schema.__kind).to.be.eq("Object");
    expect(schema.type).to.be.eq("object");
    expect(schema.properties).to.be.deep.eq(properties);
    expect(schema.required).to.be.deep.eq(["foo"]);
  });
});

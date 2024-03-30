import { expect } from "chai";
import { Schema } from "../..";

describe("Schema.Object", () => {
  it("should return correct ObjectSchema", () => {
    const properties = {
      foo: Schema.Literal("bar"),
      num: Schema.Optional(Schema.Number()),
    };
    const schema = Schema.Object(properties);

    expect(schema.__kind).to.be.eq("Object");
    expect(schema.type).to.be.eq("object");
    expect(schema.properties).to.be.deep.eq(properties);
    expect(schema.required).to.be.deep.eq(["foo"]);
  });
});

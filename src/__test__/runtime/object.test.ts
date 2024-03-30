import { expect } from "chai";
import { S } from "../..";

describe("S.Object", () => {
  it("should return correct ObjectSchema", () => {
    const properties = {
      a: S.Number(),
      b: S.Optional(S.String()),
    };
    const schema = S.Object(properties);

    expect(schema.type).to.be.eq("object");
    expect(schema.properties).to.be.deep.eq(properties);
    expect(schema.required).to.be.deep.eq(["a"]);
  });

  it("should be correctly stringified", () => {
    const schema = S.Object({
      a: S.Number(),
      b: S.Optional(S.String()),
    });

    expect(JSON.stringify(schema)).to.be.eq(
      JSON.stringify({
        type: "object",
        properties: {
          a: { type: "number" },
          b: { type: "string" },
        },
        required: ["a"],
      })
    );
  });
});

describe("S.isObject", () => {
  it("should return true only for ObjectSchema", () => {
    expect(
      S.isObject(
        S.Object({
          a: S.Number(),
          b: S.Optional(S.String()),
        })
      )
    ).to.be.eq(true);
    expect(S.isObject(S.Number())).to.be.eq(false);
  });
});

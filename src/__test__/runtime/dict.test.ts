import { expect } from "chai";
import { S } from "../..";

describe("S.Dict", () => {
  it("should return correct DictSchema", () => {
    const numberSchema = S.Number();
    const dictSchema = S.Dict(numberSchema);

    expect(dictSchema.type).to.be.eq("object");
    expect(dictSchema.properties).to.be.deep.eq({});
    expect(dictSchema.additionalProperties).to.be.deep.eq(numberSchema);
  });

  it("should be correctly stringified", () => {
    const schema = S.Dict(S.Number());

    expect(JSON.stringify(schema)).to.be.eq(
      JSON.stringify({
        type: "object",
        properties: {},
        additionalProperties: { type: "number" },
      })
    );
  });
});

describe("S.isDict", () => {
  it("should return true only for DictSchema", () => {
    expect(S.isDict(S.Dict(S.Number()))).to.be.eq(true);
    expect(S.isDict(S.Number())).to.be.eq(false);
  });
});

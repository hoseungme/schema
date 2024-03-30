import { expect } from "chai";
import { S } from "..";

describe("S.Dict", () => {
  it("should return correct DictSchema", () => {
    const numberSchema = S.Number();
    const dictSchema = S.Dict(numberSchema);

    expect(dictSchema.__kind).to.be.eq("Dict");
    expect(dictSchema.type).to.be.eq("object");
    expect(dictSchema.properties).to.be.deep.eq({});
    expect(dictSchema.additionalProperties).to.be.deep.eq(numberSchema);
  });
});

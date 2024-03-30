import { expect } from "chai";
import { Schema } from "..";

describe("Schema.Dict", () => {
  it("should return correct DictSchema", () => {
    const numberSchema = Schema.Number();
    const dictSchema = Schema.Dict(numberSchema);

    expect(dictSchema.__kind).to.be.eq("Dict");
    expect(dictSchema.type).to.be.eq("object");
    expect(dictSchema.properties).to.be.deep.eq({});
    expect(dictSchema.additionalProperties).to.be.deep.eq(numberSchema);
  });
});

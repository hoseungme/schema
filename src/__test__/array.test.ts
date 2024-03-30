import { expect } from "chai";
import { S } from "..";

describe("S.Array", () => {
  it("should return correct ArraySchema", () => {
    const numberSchema = S.Number();
    const arraySchema = S.Array(numberSchema);

    expect(arraySchema.__kind).to.be.eq("Array");
    expect(arraySchema.type).to.be.eq("array");
    expect(arraySchema.items).to.be.deep.eq(numberSchema);
  });
});

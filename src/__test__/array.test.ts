import { expect } from "chai";
import { Schema } from "..";

describe("Schema.Array", () => {
  it("should return correct ArraySchema", () => {
    const numberSchema = Schema.Number();
    const arraySchema = Schema.Array(numberSchema);

    expect(arraySchema.__kind).to.be.eq("Array");
    expect(arraySchema.type).to.be.eq("array");
    expect(arraySchema.items).to.be.deep.eq(numberSchema);
  });
});

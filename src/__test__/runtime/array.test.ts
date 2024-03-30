import { expect } from "chai";
import { S } from "../..";

describe("S.Array()", () => {
  it("should return correct ArraySchema", () => {
    const numberSchema = S.Number();
    const arraySchema = S.Array(numberSchema);

    expect(arraySchema.type).to.be.eq("array");
    expect(arraySchema.items).to.be.deep.eq(numberSchema);
  });

  it("should be correctly stringified", () => {
    const schema = S.Array(S.Number());

    expect(JSON.stringify(schema)).to.be.eq(
      JSON.stringify({
        type: "array",
        items: { type: "number" },
      })
    );
  });
});

describe("S.isArray()", () => {
  it("should return true only for ArraySchema", () => {
    expect(S.isArray(S.Array(S.Number()))).to.be.eq(true);
    expect(S.isArray(S.Number())).to.be.eq(false);
  });
});

describe("S.Array().match()", () => {
  it("should return true only for correct value", () => {
    const schema = S.Array(S.Number());

    expect(schema.match([1, 2, 3])).to.be.eq(true);
    expect(schema.match(["a", "b", "c"])).to.be.eq(false);
    expect(schema.match([1, 2, 3, "a", "b", "c"])).to.be.eq(false);
  });
});

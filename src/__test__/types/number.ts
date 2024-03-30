import { S } from "../..";
import { expect, unknownValue } from "./utils/assert";

expect.schema(S.Number()).toBeResolved<number>();

if (S.Number().match(unknownValue)) {
  expect(unknownValue).toBe<number>();
}

import { S } from "../..";
import { expect, unknownValue } from "./utils/assert";

expect.schema(S.Boolean()).toBeResolved<boolean>();

if (S.Boolean().match(unknownValue)) {
  expect(unknownValue).toBe<boolean>();
}

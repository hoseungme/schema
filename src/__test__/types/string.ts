import { S } from "../..";
import { expect, unknownValue } from "./utils/assert";

expect.schema(S.String()).toBeResolved<string>();

if (S.String().match(unknownValue)) {
  expect(unknownValue).toBe<string>();
}

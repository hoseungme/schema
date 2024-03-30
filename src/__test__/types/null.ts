import { S } from "../..";
import { expect, unknownValue } from "./utils/assert";

expect.schema(S.Null()).toBeResolved<null>();

if (S.Null().match(unknownValue)) {
  expect(unknownValue).toBe<null>();
}

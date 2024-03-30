import { S } from "../..";
import { expect, unknownValue } from "./utils/assert";

expect.schema(S.Literal(123)).toBeResolved<123>();

expect.schema(S.Literal("foo")).toBeResolved<"foo">();

expect.schema(S.Literal(true)).toBeResolved<true>();

if (S.Literal(123).match(unknownValue)) {
  expect(unknownValue).toBe<123>();
}

if (S.Literal("foo").match(unknownValue)) {
  expect(unknownValue).toBe<"foo">();
}

if (S.Literal(true).match(unknownValue)) {
  expect(unknownValue).toBe<true>();
}

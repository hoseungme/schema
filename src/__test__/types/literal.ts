import { S } from "../..";
import { expect } from "./utils/assert";

expect(S.Literal(123)).toBeResolved<123>();

expect(S.Literal("foo")).toBeResolved<"foo">();

expect(S.Literal(true)).toBeResolved<true>();

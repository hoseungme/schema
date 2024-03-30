import { Schema } from "../..";
import { expect } from "./utils/assert";

expect(Schema.Literal(123)).toBeResolved<123>();

expect(Schema.Literal("foo")).toBeResolved<"foo">();

expect(Schema.Literal(true)).toBeResolved<true>();

import { Schema } from "..";
import { expect } from "./utils/assert";

expect(Schema.Null()).toBeResolved<null>();

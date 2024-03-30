import { Schema } from "../..";
import { expect } from "./utils/assert";

expect(Schema.Boolean()).toBeResolved<boolean>();

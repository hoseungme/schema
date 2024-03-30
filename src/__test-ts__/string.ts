import { Schema } from "..";
import { expect } from "./utils/assert";

expect(Schema.String()).toBeResolved<string>();

import { Schema } from "..";
import { expect } from "./utils/assert";

expect(Schema.Number()).toBeResolved<number>();

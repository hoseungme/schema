import { Schema } from "../..";
import { Resolve } from "../../../dist";

export function expect<T extends Schema>(schema: T) {
  function toBeResolved<R extends Resolve<T>>() {}

  return { toBeResolved };
}

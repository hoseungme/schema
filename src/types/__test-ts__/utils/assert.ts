import { Resolve, Schema } from "../..";

export function expect<T extends Schema>(schema: T) {
  function toBeResolved<R extends Resolve<T>>() {}

  return { toBeResolved };
}

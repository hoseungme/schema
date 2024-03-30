import { S } from "../..";

export function expect<T extends S.Any>(schema: T) {
  function toBeResolved<R extends S.Resolve<T>>() {}

  return { toBeResolved };
}

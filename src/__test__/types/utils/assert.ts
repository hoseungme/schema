import { S } from "../../..";

export function expect<T>(value: T) {
  function toBe<R extends T>() {}

  return { toBe };
}
expect.schema = schema;

function schema<T extends S.Any>(value: T) {
  function toBeResolved<R extends S.Resolve<T>>() {}

  return { toBeResolved };
}

export const unknownValue: unknown = {};

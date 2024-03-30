import { Schema } from "./types";

export function toJSON<T extends Schema>(this: T) {
  return JSON.stringify(Object.fromEntries(Object.entries(this).filter(([key]) => !key.startsWith("__"))));
}

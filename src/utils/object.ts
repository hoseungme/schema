export function objectEntries<T extends Record<string | number, any>>(obj: T) {
  return Object.entries(obj) as Array<[keyof T, T[keyof T]]>;
}

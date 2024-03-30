export interface Schema {
  __kind: string;
  __resolved: unknown;
}

export type Resolve<T extends Schema> = T["__resolved"];

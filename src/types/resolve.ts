import { Schema } from "./schema";

export type Resolve<T extends Schema> = T["__resolved"];

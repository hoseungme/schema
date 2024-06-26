import { S } from ".";
import { Symbols } from "./symbols";

export type MatchFunc<T> = (value: any) => value is T;

export interface Schema {
  [key: typeof Symbols.Kind]: string;
  match: MatchFunc<any>;
}

export type ResolveSchema<T extends Schema> = T extends S.Number
  ? S.Number.Resolve
  : T extends S.String
  ? S.String.Resolve
  : T extends S.Boolean
  ? S.Boolean.Resolve
  : T extends S.Null
  ? S.Null.Resolve
  : T extends S.Array
  ? S.Array.Resolve<T>
  : T extends S.Object
  ? S.Object.Resolve<T>
  : T extends S.Literal
  ? S.Literal.Resolve<T>
  : T extends S.Union
  ? S.Union.Resolve<T>
  : T extends S.Dict
  ? S.Dict.Resolve<T>
  : unknown;

import { Number, NumberSchema } from "./number";
import { String, StringSchema } from "./string";
import { Boolean, BooleanSchema } from "./boolean";
import { Array, ArraySchema } from "./array";
import { Object, ObjectSchema } from "./object";
import { Null, NullSchema } from "./null";
import { Literal, LiteralSchema } from "./literal";
import { Optional, OptionalSchema } from "./optional";
import { Union, UnionSchema } from "./union";
import { Dict, DictSchema } from "./dict";

export const Schema = {
  Number,
  String,
  Boolean,
  Array,
  Object,
  Null,
  Literal,
  Optional,
  Union,
  Dict,
};

export type AllSchema =
  | NumberSchema
  | StringSchema
  | BooleanSchema
  | ArraySchema
  | ObjectSchema
  | NullSchema
  | LiteralSchema
  | OptionalSchema
  | UnionSchema
  | DictSchema;

export type {
  NumberSchema,
  StringSchema,
  BooleanSchema,
  ArraySchema,
  ObjectSchema,
  NullSchema,
  LiteralSchema,
  OptionalSchema,
  UnionSchema,
  DictSchema,
};

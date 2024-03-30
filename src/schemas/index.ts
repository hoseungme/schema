import { createNumberSchema, NumberSchema } from "./number";
import { createStringSchema, StringSchema } from "./string";
import { createBooleanSchema, BooleanSchema } from "./boolean";
import { createArraySchema, ArraySchema } from "./array";
import { createObjectSchema, ObjectSchema } from "./object";
import { createNullSchema, NullSchema } from "./null";
import { createLiteralSchema, LiteralSchema } from "./literal";
import { createOptionalSchema, OptionalSchema } from "./optional";
import { createUnionSchema, UnionSchema } from "./union";
import { createDictSchema, DictSchema } from "./dict";
import { Schema, Resolve } from "./types";

export const S = {
  Number: createNumberSchema,
  String: createStringSchema,
  Boolean: createBooleanSchema,
  Array: createArraySchema,
  Object: createObjectSchema,
  Null: createNullSchema,
  Literal: createLiteralSchema,
  Optional: createOptionalSchema,
  Union: createUnionSchema,
  Dict: createDictSchema,
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
  Schema,
  Resolve,
};

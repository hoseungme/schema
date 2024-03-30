import { createNumberSchema, isNumberSchema, NumberSchema, ResolveNumberSchema } from "./number";
import { createStringSchema, isStringSchema, ResolveStringSchema, StringSchema } from "./string";
import { createBooleanSchema, BooleanSchema, ResolveBooleanSchema, isBooleanSchema } from "./boolean";
import { createArraySchema, ArraySchema, ResolveArrayScehma, isArraySchema } from "./array";
import { createObjectSchema, isObjectSchema, ObjectSchema, Properties, ResolveObjectSchema } from "./object";
import { createNullSchema, isNullSchema, NullSchema, ResolveNullSchema } from "./null";
import { createLiteralSchema, isLiteralSchema, LiteralSchema, LiteralValue, ResolveLiteralSchema } from "./literal";
import { createOptionalSchema, isOptionalSchema, OptionalSchema } from "./optional";
import { createUnionSchema, isUnionSchema, ResolveUnionSchema, UnionSchema } from "./union";
import { createDictSchema, DictSchema, isDictSchema, ResolveDictSchema } from "./dict";
import { ResolveSchema, Schema } from "./types";

export const S = {
  Number: createNumberSchema,
  String: createStringSchema,
  Boolean: createBooleanSchema,
  Null: createNullSchema,
  Array: createArraySchema,
  Object: createObjectSchema,
  Literal: createLiteralSchema,
  Optional: createOptionalSchema,
  Union: createUnionSchema,
  Dict: createDictSchema,

  isNumber: isNumberSchema,
  isString: isStringSchema,
  isBoolean: isBooleanSchema,
  isNull: isNullSchema,
  isArray: isArraySchema,
  isObject: isObjectSchema,
  isLiteral: isLiteralSchema,
  isOptional: isOptionalSchema,
  isUnion: isUnionSchema,
  isDict: isDictSchema,
};

export namespace S {
  export type Any = Number | String | Boolean | Null | Array | Object | Literal | Optional | Union | Dict;
  export type Resolve<T extends Any> = ResolveSchema<T>;

  export type Number = NumberSchema;
  export namespace Number {
    export type Resolve = ResolveNumberSchema;
  }

  export type String = StringSchema;
  export namespace String {
    export type Resolve = ResolveStringSchema;
  }

  export type Boolean = BooleanSchema;
  export namespace Boolean {
    export type Resolve = ResolveBooleanSchema;
  }

  export type Null = NullSchema;
  export namespace Null {
    export type Resolve = ResolveNullSchema;
  }

  export type Array<T extends Schema = Schema> = ArraySchema<T>;
  export namespace Array {
    export type Resolve<T extends ArraySchema> = ResolveArrayScehma<T>;
  }

  export type Object<T extends Properties = Properties> = ObjectSchema<T>;
  export namespace Object {
    export type Resolve<T extends ObjectSchema> = ResolveObjectSchema<T>;
  }

  export type Literal<T extends LiteralValue = LiteralValue> = LiteralSchema<T>;
  export namespace Literal {
    export type Resolve<T extends LiteralSchema> = ResolveLiteralSchema<T>;
  }

  export type Optional<T extends Schema = Schema> = OptionalSchema<T>;

  export type Union<T extends Schema = Schema> = UnionSchema<T>;
  export namespace Union {
    export type Resolve<T extends UnionSchema> = ResolveUnionSchema<T>;
  }

  export type Dict<T extends Schema = Schema> = DictSchema<T>;
  export namespace Dict {
    export type Resolve<T extends DictSchema> = ResolveDictSchema<T>;
  }
}

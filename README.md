<div align="center">

<h1>Schema</h1>

<p>JSON schema builder for TypeScript</p>

<br/>
<br/>

</div>

## Install

```
$ npm install @hoseung.json/schema
```

## Usage

```typescript
import { S } from "@hoseung.json/schema";

// {
//   type: "object",
//   properties: {
//     id: {
//       type: "number"
//     },
//     name: {
//       type: "string"
//     }
//   }
//   required: [
//     "id",
//     "name"
//   ]
// }
const User = S.Object({
  id: S.Number(),
  name: S.String(),
});

// {
//   id: number;
//   name: string;
// }
type User = S.Resolve<typeof User>;

if (User.match(unknownValue)) {
  // type of unknownValue is:
  // {
  //   id: number;
  //   name: string;
  // }
}
```

## Contents

- [JSON Schema](#json-schema)
  - [Number()](#number)
  - [String()](#string)
  - [Boolean()](#boolean)
  - [Null()](#null)
  - [Array()](#array)
  - [Object()](#object)
  - [Literal()](#literal)
  - [Optional()](#optional)
  - [Union()](#union)
  - [Dict()](#dict)
- [Validate Schema](#validate-schema)
- [Match Value](#match-value)

## JSON Schema

You can create a JSON schema using functions below.

### Number()

A function which creates a number JSON schema

```typescript
// {
//   type: "number"
// }
const Num = S.Number();

// number
type Num = S.Resolve<typeof Num>;
```

### String()

A function which creates a string JSON schema

```typescript
// {
//   type: "string"
// }
const Str = S.String();

// string
type Str = S.Resolve<typeof Str>;
```

### Boolean()

A function which creates a boolean JSON schema

```typescript
// {
//   type: "boolean"
// }
const Bool = S.Boolean();

// boolean
type Bool = S.Resolve<typeof Bool>;
```

### Null()

A function which creates a null JSON schema

```typescript
// {
//   type: "null"
// }
const Null = S.Null();

// null
type Null = S.Resolve<typeof Null>;
```

### Array()

A function which creates an array JSON schema

```typescript
// {
//   type: "array",
//   items: {
//     type: "number"
//   }
// }
const Array = S.Array(S.Number());

// number[]
type Array = S.Resolve<typeof Array>;
```

### Object()

A function which creates an object JSON schema

```typescript
// {
//   type: "object",
//   properties: {
//     a: {
//       type: "number"
//     },
//     b: {
//       type: "string"
//     }
//   },
//   required: [
//     "a",
//     "b"
//   ]
// }
const Obj = S.Object({
  a: S.Number(),
  b: S.String(),
});

// {
//   a: number;
//   b: string;
// }
type Obj = S.Resolve<typeof Obj>;
```

### Literal()

A function which creates a number/string/boolean JSON schema with constant value

```typescript
// {
//   type: "number",
//   const: "foo"
// }
const Literal = S.Literal(123);

// 123
type Literal = S.Resolve<typeof Literal>;
```

```typescript
// {
//   type: "string",
//   const: "foo"
// }
const Literal = S.Literal("foo");

// "foo"
type Literal = S.Resolve<typeof Literal>;
```

```typescript
// {
//   type: "boolean",
//   const: true
// }
const Literal = S.Literal(true);

// true
type Literal = S.Resolve<typeof Literal>;
```

### Optional()

A function which marks a property in an object JSON schema as optional

```typescript
// {
//   type: "object",
//   properties: {
//     a: {
//       type: "number"
//     },
//     b: {
//       type: "string"
//     }
//   },
//   required: [
//     "a"
//   ]
// }
const Optional = S.Object({
  a: S.Number(),
  b: S.Optional(S.String()),
});

// {
//   a: number;
//   b?: string;
// }
type Optional = S.Resolve<typeof Optional>;
```

### Union()

A function which creates an anyOf JSON schema

```typescript
// {
//   anyOf: [
//     {
//       type: "number"
//     },
//     {
//       type: "string"
//     }
//   ]
// }
const Union = S.Union([S.Number(), S.String()]);

// number | string
type Union = S.Resolve<typeof Union>;
```

### Dict()

A function which creates an object JSON schema only with additionalProps

```typescript
// {
//   type: "object",
//   properties: {},
//   additionalProperties: {
//     type: "number"
//   }
// }
const Dict = S.Dict(S.Number());

// {
//   [key: string]: number;
// }
type Dict = S.Resolve<typeof Dict>;
```

## Validate Schema

You may need to validate what kind of a Schema is. So there are validation function which named `is{Schema Name}` for [all kinds of Schema](#json-schema).

```typescript
S.isNumber(S.Number()); // true
S.isNumber(S.String()); // false

if (S.isNumber(unknownSchema)) {
  // type of unknownSchema is NumberSchema
}
```

## Match Value

You may need to validate if a value matches a Schema. So [all kinds of Schema](#json-schema) have `match` function.

```typescript
const Locale = S.Union([S.Literal("ko"), S.Literal("en")]);

if (Locale.match(unknownValue)) {
  // type of unknownValue is "ko" | "en"
}
```

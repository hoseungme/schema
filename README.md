<div align="center">

<h1>Schema</h1>

<p>JSON schema builder for TypeScript</p>

<br/>
<br/>

</div>

```
$ npm install @hoseung.json/schema
```

```typescript
import { Schema, Resolve } from "@hoseung.json/schema";

// {
//   type: "object",
//   properties: {
//     id: { type: "number" },
//     name: { type: "string" }
//   }
//   required: ["id", "name"]
// }
const User = Schema.Object({
  id: Schema.Number(),
  name: Schema.String(),
});

// {
//   id: number;
//   name: string;
// }
type User = Resolve<typeof User>;
```

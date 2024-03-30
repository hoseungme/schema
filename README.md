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
import { S } from "@hoseung.json/schema";

// {
//   type: "object",
//   properties: {
//     id: { type: "number" },
//     name: { type: "string" }
//   }
//   required: ["id", "name"]
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
```

# ohmyts

An automated tool help you to transform backend json data to TypeScript type.


# Quick Start

## Vite

### install
```bash
npm i @ohmyts/vite -D
```

### 🤽playground
[playground](https://stackblitz.com/edit/vitejs-vite-e1juy2?file=vite.config.ts&terminal=dev)

### usage

#### `vite.config.ts`
```ts
import { ohmytsVite } from '@ohmyts/vite'

const r = (p: string) => resolve(__dirname, p)

export default defineConfig({
  plugins: [
    ohmytsVite({
      target: '/api',
      rootDir: r('@types'),
      proxyOptions: {
        target: 'https://autumnfish.cn',
      },
    }),
  ]
})
```

#### `app.tsx` for more detail, please go [playground](https://stackblitz.com/edit/vitejs-vite-e1juy2?file=vite.config.ts&terminal=dev) to check
```tsx
import axios from 'axios'
import { defineComponent } from 'vue'

const App = defineComponent(() => {
  const { data } = useQuery(() => axios.get('/api/search?keywords=MELANCHOLY'))

  return () => (
    // ...
  )
})
```
for example, if the backend return as below

```json
{
  "data": 1
}
```

it will create `@types/GET_Search.d.ts` as below
```ts
declare interface IGETSearchResponseType {
  data: number
}
```

#### File naming rule
 `${options.rootDir}/${req.Method}_${pathname(req.url)}`

what is `pathname` function? for example

```ts
pathname('/api/search?keywords=hello') === 'ApiSearch'
```
#### Type naming rule

the rule of type name is `I${req.Method}${pathname(req.url)}${options.suffix}`


#### Type
```ts
import type { Plugin } from 'vite'

declare function ohmytsVite(options: OhmytsOptions | OhmytsOptions[]): Plugin
```

#### Options
```ts
import type { ServerOptions } from 'http-proxy'

export interface OhmytsOptions {
  /*
  * rewrite url
  */
  target: string
  /*
  * proxy server options
  *
  */
  proxyOptions: ServerOptions
  /*
  * the root dir path generate type file
  *
  * @default '@types/'
  */
  rootDir?: string
  /*
  * encoding
  *
  * @default 'utf-8'
  */
  encoding?: BufferEncoding
  /*
  * the suffix of generated root type
  *
  * @default 'ResponseType'
  */
  suffix?: string
  /*
  * should overwrite in next time
  *
  * @default true
  */
  overwrite?: boolean
  /*
  * use `declare` to decorate type or it will be `export`
  *
  * @default true
  */
  declare?: boolean
}
```

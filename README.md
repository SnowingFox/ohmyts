# ohmyts

## A tool help you to transform backend json data to TypeScript type.


## Quick Start

### Vite

## install
```bash
npm i @ohmyts/vite -D
```

## usage

### `vite.config.ts`
```ts
import { onmytsVite } from '@ohmyts/vite'

export default defineConfig({
  plugins: [
    ohmytsVite({
      url: '/api',
      rootDir: r('@types'),
      proxyOptions: {
        target: 'https://autumnfish.cn',
      },
    }),
  ]
})
```

### `app.tsx` for more detail, please go [playground/app.tsx](https://github.com/snowingfox/onmyts/blob/master/packages/playground/src/App.tsx) to check
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

### Options
```ts
export interface OhmytsOptions {
  /*
  * rewrite url
  */
  url: string
  /*
  * proxy server options
  *
  * @default
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
}
```

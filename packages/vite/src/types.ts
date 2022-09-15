import type { ServerOptions } from 'http-proxy'

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

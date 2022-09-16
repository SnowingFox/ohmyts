import * as fs from 'fs'
import type { IncomingMessage, ServerResponse } from 'http'
import { parseUrl, writeFileSyncRecursive } from '@ohmyts/shared'
import JsonToTS from 'json-to-ts'
import MagicString from 'magic-string'
import type { OhmytsOptions } from './types'

export const transformJSONToTs = (
  req: IncomingMessage,
  chunks: Uint8Array[],
  options: OhmytsOptions,
) => {
  const {
    suffix = 'ResponseType',
    encoding = 'utf-8',
    rootDir = '@types',
    overwrite = true,
    declare = true,
  } = options
  const name = parseUrl(req)
  let dir = rootDir

  if (rootDir.endsWith('/')) {
    const splitDir = rootDir.split('/')
    dir = splitDir.slice(0, splitDir.length - 1).join('')
  }

  dir = `${dir}/${name}`

  const isFileExist = fs.existsSync(dir)

  if (overwrite || !isFileExist) {
    try {
      const json = JSON.parse(Buffer.concat(chunks).toString(encoding))
      const code = new MagicString(JsonToTS(json).toLocaleString().replaceAll('},interface', '}\ninterface'))
      const typename = name.split('_')

      code.replace('interface RootObject', `${declare ? 'declare' : 'export'} interface I${typename[0]}${typename[1].replace('.d.ts', '')}${suffix}`)

      writeFileSyncRecursive(dir, code.toString())
    }
    catch (err) {
      // eslint-disable-next-line no-console
      console.log(`[ohmyts Error] ${(err as Error)}`)
    }
  }
}

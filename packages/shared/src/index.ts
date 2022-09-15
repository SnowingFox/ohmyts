import type { IncomingMessage } from 'http'
import parse from 'url-parse'

export * from './utils'

export const parseUrl = (req: IncomingMessage) => {
  const parsedUrl = parse(req.url!).pathname.split('/').map(name => `${(name[0] || '').toUpperCase()}${name.slice(1)}`).join('')
  return `${req.method!.toString().toUpperCase()}_${parsedUrl}.d.ts`
}

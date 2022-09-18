import type { IncomingMessage } from 'http'
import type http from 'http'
import events from 'events'
import type { Plugin } from 'vite'
import httpProxy from 'http-proxy'
import parse from 'url-parse'
import { transformJSONToTs } from './logic'
import type { OhmytsOptions } from './types'

const ee = events.EventEmitter

export function ohmytsVite(
  options: OhmytsOptions | OhmytsOptions[],
): Plugin {
  return {
    name: 'ohmyts',
    configureServer(server) {
      const proxy = httpProxy.createProxyServer()

      const proxyWeb = (req: IncomingMessage, res: http.ServerResponse, pathname: string, option: any) => {
        proxy.web(req, res, {
          changeOrigin: true,
          ...option.proxyOptions,
        })
      }

      ee.setMaxListeners(0)

      return () => {
        if (!Array.isArray(options))
          options = [options]

        for (const option of options) {
          server.middlewares.use(option.target, (req, res) => {
            const pathname = parse(req.url!).pathname

            proxyWeb(req, res, pathname, option)

            proxy.on('proxyRes', (proxyRes) => {
              const chunks: Uint8Array[] = []
              proxyRes.on('data', (chunk) => {
                chunks.push(chunk)
              })

              proxyRes.on('end', () => {
                transformJSONToTs(req, chunks, option)
              })
            })
          })
        }
      }
    },
  }
}

export * from './types'

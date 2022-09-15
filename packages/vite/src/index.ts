import type { Plugin } from 'vite'
import httpProxy from 'http-proxy'
import { transformJSONToTs } from './logic'
import type { OhmytsOptions } from './types'

export function ohmytsVite(
  options: OhmytsOptions,
): Plugin {
  return {
    name: 'ohmyts',
    configureServer(server) {
      return () => {
        const proxy = httpProxy.createProxyServer()
        server.middlewares.use(options.url, (req, res, next) => {
          proxy.web(req, res, {
            changeOrigin: true,
            ...options.proxyOptions,
          })

          proxy.on('proxyRes', (proxyRes) => {
            const chunks: Uint8Array[] = []
            proxyRes.on('data', (chunk) => {
              chunks.push(chunk)
            })

            proxyRes.on('end', () => {
              transformJSONToTs(req, chunks, options)
            })
          })

          next()
        })
      }
    },
  }
}

export * from './types'

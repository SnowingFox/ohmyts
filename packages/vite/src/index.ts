import type { Plugin } from 'vite'
import httpProxy from 'http-proxy'
import { transformJSONToTs } from './logic'
import type { OhmytsOptions } from './types'

export function ohmytsVite(
  options: OhmytsOptions | OhmytsOptions[],
): Plugin {
  return {
    name: 'ohmyts',
    configureServer(server) {
      return () => {
        const proxy = httpProxy.createProxyServer()
        if (!Array.isArray(options))
          options = [options]

        for (const option of options) {
          server.middlewares.use(option.target, (req, res) => {
            proxy.web(req, res, {
              changeOrigin: true,
              ...option.proxyOptions,
            })

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

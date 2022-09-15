import { URL, fileURLToPath } from 'node:url'
import { resolve } from 'path'
import { ohmytsVite } from '@ohmyts/vite'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'

const r = (p: string) => resolve(__dirname, p)

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    ohmytsVite({
      url: '/api',
      rootDir: r('@types'),
      proxyOptions: {
        target: 'https://autumnfish.cn',
      },
    }),
    vue(), vueJsx()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
})

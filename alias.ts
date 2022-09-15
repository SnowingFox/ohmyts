import { resolve } from 'path'

const r = (p: string) => resolve(__dirname, p)

export const alias: Record<string, string> = {
  '@ohmyts/vite': r('./packages/vite'),
  '@ohmyts/shared': r('./packages/shared'),
}

import { defineBuildConfig } from 'unbuild'

export default defineBuildConfig({
  entries: [
    'src/index',
  ],
  clean: true,
  declaration: true,
  externals: [
    'unconfig',
    'magic-string',
    'http-proxy',
    'json-to-ts',
    'url-parse',
    'vite',
  ],
  rollup: {
    emitCJS: true,
    inlineDependencies: true,
  },
})

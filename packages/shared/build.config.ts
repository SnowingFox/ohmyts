import { defineBuildConfig } from 'unbuild'

export default defineBuildConfig({
  entries: [
    'src/index',
  ],
  clean: true,
  declaration: true,
  externals: [
    'url-parse',
  ],
  rollup: {
    emitCJS: true,
    inlineDependencies: true,
  },
})

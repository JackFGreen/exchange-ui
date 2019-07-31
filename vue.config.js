const path = require('path')

module.exports = {
  productionSourceMap: false,
  configureWebpack: {
    resolve: {
      alias: {
        '@src': path.resolve(__dirname, './src'),
        '@packages': path.resolve(__dirname, './src/packages'),
        '@components': path.resolve(__dirname, './src/components'),
        '@tools': path.resolve(__dirname, './src/tools'),
        '@constant': path.resolve(__dirname, './src/constant'),
        '@submodules': path.resolve(__dirname, './submodules')
      }
    }
  }
}

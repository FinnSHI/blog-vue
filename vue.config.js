const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: [
    'vuetify'
  ],
  // devServer: {
  //   proxy: {
  //     '/api': {
  //       target: 'http://localhost:8080',
  //       ws: true,
  //       changeOrigin: true,
  //       pathRewrite: {
  //         '^/api': ''
  //       }
  //     }
  //   },
  //   disableHostCheck: true
  // },
  productionSourceMap: false,
  css: {
    extract: true,
    sourceMap: false
  }
})

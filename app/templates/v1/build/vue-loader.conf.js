var utils = require('./utils')
var config = require('../config')
var isProduction = process.env.NODE_ENV === 'production';
var ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
  loaders: utils.cssLoaders({
    sourceMap: isProduction
      ? config.build.productionSourceMap
      : config.dev.cssSourceMap,
    extractCSS: true,
    extract: isProduction,
    css: ExtractTextPlugin.extract({
      use: 'css-loader',
      fallback: 'vue-style-loader' // <- 这是vue-loader的依赖，所以如果使用npm3，则不需要显式安装
    })
  }),
  postcss: [
    require('postcss-cssnext')()
  ]
//require('autoprefixer')({
//    browsers: ['last 2 versions']
//  }),
}

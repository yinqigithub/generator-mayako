/**
 * @file vue-loader 配置文件
 * @author mayako(freedom21126@gmail.com)
 */

'use strict';

const utils = require('./utils');
const config = require('../config');
const isProduction = process.env.NODE_ENV === 'production';
var ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
    loaders: utils.cssLoaders({
        sourceMap: isProduction
            ? config.build.productionSourceMap
            : config.dev.cssSourceMap,

        // extract: isProduction
        extract: true,
        extractCSS: true,
        css: ExtractTextPlugin.extract({
      use: 'css-loader',
      fallback: 'vue-style-loader' // <- 这是vue-loader的依赖，所以如果使用npm3，则不需要显式安装
    })
    }),
    postcss: [
    require('postcss-cssnext')()
  ]
};

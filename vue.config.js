// vue.config.js
const path = require('path')
const HardSourceWebpackPlugin = require('hard-source-webpack-plugin')

module.exports = {
  chainWebpack: config => {
    /* mixin.scss 注入 */
    const types = ['vue-modules', 'vue', 'normal-modules', 'normal']
    types.forEach(type => addStyleResource(config.module.rule('scss').oneOf(type)))
    /* 缓存加入 */
    config.plugin('cache').use(HardSourceWebpackPlugin)
  },
}

function addStyleResource(rule) {
  rule.use('style-resource')
    .loader('style-resources-loader')
    .options({
      patterns: [
        path.resolve(__dirname, './src/assets/css/mixin.scss'),
      ],
    })
}
const { default: seoPlugin } = require("vuepress-plugin-seo2");

module.exports = {
  lang: 'en-US',
  title: 'Shriman Keshri',
  description: 'This is my first VuePress site',
  base: '',
  dest: '${sourceDir}/../dist/docs',
  plugins: [['@vuepress/back-to-top'],seoPlugin({}),]
}
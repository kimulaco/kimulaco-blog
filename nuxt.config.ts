import { Configuration } from '@nuxt/types'
import Sass from 'sass'
import Fiber from 'fibers'

const { siteTitle, createMeta } = require('./src/plugins/blog')

const config: Configuration = {
  mode: 'universal',
  head: {
    htmlAttrs: {
      lang: 'ja'
    },
    title: siteTitle,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width,initial-scale=1' },
      ...createMeta(),
      { hid: 'og:type', property: 'og:type', content: 'article' },
      { hid: 'og:image', property: 'og:image', content: '/img/profile.png' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },
  loading: false,
  css: ['normalize.css', '@/assets/scss/base.scss', '@/assets/scss/util.scss'],
  buildModules: [
    '@nuxtjs/eslint-module',
    '@nuxtjs/stylelint-module',
    '@nuxt/typescript-build'
  ],
  modules: [
    '@nuxtjs/style-resources',
    '@nuxtjs/svg-sprite',
    '@nuxtjs/google-analytics'
  ],
  styleResources: {
    scss: [
      '@/assets/scss/_define.scss',
      '@/assets/scss/_mixin.scss',
      '@/assets/scss/_extend.scss'
    ]
  },
  googleAnalytics: {
    id: 'UA-148174532-1'
  },
  srcDir: 'src',
  build: {
    extend(config, ctx) {}, // eslint-disable-line @typescript-eslint/no-unused-vars
    loaders: {
      scss: {
        implementation: Sass,
        sassOptions: {
          fiber: Fiber
        }
      }
    }
  }
}

export default config

import { Configuration } from '@nuxt/types'
import dotenv from 'dotenv'
import Sass from 'sass'
import Fiber from 'fibers'
import { siteTitle, createMeta, createPostRoutes } from './src/plugins/blog'

dotenv.config()

const { CMS_BASE_URL, CMS_API_KEY } = process.env

const config: Configuration = {
  mode: 'universal',
  env: {
    CMS_BASE_URL: CMS_BASE_URL || '',
    CMS_API_KEY: CMS_API_KEY || ''
  },
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
      { hid: 'og:image', property: 'og:image', content: '/img/profile.png' }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },
  loading: false,
  css: [
    'normalize.css',
    '@/assets/css/prism.css',
    '@/assets/scss/base.scss',
    '@/assets/scss/util.scss'
  ],
  buildModules: [
    '@nuxtjs/eslint-module',
    '@nuxtjs/stylelint-module',
    '@nuxt/typescript-build'
  ],
  modules: [
    '@nuxtjs/style-resources',
    '@nuxtjs/markdownit',
    '@nuxtjs/svg-sprite',
    '@nuxtjs/axios',
    '@nuxtjs/google-analytics',
    '@nuxtjs/pwa'
  ],
  plugins: ['@/plugins/filter', '@/plugins/axios', '@/plugins/markdownit'],
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
  generate: {
    routes: ['/', ...createPostRoutes()]
  },
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

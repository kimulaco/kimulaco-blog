import { Configuration } from '@nuxt/types'
import dotenv from 'dotenv'
import Sass from 'sass'
import Fiber from 'fibers'
import { SITE_TITLE, createMetaData } from './src/utils/blog'
import { createPostRoutes } from './scripts/blog'

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
    title: SITE_TITLE,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width,initial-scale=1' },
      { hid: 'og:type', property: 'og:type', content: 'article' },
      { hid: 'og:image', property: 'og:image', content: '/img/ogp.png' },
      ...createMetaData().meta
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/img/favicon.ico' }]
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
    async routes(): Promise<string[]> {
      const postRoutes = await createPostRoutes()
      return ['/', ...postRoutes]
    }
  },
  build: {
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

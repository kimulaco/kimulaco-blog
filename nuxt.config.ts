import { Configuration } from '@nuxt/types'
import Sass from 'sass'
import Fiber from 'fibers'
import {
  SITE_TITLE,
  SITE_DESC,
  SITE_URL,
  SITE_THEME_COLOR,
  FACEBOOK_APP_ID,
  createMetaData
} from './src/utils/blog'
import { createPostRoutes } from './scripts/blog'
import pkg from './package.json'

const config: Configuration = {
  mode: 'universal',
  env: {
    CMS_BASE_URL: process.env.CMS_BASE_URL || '',
    CMS_API_KEY: process.env.CMS_API_KEY || ''
  },
  head: {
    htmlAttrs: {
      lang: 'ja'
    },
    title: SITE_TITLE,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width,initial-scale=1' },
      { hid: 'description', name: 'description', content: SITE_DESC },
      { hid: 'og:type', property: 'og:type', content: 'article' },
      {
        hid: 'og:image',
        property: 'og:image',
        content: `${SITE_URL}/img/ogp.png`
      },
      {
        hid: 'fb:app_id',
        property: 'fb:app_id',
        content: FACEBOOK_APP_ID
      },
      {
        hid: 'twitter:creator',
        name: 'twitter:creator',
        content: '@kimulaco'
      },
      {
        hid: 'twitter:card',
        name: 'twitter:card',
        content: 'summary_large_image'
      },
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
    '@nuxtjs/sentry',
    '@nuxtjs/markdownit',
    '@nuxtjs/svg-sprite',
    '@nuxtjs/axios',
    '@nuxtjs/google-analytics',
    '@nuxtjs/pwa'
  ],
  plugins: [
    { src: '@/plugins/ga', mode: 'client' },
    { src: '@/plugins/filter', mode: 'all' },
    { src: '@/plugins/axios', mode: 'all' },
    { src: '@/plugins/markdownit', mode: 'all' }
  ],
  manifest: {
    name: SITE_TITLE,
    lang: 'ja',
    start_url: '/',
    short_name: SITE_TITLE,
    theme_color: SITE_THEME_COLOR,
    background_color: SITE_THEME_COLOR,
    display: 'standalone',
    icons: [
      {
        src: '/img/icon.png',
        sizes: '512x512',
        type: 'image/png'
      }
    ]
  },
  styleResources: {
    scss: [
      '@/assets/scss/_define.scss',
      '@/assets/scss/_mixin.scss',
      '@/assets/scss/_extend.scss'
    ]
  },
  sentry: {
    dsn: process.env.SENTRY_DSN || '',
    disableServerSide: true,
    disableServerRelease: true,
    config: {
      environment: process.env.NODE_ENV || 'development'
    },
    webpackConfig: {
      include: ['.'],
      release: `${pkg.name}@${pkg.version}`,
      ignoreFile: '.gitignore'
    }
  },
  googleAnalytics: {
    id: 'UA-137464103-1'
  },
  srcDir: 'src',
  generate: {
    async routes(): Promise<string[]> {
      const postRoutes = await createPostRoutes()
      return ['/', ...postRoutes]
    }
  },
  router: {
    extendRoutes(routes, resolve) {
      routes.push({
        name: 'custom',
        path: '*',
        component: resolve(__dirname, 'src/pages/404.vue')
      })
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

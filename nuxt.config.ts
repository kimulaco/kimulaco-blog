import { Configuration } from '@nuxt/types'
import Sass from 'sass'
import Fiber from 'fibers'
import {
  SITE_TITLE,
  SITE_URL,
  SITE_ICONS,
  SITE_THEME_COLOR,
  SITE_DEFAULT_OGP,
  FEED_PATH,
  FEED_CONFIG,
  SITEMAP_PATH,
  createMetaData
} from './src/utils/blog'
import { getPostList } from './src/plugins/cms'
import { createPostRoutes, createTagRoutes, createFeed } from './scripts/blog'
import pkg from './package.json'

const {
  NODE_ENV,
  STAGE_ENV,
  CMS_BASE_URL,
  CMS_API_KEY,
  SENTRY_DSN
} = process.env

const config: Configuration = {
  mode: 'universal',
  env: {
    CMS_BASE_URL: CMS_BASE_URL || '',
    CMS_API_KEY: CMS_API_KEY || ''
  },
  head: {
    htmlAttrs: { lang: 'ja' },
    title: SITE_TITLE,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width,initial-scale=1' },
      ...SITE_DEFAULT_OGP,
      ...createMetaData().meta
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/img/icon.svg' },
      {
        rel: 'alternate',
        type: 'application/atom+xml',
        title: SITE_TITLE,
        href: FEED_PATH
      }
    ]
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
    '@nuxtjs/pwa',
    '@nuxtjs/sitemap',
    '@nuxtjs/feed'
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
    icons: SITE_ICONS
  },
  sitemap: {
    path: SITEMAP_PATH,
    hostname: SITE_URL,
    gzip: true,
    async routes() {
      const [postRoutes, tagRoutes] = await Promise.all([
        createPostRoutes(),
        createTagRoutes()
      ])
      return ['/', ...postRoutes, ...tagRoutes]
    }
  },
  feed: [
    {
      path: FEED_PATH,
      type: 'atom1',
      cacheTime: 1000 * 60 * 15,
      create: createFeed
    }
  ],
  styleResources: {
    scss: [
      '@/assets/scss/_define.scss',
      '@/assets/scss/_mixin.scss',
      '@/assets/scss/_extend.scss'
    ]
  },
  sentry: {
    dsn: SENTRY_DSN || '',
    disabled: !STAGE_ENV,
    disableServerSide: true,
    disableServerRelease: true,
    config: {
      environment: NODE_ENV || 'development'
    },
    webpackConfig: {
      include: ['.'],
      release: `${pkg.name}@${pkg.version}`,
      ignoreFile: '.gitignore'
    }
  },
  googleAnalytics:
    STAGE_ENV === 'production'
      ? {
          id: 'UA-137464103-1',
          debug: { enabled: false }
        }
      : null,
  srcDir: 'src',
  generate: {
    async routes(): Promise<string[]> {
      const [postRoutes, tagRoutes] = await Promise.all([
        createPostRoutes(),
        createTagRoutes()
      ])
      return ['/', ...postRoutes, ...tagRoutes]
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

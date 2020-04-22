import { Configuration } from '@nuxt/types'
import Sass from 'sass'
import Fiber from 'fibers'
import removeMd from 'remove-markdown'
import {
  SITE_TITLE,
  SITE_DESC,
  SITE_URL,
  SITE_THEME_COLOR,
  FEED_PATH,
  FEED_CONFIG,
  SITEMAP_PATH,
  FACEBOOK_APP_ID,
  createMetaData
} from './src/utils/blog'
import { getPostList } from './src/plugins/cms'
import { createPostRoutes, createTagRoutes } from './scripts/blog'
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
    icons: [
      {
        src: '/img/icon.png',
        sizes: '512x512',
        type: 'image/png'
      }
    ]
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
      async create(feed: any) {
        const posts = await getPostList()
        feed.options = FEED_CONFIG
        for (const post of posts) {
          feed.addItem({
            title: post.title,
            id: `${SITE_URL}/post/${post.id}/`,
            link: `${SITE_URL}/post/${post.id}/`,
            description: post.description,
            content: removeMd(post.content),
            date: new Date(post.created_at),
            image: `${SITE_URL}/img/ogp.png`
          })
        }
        feed.addCategory('Blog')
        feed.addCategory('Tech')
        feed.addCategory('Web')
        feed.addContributor({
          name: 'kimulaco',
          email: 'kimulaco@gmail.com',
          link: 'https://kimulaco.me/'
        })
      }
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
    publishRelease: STAGE_ENV,
    disabled: !STAGE_ENV,
    config: {
      release: `${pkg.name}@${pkg.version}-${STAGE_ENV}`,
      environment: NODE_ENV || 'development'
    }
  },
  googleAnalytics:
    STAGE_ENV === 'production'
      ? {
          id: 'UA-137464103-1',
          debug: {
            enabled: false
          }
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

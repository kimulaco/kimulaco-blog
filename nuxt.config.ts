import { Configuration } from '@nuxt/types'

const Sass = require('sass')
const Fiber = require('fibers')

const config: Configuration = {
  mode: 'universal',
  head: {
    title: 'kimulaco.com',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width,initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: ''
      }
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

if (process.env.NODE_ENV !== 'production') {
  const dotenv = require('dotenv')
  dotenv.config()
}

export default {
  mode: 'universal',
  env: {
    CTF_SPACE_ID: process.env.CTF_SPACE_ID,
    CTF_CDA_ACCESS_TOKEN: process.env.CTF_CDA_ACCESS_TOKEN
  },
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
  plugins: ['@/plugins/filter'],
  buildModules: ['@nuxtjs/eslint-module'],
  modules: ['@nuxtjs/style-resources', 'nuxt-svg-loader'],
  styleResources: {
    scss: [
      '@/assets/scss/_define.scss',
      '@/assets/scss/_mixin.scss',
      '@/assets/scss/_extend.scss'
    ]
  },
  srcDir: 'src',
  build: {
    extend(config, ctx) {}
  }
}

export default {
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
  css: ['normalize.css', '@/assets/scss/base'],
  plugins: [],
  buildModules: ['@nuxtjs/eslint-module'],
  modules: ['@nuxtjs/style-resources'],
  styleResources: {
    scss: ['@/assets/scss/_define', '@/assets/scss/_mixin']
  },
  srcDir: 'src',
  build: {
    extend(config, ctx) {}
  }
}

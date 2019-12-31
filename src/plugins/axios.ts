import { Plugin } from '@nuxt/types'
import { NuxtAxiosInstance } from '@nuxtjs/axios'

declare module '@nuxt/types' {
  interface Context {
    $axios: NuxtAxiosInstance
  }
}

const axios: Plugin = ({ $axios }) => {
  $axios.onResponse(() => {
    $axios.setHeader('Access-Control-Allow-Origin', '*')
  })
}

export default axios

import Vue, { ComponentOptions } from 'vue'
import { Context } from '@nuxt/types'
import { NuxtAxiosInstance } from '@nuxtjs/axios'

declare module 'vue/types/options' {
  interface ComponentOptions<V extends Vue> {
    asyncData?(context: Context): object | undefined
  }
}

declare module 'vue/types/vue' {
  interface Vue {
    $axios: NuxtAxiosInstance
    $ga: any
  }
}
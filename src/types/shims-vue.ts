import Vue from 'vue'
import { NuxtAxiosInstance } from '@nuxtjs/axios'

declare module 'vue/types/vue' {
  interface Vue {
    $axios: NuxtAxiosInstance
    $ga: any
  }
}

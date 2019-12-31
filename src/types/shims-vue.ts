import Vue, { ComponentOptions } from 'vue'
import { NuxtAxiosInstance } from '@nuxtjs/axios'

declare module 'vue/types/options' {
  interface ComponentOptions<V extends Vue> {
    asyncData?(ctx: any): object | undefined;
  }
}

declare module 'vue/types/vue' {
  interface Vue {
    $axios: NuxtAxiosInstance
    $ga: any
  }
}

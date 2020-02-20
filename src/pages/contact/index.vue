<template>
  <div class="PageAbout">
    <PageTitle>Contact</PageTitle>

    <p>お問い合わせはTwitterのリプライやダイレクトメールでお願いします。</p>

    <p>
      <a
        href="https://twitter.com/kimulaco"
        target="_blank"
        rel="noopener noreferrer"
      >
        Twitter
      </a>
    </p>
  </div>
</template>

<script lang="ts">
import { Context } from '@nuxt/types'
import Vue from 'vue'
import PageTitle from '../../components/module/PageTitle.vue'
import { createMetaData } from '../../utils/blog'

export default Vue.extend({
  name: 'PageAbout',
  layout: 'single',
  components: {
    PageTitle
  },
  asyncData(context: Context): Promise<void> {
    const { store } = context
    store.commit('breadcrumb/hide')
    return Promise.resolve()
  },
  head(): any {
    return createMetaData(
      'Contact',
      'kimulaco.comのお問い合わせページ。サイトや記事に関するご指摘などはこちらに記載されている方法でご連絡ください。',
      '/contact/'
    )
  }
})
</script>

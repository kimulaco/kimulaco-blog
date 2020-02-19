<template>
  <div class="PageHome">
    <PageTitle>ページが見つかりませんでした。</PageTitle>
    <p>記事が削除、またはURLが変更されている可能性があります。</p>
  </div>
</template>

<script lang="ts">
import { Context } from '@nuxt/types'
import Vue from 'vue'
import PageTitle from '../../components/module/PageTitle.vue'

type LocalData = {}

export default Vue.extend({
  name: 'PageHome',
  layout: 'single',
  components: {
    PageTitle
  },
  asyncData(context: Context): Promise<LocalData> {
    const { store } = context
    store.commit('breadcrumb/hide')
    return Promise.resolve({})
  }
})
</script>

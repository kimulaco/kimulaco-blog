<template>
  <div class="Page404">
    <PageTitle>ページが見つかりませんでした。</PageTitle>
    <p>記事が削除、またはURLが変更されている可能性があります。</p>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import PageTitle from '../components/module/PageTitle.vue'
import { createMetaData } from '../utils/blog'

export default Vue.extend({
  name: 'Page404',
  layout: 'single',
  components: {
    PageTitle
  },
  head() {
    return createMetaData('ページが見つかりませんでした', '', '/404')
  }
})
</script>

<template>
  <div class="Page404">
    <PageTitle>ページが見つかりませんでした。</PageTitle>
    <p class="mb-32">記事が削除、またはURLが変更されている可能性があります。</p>
    <LinkButton to="/">トップページへ</LinkButton>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import PageTitle from '../components/module/PageTitle.vue'
import LinkButton from '../components/module/LinkButton.vue'
import { createMetaData } from '../utils/blog'

export default Vue.extend({
  name: 'Page404',
  layout: 'single',
  components: {
    PageTitle,
    LinkButton,
  },
  head() {
    return createMetaData('ページが見つかりませんでした', '', '/404')
  },
})
</script>

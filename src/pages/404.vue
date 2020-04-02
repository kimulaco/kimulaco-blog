<template>
  <div class="PageHome">
    <PageTitle>ページが見つかりませんでした。</PageTitle>
    <p>記事が削除、またはURLが変更されている可能性があります。</p>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import PageTitle from '../components/module/PageTitle.vue'

export default Vue.extend({
  name: 'PageHome',
  layout: 'single',
  components: {
    PageTitle
  }
})
</script>

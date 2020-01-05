<template>
  <div class="PageAbout">
    <PageTitle>About</PageTitle>

    <section>
      <Heading class="mt-0">このサイトについて</Heading>
      <p>
        フロントエンドエンジニアとして活動するkimulacoが学んだことをアウトプットしたり、エンジニア目線で生活を楽にする為のナレッジなどを情報共有するする為のブログ。
      </p>
      <p>関心ある技術などを試験運用したりもします。</p>
    </section>

    <section>
      <Heading>サイト運用者について</Heading>
      <p>kimulaco</p>
      <p>東京都内でフロントエンドエンジニアとして働いています。</p>
    </section>
  </div>
</template>

<script lang="ts">
import { Context } from '@nuxt/types'
import Vue from 'vue'
import PageTitle from '../../components/module/PageTitle.vue'
import Heading from '../../components/module/Heading.vue'
import { createMetaData } from '../../utils/blog'

export default Vue.extend({
  name: 'PageAbout',
  layout: 'single',
  components: {
    PageTitle,
    Heading
  },
  asyncData(context: Context): Promise<void> {
    const { store } = context
    store.commit('breadcrumb/hide')
    return Promise.resolve()
  },
  head(): any {
    return createMetaData(
      'About',
      'kimulaco.comに関する説明ページ。サイトの方針や運用者に関する情報を記載しています。',
      '/about/'
    )
  }
})
</script>

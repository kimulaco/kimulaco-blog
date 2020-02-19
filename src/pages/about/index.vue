<template>
  <div class="PageAbout">
    <PageTitle>About</PageTitle>

    <section>
      <Heading class="mt-0">このサイトについて</Heading>
      <p>
        フロントエンドエンジニアとして活動する運用者が、学んだことをアウトプットしたり、エンジニア目線で生活を楽にする為のナレッジなどを情報共有する為のブログ。
      </p>
      <p>気になる技術などを試験運用する場にしたりもします。</p>
    </section>

    <section>
      <Heading>サイト運用者について</Heading>
      <div class="AboutProfile">
        <p class="AboutProfile_name">kimulaco</p>
        <img class="AboutProfile_icon" src="/img/profile.png" alt="" />
      </div>
      <p>東京都内でフロントエンドエンジニアとして働いています。</p>
      <LinkList
        :links="[
          { text: 'Twitter', url: 'https://twitter.com/kimulaco' },
          { text: 'GitHub', url: 'https://github.com/kimulaco' },
          { text: 'kimulaco.me', url: 'https://kimulaco.me' }
        ]"
      />
    </section>
  </div>
</template>

<script lang="ts">
import { Context } from '@nuxt/types'
import Vue from 'vue'
import PageTitle from '../../components/module/PageTitle.vue'
import Heading from '../../components/module/Heading.vue'
import LinkList from '../../components/module/LinkList.vue'
import { createMetaData } from '../../utils/blog'

export default Vue.extend({
  name: 'PageAbout',
  layout: 'single',
  components: {
    PageTitle,
    Heading,
    LinkList
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

<style lang="scss" scoped>
.AboutProfile {
  display: flex;
  flex-direction: row-reverse;
  justify-content: flex-end;
  align-items: center;
  margin: 0 0 20px;
  &_name {
    font-size: 18px;
  }
  &_icon {
    width: 60px;
    margin: 0 16px 0 0;
    border-radius: 50%;
  }
}
</style>

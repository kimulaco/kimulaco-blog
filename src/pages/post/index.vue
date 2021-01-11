<template>
  <div class="PageHome">
    <PageTitle>記事一覧</PageTitle>

    <div>
      <PostLink v-for="post in posts" :key="post.id" :post="post" />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Post, BreadcrumbItem, PostListResponse } from '../../types/blog'
import PageTitle from '../../components/module/PageTitle.vue'
import PostLink from '../../components/post/PostLink.vue'
import { getPostListAll } from '../../plugins/cms'
import {
  createMetaData,
  createPageBreadclumb,
  createJsonldOfBreadcrumbList,
} from '../../utils/blog'

type LocalData = {
  posts: Post[]
  breadcrumbs: BreadcrumbItem[] | null
}

export default Vue.extend({
  name: 'PagePost',
  components: {
    PageTitle,
    PostLink,
  },
  async asyncData(): Promise<LocalData> {
    const { posts }: PostListResponse = await getPostListAll()
    return {
      posts: posts || [],
      breadcrumbs: createPageBreadclumb('記事一覧', '/post'),
    }
  },
  jsonld(): any {
    const { breadcrumbs } = this as any
    return createJsonldOfBreadcrumbList(breadcrumbs)
  },
  head() {
    return createMetaData(
      '記事一覧',
      '本サイトの記事一覧ページです。記事を公開日順で一覧できます。',
      '/post/',
    )
  },
})
</script>

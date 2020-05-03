<template>
  <div class="PageTagDetail">
    <PageTitle>"{{ tag.name }}"のタグを持つ記事</PageTitle>

    <div v-if="posts.length > 0">
      <PostLink v-for="post in posts" :key="post.id" :post="post" />
    </div>
    <div v-else>
      <p class="mb-32">
        <b>"{{ tag.name }}"</b>
        のタグを持つ記事はありません。
      </p>
      <LinkButton to="/">トップページへ</LinkButton>
    </div>
  </div>
</template>

<script lang="ts">
import { Context } from '@nuxt/types'
import Vue from 'vue'
import PageTitle from '../../../components/module/PageTitle.vue'
import LinkButton from '../../../components/module/LinkButton.vue'
import PostLink from '../../../components/post/PostLink.vue'
import { getPostListAll, getTag } from '../../../plugins/cms'
import { createMetaData } from '../../../utils/blog'
import { Post, Tag, PostListResponse } from '../../../types/blog'

type LocalData = {
  posts: Post[]
  tag: Tag
}

export default Vue.extend({
  name: 'PageTagDetail',
  components: {
    PageTitle,
    LinkButton,
    PostLink
  },
  async asyncData({ params }: Context): Promise<LocalData> {
    try {
      const tag: Tag = await getTag(params.id)
      const { posts }: PostListResponse = await getPostListAll({
        filters: `tag[contains]${params.id}`
      })
      return {
        posts: posts || [],
        tag
      }
    } catch (error) {
      return {
        posts: [],
        tag: {
          name: params.id,
          id: params.id,
          count: 0
        }
      }
    }
  },
  head() {
    const { tag } = this as any
    return createMetaData(
      `${tag.name}のタグを持つ記事`,
      `${tag.name}のタグを持つ記事の一覧。`,
      `/tag/${tag.id}/`
    )
  }
})
</script>

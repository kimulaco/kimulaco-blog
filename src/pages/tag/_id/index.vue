<template>
  <div class="PageTag">
    <PageTitle>"{{ tag.name }}"のタグを持つ記事</PageTitle>

    <div v-if="posts.length > 0">
      <PostLink v-for="post in posts" :key="post.id" :post="post" />
    </div>
    <p v-else>
      <b>"{{ tag.name }}"</b>
      のタグを持つ記事はありません。
    </p>
  </div>
</template>

<script lang="ts">
import { Context } from '@nuxt/types'
import Vue from 'vue'
import PageTitle from '../../../components/module/PageTitle.vue'
import PostLink from '../../../components/post/PostLink.vue'
import { getPostList, getTag } from '../../../plugins/cms'

export default Vue.extend({
  name: 'PageTag',
  components: {
    PageTitle,
    PostLink
  },
  async asyncData({ params }: Context): Promise<any> {
    try {
      const filters = `tag[contains]${params.id}`
      const tag = await getTag(params.id)
      const posts = await getPostList({ filters })
      return {
        posts,
        tag
      }
    } catch (error) {
      return {
        posts: [],
        tag: {
          name: params.id
        }
      }
    }
  }
})
</script>

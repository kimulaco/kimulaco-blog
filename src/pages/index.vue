<template>
  <div class="PageHome">
    <PostLink v-for="post in posts" :key="post.id" :post="post" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Post, PostListResponse } from '../types/blog'
import PostLink from '../components/post/PostLink.vue'
import { getPostList } from '../plugins/cms'

type LocalData = {
  posts: Post[]
}

export default Vue.extend({
  name: 'PageHome',
  components: {
    PostLink
  },
  async asyncData(): Promise<LocalData> {
    const { posts }: PostListResponse = await getPostList()
    return {
      posts: posts || []
    }
  }
})
</script>

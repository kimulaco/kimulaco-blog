<template>
  <div class="PageHome">
    <PostLink v-for="post in posts" :key="post.id" :post="post" />
  </div>
</template>

<script lang="ts">
import { Context } from '@nuxt/types'
import Vue from 'vue'
import { Post } from '../types/blog'
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
  async asyncData(context: Context): Promise<LocalData> {
    const { store } = context
    const posts = await getPostList()
    store.commit('breadcrumb/hide')
    return {
      posts
    }
  }
})
</script>

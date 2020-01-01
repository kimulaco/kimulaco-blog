<template>
  <div class="PageHome">
    <Heading>最近の記事</Heading>
    <PostLink v-for="post in posts" :key="post.id" :post="post" />
  </div>
</template>

<script lang="ts">
import { Context } from '@nuxt/types'
import Vue from 'vue'
import { Post } from '../types/blog'
import Heading from '../components/module/Heading.vue'
import PostLink from '../components/post/PostLink.vue'
import cms from '../plugins/cms'

type LocalData = {
  posts: Post[]
}

export default Vue.extend({
  name: 'PageHome',
  components: {
    Heading,
    PostLink
  },
  async asyncData(context: Context): Promise<LocalData> {
    const { store } = context
    const { data } = await cms.get('/post')
    const posts = data.contents
    store.commit('breadcrumb/update', [{ text: 'Home', url: '/' }])
    return {
      posts
    }
  }
})
</script>

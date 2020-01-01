<template>
  <div class="PagePostDetail">
    <PostDetail :post="post" />
  </div>
</template>

<script lang="ts">
import { Context } from '@nuxt/types'
import Vue from 'vue'
import { Post } from '../../../types/blog'
import PostDetail from '../../../components/post/PostDetail.vue'
import cms from '../../../plugins/cms'
import { createMetaData } from '../../../utils/blog'

type LocalData = {
  post: Post
}

export default Vue.extend({
  name: 'PagePostDetail',
  components: {
    PostDetail
  },
  async asyncData(context: Context): Promise<LocalData> {
    const { store, params } = context
    const { data } = await cms.get(`/post/${params.id}`)
    const post: Post = data
    store.commit('breadcrumb/update', [
      { text: 'Home', url: '/' },
      { text: post.title }
    ])
    return { post }
  },
  head(): Object {
    return createMetaData(
      this.post.title,
      this.post.description,
      `/post/${this.post.id}/`
    )
  }
})
</script>

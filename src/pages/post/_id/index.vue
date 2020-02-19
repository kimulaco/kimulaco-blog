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
import { getPost } from '../../../plugins/cms'
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
    const post: Post = await getPost(params.id)
    store.commit('breadcrumb/update', post.title)
    return { post }
  },
  head(): any {
    return createMetaData(
      this.post.title,
      this.post.description,
      `/post/${this.post.id}/`
    )
  }
})
</script>

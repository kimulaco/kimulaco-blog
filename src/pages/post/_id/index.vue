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
  post: Post | null
}

export default Vue.extend({
  name: 'PagePostDetail',
  components: {
    PostDetail
  },
  async asyncData(context: Context): Promise<LocalData> {
    const { store, params, redirect } = context
    try {
      const post: Post = await getPost(params.id)
      store.commit('breadcrumb/update', post.title)
      return { post }
    } catch (error) {
      redirect({
        path: '/error/404'
      })
      return { post: null }
    }
  },
  head(): any {
    let imageUrl: string = ''
    if (this.post.image && this.post.image.url) {
      imageUrl = this.post.image.url
    }
    return createMetaData(
      this.post.title,
      this.post.description,
      `/post/${this.post.id}/`,
      imageUrl
    )
  }
})
</script>

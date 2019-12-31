<template>
  <div class="PagePostDetail">
    <PostDetail :post="post" />
  </div>
</template>

<script lang="ts">
import { Context } from '@nuxt/types'
import PostDetail from '../../../components/post/PostDetail.vue'
import cms from '../../../plugins/cms'

export default {
  name: 'PagePostDetail',
  components: {
    PostDetail
  },
  async asyncData(context: Context) {
    const { store, params } = context
    const { data } = await cms.get(`/post/${params.id}`)
    const post = data
    store.commit('breadcrumb/update', [
      { text: 'Home', url: '/' },
      { text: post.title }
    ])
    return {
      post
    }
  }
  // head() {
  //   return {
  //     title: `${this.post.title} | `,
  //     meta: createMeta(
  //       this.post.title,
  //       this.post.description,
  //       `/post/${this.post.id}/`
  //     )
  //   }
  // }
}
</script>

<template>
  <div class="PagePostDetail">
    <PostDetail
      :id="post.id"
      :title="post.title"
      :description="post.description"
      :category="post.category"
      :tags="post.tags"
      :content="post.body.html"
      :created-at="post.created_at"
      :updated-at="post.updated_at"
    />
  </div>
</template>

<script>
import { getPost } from '@/plugins/blog'
import PostDetail from '@/components/post/PostDetail'

export default {
  name: 'PagePostDetail',
  components: {
    PostDetail
  },
  asyncData({ params, store }) {
    const post = getPost(params.id)
    store.commit('breadcrumb/update', [
      { text: 'Home', url: '/' },
      { text: post.title }
    ])
    return {
      post
    }
  }
}
</script>

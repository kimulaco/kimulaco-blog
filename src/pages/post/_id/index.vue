<template>
  <div class="PagePostDetail">
    <PostDetail
      :id="post.meta.id"
      :title="post.meta.title"
      :description="post.meta.description"
      :category="post.meta.category"
      :tags="post.meta.tags"
      :created-at="post.meta.created_at"
      :updated-at="post.meta.updated_at"
      :content="post.body.html"
    />
  </div>
</template>

<script>
import { siteTitle, getPost, createMeta } from '@/plugins/blog'
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
      { text: post.meta.title }
    ])
    return {
      post
    }
  },
  head() {
    return {
      title: `${this.post.meta.title} | ${siteTitle}`,
      meta: createMeta(
        this.post.meta.title,
        this.post.meta.description,
        `/post/${this.post.meta.id}/`
      )
    }
  }
}
</script>

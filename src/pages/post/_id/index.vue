<template>
  <div class="PagePostDetail">
    <PostDetail
      :id="post.id"
      :title="post.title"
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
  data() {
    return {
      post: {}
    }
  },
  asyncData({ params }) {
    return {
      post: getPost(params.id)
    }
  }
}
</script>

<style lang="scss"></style>

<template>
  <div class="PagePostDetail">
    <PostDetail
      :id="post.id"
      :title="post.title"
      :category="post.category"
      :tags="post.tags"
      :content="post.content"
      :created-at="post.createdAt"
      :updated-at="post.updatedAt"
    />
  </div>
</template>

<script>
import { getEntry } from '@/plugins/contentful'
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
  async asyncData({ params }) {
    return {
      post: await getEntry(params.id, { type: 'post' })
    }
  }
}
</script>

<style lang="scss"></style>

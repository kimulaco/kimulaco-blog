<template>
  <div class="PageHome">
    <PostCard
      v-for="post in posts"
      :id="post.id"
      :key="post.id"
      :title="post.title"
      :category="post.category"
      :tags="post.tags"
      :content="post.content || ''"
      :created-at="post.created_at"
      :updated-at="post.updated_at"
    />
  </div>
</template>

<script>
import { posts } from '@/plugins/blog'
import PostCard from '@/components/post/PostCard'

export default {
  name: 'PageHome',
  components: {
    PostCard
  },
  data() {
    return {
      posts: []
    }
  },
  asyncData() {
    return {
      posts
    }
  }
}
</script>

<style lang="scss"></style>

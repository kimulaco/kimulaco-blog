<template>
  <div class="PageHome">
    <PostCard
      v-for="post in posts"
      :id="post.id"
      :key="post.id"
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
import { getEntries } from '@/plugins/contentful'
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
  async asyncData() {
    return {
      posts: await getEntries({ type: 'list' })
    }
  }
}
</script>

<style lang="scss"></style>

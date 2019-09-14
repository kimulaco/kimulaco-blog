<template>
  <div class="PageHome">
    <h2>最近の記事</h2>

    <PostCard
      v-for="post in posts"
      :id="post.id"
      :key="post.id"
      :title="post.title"
      :content="post.content"
      :tags="post.tags"
      :created-at="post.createdAt"
      :updated-at="post.updatedAt"
      heading-tag="h3"
    />
  </div>
</template>

<script>
import { getEntries } from '@/plugins/contentful'
import PostCard from '@/components/common/PostCard'

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

<template>
  <div class="PageHome">
    <PostCard
      v-for="post in posts"
      :id="post.id"
      :key="post.id"
      :title="post.title"
      :category="post.category"
      :tags="post.tags"
      :content="post.description"
      :created-at="post.created_at"
      :updated-at="post.updated_at"
    />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { siteTitle, posts, createMeta } from '../plugins/blog'
import PostCard from '../components/post/PostCard.vue'

export default Vue.extend({
  name: 'PageHome',
  components: {
    PostCard
  },
  asyncData() {
    return {
      posts
    }
  },
  head() {
    return {
      title: siteTitle,
      meta: createMeta()
    }
  },
  created() {
    this.$store.commit('breadcrumb/update', [{ text: 'Home', url: '/' }])
  }
})
</script>

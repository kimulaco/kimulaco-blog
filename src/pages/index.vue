<template>
  <div class="PageHome">
    <PostCard
      v-for="post in posts"
      :id="post.meta.id"
      :key="post.meta.id"
      :title="post.meta.title"
      :category="post.meta.category"
      :tags="post.meta.tags"
      :content="post.meta.description"
      :created-at="post.meta.created_at"
      :updated-at="post.meta.updated_at"
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

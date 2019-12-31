<template>
  <div class="PageHome">
    <PostLink
      v-for="post in posts"
      :id="post.id"
      :key="post.id"
      :title="post.title"
      :category="post.category"
      :content="post.description"
      :created-at="post.createdAt"
      :updated-at="post.updatedAt"
    />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import cms from '../plugins/cms'
// import { siteTitle, posts, createMeta } from '../plugins/blog'
import PostLink from '../components/post/PostLink.vue'

export default Vue.extend({
  name: 'PageHome',
  components: {
    PostLink
  },
  async asyncData() {
    const { data } = await cms.get('/post')
    const posts = data.contents
    return {
      posts
    }
  },
  // head() {
  //   return {
  //     title: siteTitle,
  //     meta: createMeta()
  //   }
  // },
  created() {
    this.$store.commit('breadcrumb/update', [{ text: 'Home', url: '/' }])
  }
})
</script>

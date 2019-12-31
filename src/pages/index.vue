<template>
  <div class="PageHome">
    <Heading>最近の記事</Heading>
    <PostLink v-for="post in posts" :key="post.id" :post="post" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Heading from '../components/module/Heading.vue'
import PostLink from '../components/post/PostLink.vue'
import cms from '../plugins/cms'

export default Vue.extend({
  name: 'PageHome',
  components: {
    Heading,
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

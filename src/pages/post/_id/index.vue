<template>
  <div class="PagePostDetail">
    <h1>{{ post.title }}</h1>
  </div>
</template>

<script>
import { getEntry } from '@/plugins/contentful'

export default {
  name: 'PagePostDetail',
  components: {},
  data() {
    return {
      post: {}
    }
  },
  async asyncData({ params }) {
    return {
      post: await getEntry(params.id)
    }
  }
}
</script>

<style lang="scss"></style>

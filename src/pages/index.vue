<template>
  <div class="PageHome">
    <h2>最近の記事</h2>

    <Card v-for="post in posts" :key="post.id" tag="section">
      <h3>
        <nuxt-link :to="`/post/${post.id}/`">{{ post.title }}</nuxt-link>
      </h3>
      <Tags :tags="post.tags" />
      <Timestamp :created-at="post.createdAt" :updated-at="post.updatedAt" />
      <p>{{ post.content }}</p>
    </Card>
  </div>
</template>

<script>
import { getEntries } from '@/plugins/contentful'
import Card from '@/components/module/Card'
import Tags from '@/components/module/Tags'
import Timestamp from '@/components/module/Timestamp'

export default {
  name: 'PageHome',
  components: {
    Card,
    Tags,
    Timestamp
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

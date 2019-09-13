<template>
  <div class="PageHome">
    <PostCard
      v-for="post in posts"
      :id="post.fields.id"
      :key="post.fields.id"
      :title="post.fields.title"
      :content="'post.fields.content'"
      :tags="post.fields.tags"
      :created-at="post.sys.createdAt | date"
      :updated-at="post.sys.updatedAt | date"
    />
  </div>
</template>

<script>
import { client } from '@/plugins/contentful'
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
    const entries = await client.getEntries()
    console.log(JSON.stringify(entries.items, null, '  '))
    return {
      posts: entries.items
    }
  }
}
</script>

<style lang="scss"></style>

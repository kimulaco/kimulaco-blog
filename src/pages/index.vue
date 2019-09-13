<template>
  <div class="PageHome">
    <PostCard
      v-for="post in posts"
      :id="post.id"
      :key="post.id"
      :title="post.title"
      :content="post.content"
      :tags="post.tags"
      :created-at="post.created_at"
      :updated-at="post.updated_at"
    />
  </div>
</template>

<script>
import PostCard from '@/components/common/PostCard'

export default {
  name: 'PageHome',
  components: {
    PostCard
  },
  data() {
    return {
      posts: [
        {
          id: 'first',
          title: 'テスト記事１',
          content: 'ほげほげ',
          tags: ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'Node.js'],
          created_at: '2019-10-01',
          updated_at: '2019-10-01'
        },
        {
          id: 'second',
          title: 'テスト記事２',
          content: 'ほげほげ',
          tags: ['HTML', 'CSS'],
          created_at: '2019-10-01'
        }
      ]
    }
  }
}
</script>

<style lang="scss"></style>

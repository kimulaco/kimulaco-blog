<template>
  <div class="PageHome">
    <section class="mb-64">
      <h2 class="hidden">タグ</h2>
      <TagList :tags="tags" />
    </section>

    <section>
      <Heading>最近の記事</Heading>
      <div>
        <PostLink v-for="post in posts" :key="post.id" :post="post" />
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Post, Tag, PostListResponse, TagListResponse } from '../types/blog'
import Heading from '../components/module/Heading.vue'
import TagList from '../components/module/TagList.vue'
import PostLink from '../components/post/PostLink.vue'
import { getPostList, getTagListDetail } from '../plugins/cms'

type LocalData = {
  posts: Post[]
  tags: Tag[]
}

export default Vue.extend({
  name: 'PageHome',
  components: {
    Heading,
    TagList,
    PostLink
  },
  async asyncData(): Promise<LocalData> {
    const { posts }: PostListResponse = await getPostList()
    const { tags }: TagListResponse = await getTagListDetail()
    return {
      posts: posts || [],
      tags: tags || []
    }
  }
})
</script>

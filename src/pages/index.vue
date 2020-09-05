<template>
  <div class="PageHome">
    <section>
      <Heading class="mt-0">最近の記事</Heading>
      <div>
        <PostLink v-for="post in posts" :key="post.id" :post="post" />
      </div>
      <LinkText to="/post/" class="mt-24">全ての記事を見る</LinkText>
    </section>

    <section class="mb-64">
      <Heading>タグ</Heading>
      <TagList :tags="tags" />
    </section>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Post, Tag, PostListResponse, TagListResponse } from '../types/blog'
import Heading from '../components/module/Heading.vue'
import LinkText from '../components/module/LinkText.vue'
import TagList from '../components/module/TagList.vue'
import PostLink from '../components/post/PostLink.vue'
import { getPostList, getTagListDetail } from '../plugins/cms'
import { createJsonldOfWebSite } from '../utils/blog'

type LocalData = {
  posts: Post[]
  tags: Tag[]
}

export default Vue.extend({
  name: 'PageHome',
  components: {
    Heading,
    LinkText,
    TagList,
    PostLink,
  },
  async asyncData(): Promise<LocalData> {
    const { posts }: PostListResponse = await getPostList()
    const { tags }: TagListResponse = await getTagListDetail()
    return {
      posts: posts || [],
      tags: tags || [],
    }
  },
  jsonld(): object {
    return createJsonldOfWebSite()
  },
})
</script>

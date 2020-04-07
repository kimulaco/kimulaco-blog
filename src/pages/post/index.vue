<template>
  <div class="PageHome">
    <PageTitle v-if="tag && tag.name">{{ tag.name }}のタグを持つ記事</PageTitle>
    <PageTitle v-else>記事一覧</PageTitle>

    <div>
      <PostLink v-for="post in posts" :key="post.id" :post="post" />
    </div>
  </div>
</template>

<script lang="ts">
import { Context } from '@nuxt/types'
import Vue from 'vue'
import PageTitle from '../../components/module/PageTitle.vue'
import PostLink from '../../components/post/PostLink.vue'
import { getPostList, getTag } from '../../plugins/cms'

export default Vue.extend({
  name: 'PageHome',
  components: {
    PageTitle,
    PostLink
  },
  async asyncData({ query }: Context): Promise<any> {
    let tag = null
    let filters = ''

    if (query.tag) {
      let tagId: any = query.tag

      if (Array.isArray(tagId)) tagId = tagId[0]
      if (typeof tagId !== 'string') tagId = null

      if (tagId) {
        filters += `tag[contains]${tagId}`
        tag = await getTag(tagId)
      }
    }

    const posts = await getPostList({ filters })

    return {
      posts,
      tag
    }
  }
})
</script>

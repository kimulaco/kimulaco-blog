<template>
  <div class="PageTag">
    <PageTitle>タグ一覧</PageTitle>
    <TagList :tags="tags" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import PageTitle from '../../components/module/PageTitle.vue'
import TagList from '../../components/module/TagList.vue'
import { getTagListDetail } from '../../plugins/cms'
import {
  createMetaData,
  createPageBreadclumb,
  createJsonldOfBreadcrumbList,
} from '../../utils/blog'
import { Tag, BreadcrumbItem, TagListResponse } from '../../types/blog'

type LocalData = {
  tags: Tag[]
  breadcrumbs: BreadcrumbItem[] | null
}

export default Vue.extend({
  name: 'PageTag',
  components: {
    PageTitle,
    TagList,
  },
  async asyncData({ store, $axios }): Promise<LocalData> {
    await store.dispatch('getPopularPosts', $axios)
    try {
      const { tags }: TagListResponse = await getTagListDetail()
      return {
        tags,
        breadcrumbs: createPageBreadclumb('タグ一覧', '/tag'),
      }
    } catch (error) {
      return {
        tags: [],
        breadcrumbs: null,
      }
    }
  },
  jsonld(): any {
    const { breadcrumbs } = this as any
    return createJsonldOfBreadcrumbList(breadcrumbs)
  },
  head() {
    return createMetaData('タグ一覧', 'すべてのタグ一覧ページ。', '/tag/')
  },
})
</script>

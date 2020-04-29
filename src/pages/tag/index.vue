<template>
  <div class="PageTag">
    <PageTitle>タグ一覧</PageTitle>
    <TagList :tags="tags" />
  </div>
</template>

<script lang="ts">
import { Context } from '@nuxt/types'
import Vue from 'vue'
import PageTitle from '../../components/module/PageTitle.vue'
import TagList from '../../components/module/TagList.vue'
import { getTagListDetail } from '../../plugins/cms'
import { createMetaData } from '../../utils/blog'
import { Tag, TagListResponse } from '../../types/blog'

type LocalData = {
  tags: Tag[]
}

export default Vue.extend({
  name: 'PageTag',
  components: {
    PageTitle,
    TagList
  },
  async asyncData({ params }: Context): Promise<LocalData> {
    try {
      const { tags }: TagListResponse = await getTagListDetail()
      return { tags }
    } catch (error) {
      return { tags: [] }
    }
  },
  head() {
    return createMetaData(
      `タグ一覧`,
      `すべてのタグ一覧ページ。`,
      `/tag/`
    )
  }
})
</script>

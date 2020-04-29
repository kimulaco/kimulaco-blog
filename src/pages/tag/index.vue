<template>
  <div class="PageTag">
    <PageTitle>タグ一覧</PageTitle>

    <div>
      <ul class="TagList">
        <li v-for="tag in tags" :key="tag.id" class="TagList_item">
          <nuxt-link :to="`/tag/${tag.id}/`" class="TagList_anchor">
            {{ tag.name }}
          </nuxt-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import { Context } from '@nuxt/types'
import Vue from 'vue'
import PageTitle from '../../components/module/PageTitle.vue'
import { getTagListAll } from '../../plugins/cms'
import { createMetaData } from '../../utils/blog'
import { Tag, TagListResponse } from '../../types/blog'

type LocalData = {
  tags: Tag[]
}

export default Vue.extend({
  name: 'PageTag',
  components: {
    PageTitle
  },
  async asyncData({ params }: Context): Promise<LocalData> {
    try {
      const { tags }: TagListResponse = await getTagListAll()
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

<template>
  <div class="PageAbout">
    <PageTitle>About</PageTitle>

    <!-- eslint-disable vue/no-v-html -->
    <PostContent class="About_content" v-html="content" />
    <!-- eslint-enable vue/no-v-html -->
  </div>
</template>

<script lang="ts">
import { Context } from '@nuxt/types'
import Vue from 'vue'
import PageTitle from '../../components/module/PageTitle.vue'
import PostContent from '../../components/post/PostContent.vue'
import { getAbout } from '../../plugins/cms'
import {
  createMetaData,
  createPageBreadclumb,
  createJsonldOfBreadcrumbList
} from '../../utils/blog'
import { BreadcrumbItem } from '../../types/blog'

type LocalData = {
  content: string
  breadcrumbs: BreadcrumbItem[] | null
}

export default Vue.extend({
  name: 'PageAbout',
  layout: 'single',
  components: {
    PageTitle,
    PostContent
  },
  async asyncData({ app }: Context): Promise<LocalData> {
    const { about, contact } = await getAbout()
    const content = about
      + '\n\n<h2 id="contact">お問い合わせ</h2>\n\n'
      + contact
    return {
      content: app.$md.render(content),
      breadcrumbs: createPageBreadclumb('About', '/about')
    }
  },
  jsonld(): object {
    const { breadcrumbs } = this as any
    return createJsonldOfBreadcrumbList(breadcrumbs)
  },
  head() {
    return createMetaData('About', '', '/about/')
  }
})
</script>

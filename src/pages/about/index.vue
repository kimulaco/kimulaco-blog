<template>
  <div class="PageAbout">
    <PageTitle>About</PageTitle>

    <!-- eslint-disable vue/no-v-html -->
    <PostContent class="About_content" v-html="$md.render(about)" />
    <!-- eslint-enable vue/no-v-html -->
  </div>
</template>

<script lang="ts">
import { Context } from '@nuxt/types'
import Vue from 'vue'
import PageTitle from '../../components/module/PageTitle.vue'
import PostContent from '../../components/post/PostContent.vue'
import { getAbout } from '../../plugins/cms'
import { createMetaData } from '../../utils/blog'

type LocalData = {
  about: string
}

export default Vue.extend({
  name: 'PageAbout',
  layout: 'single',
  components: {
    PageTitle,
    PostContent
  },
  async asyncData({ app }: Context): Promise<LocalData> {
    const about = await getAbout()
    return {
      about: app.$md.render(about)
    }
  },
  head() {
    return createMetaData('About', '', '/about/')
  }
})
</script>

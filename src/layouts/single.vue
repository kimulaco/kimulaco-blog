<template>
  <div class="Layout">
    <SiteHeader />

    <SiteColumn>
      <template v-slot:main>
        <SiteMain>
          <nuxt />
        </SiteMain>
      </template>
    </SiteColumn>

    <SiteFooter />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import SiteHeader from '../components/layout/SiteHeader.vue'
import SiteColumn from '../components/layout/SiteColumn.vue'
import SiteMain from '../components/layout/SiteMain.vue'
import SiteFooter from '../components/layout/SiteFooter.vue'

export default Vue.extend({
  name: 'Layout',
  components: {
    SiteHeader,
    SiteColumn,
    SiteMain,
    SiteFooter,
  },
})
</script>

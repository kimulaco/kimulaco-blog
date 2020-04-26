<template>
  <div class="Layout">
    <SiteHeader />

    <SiteMain>
      <nuxt />
    </SiteMain>

    <SiteFooter />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import SiteHeader from '../components/layout/SiteHeader.vue'
import SiteMain from '../components/layout/SiteMain.vue'
import SiteFooter from '../components/layout/SiteFooter.vue'

export default Vue.extend({
  name: 'Layout',
  components: {
    SiteHeader,
    SiteMain,
    SiteFooter
  }
})
</script>

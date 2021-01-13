<template>
  <main class="SiteMain">
    <div class="SiteMain_inner">
      <slot />
    </div>
  </main>
</template>

<script lang="ts">
import Vue from 'vue'
import SiteInner from '../layout/SiteInner.vue'

export default Vue.extend({
  name: 'SiteMain',
  components: {
    SiteInner,
  },
})
</script>

<style lang="scss" scoped>
.SiteMain {
  padding: 0 0 32px;
}
</style>

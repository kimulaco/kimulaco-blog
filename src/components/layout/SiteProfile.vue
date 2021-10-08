<template>
  <div class="SiteProfile">
    <SiteInner class="SiteProfile_inner">
      <slot />
    </SiteInner>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import SiteInner from '../layout/SiteInner.vue'

export default Vue.extend({
  name: 'SiteProfile',
  components: {
    SiteInner,
  },
})
</script>

<style lang="scss" scoped>
.SiteProfile {
  padding: 32px 0 24px;
}
.SiteProfile_inner {
  @include media() {
    padding: 0 20px;
  }
}
</style>

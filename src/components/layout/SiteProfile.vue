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
    SiteInner
  }
})
</script>

<style lang="scss" scoped>
.SiteProfile {
  padding: 24px 0;
  &_inner {
    @include media() {
      padding: 0 20px;
    }
  }
}
</style>

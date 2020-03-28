<template>
  <main class="SiteMain">
    <SiteInner class="SiteMain_inner">
      <slot />
    </SiteInner>
  </main>
</template>

<script lang="ts">
import Vue from 'vue'
import SiteInner from '../layout/SiteInner.vue'

export default Vue.extend({
  name: 'SiteMain',
  components: {
    SiteInner
  }
})
</script>

<style lang="scss" scoped>
.SiteMain {
  padding: 16px 0 24px;
  margin: 60px 0 0;
  &_inner {
    @include media() {
      padding: 0 20px;
    }
  }
}
</style>

<template>
  <div class="SiteInner">
    <slot />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'SiteInner'
})
</script>

<style lang="scss" scoped>
.SiteInner {
  @extend %layout-inner;
  @include reset-child-margin();
}
</style>

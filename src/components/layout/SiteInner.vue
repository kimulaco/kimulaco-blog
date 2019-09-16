<template>
  <div class="SiteInner">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'SiteInner'
}
</script>

<style lang="scss" scoped>
.SiteInner {
  @extend %layout-inner;
}
</style>

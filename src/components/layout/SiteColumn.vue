<template>
  <div class="SiteColumn">
    <div class="SiteColumn_inner">
      <div class="SiteColumn_main">
        <slot name="main" />
      </div>
      <div class="SiteColumn_sub">
        <slot name="sub" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SiteColumn'
}
</script>

<style lang="scss" scoped>
.SiteColumn {
  &_inner {
    @extend %layout-inner;
    display: flex;
  }

  &_main {
    @include reset-child-margin();
    width: 100%;
  }

  &_sub {
    @include reset-child-margin();
    width: 280px;
    min-width: 280px;
  }
}
</style>

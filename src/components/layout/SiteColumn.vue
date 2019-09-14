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
    @include media() {
      display: flex;
      align-items: flex-start;
    }
  }
  &_main {
    @include reset-child-margin();
    width: 100%;
  }
  &_sub {
    @include reset-child-margin();
    margin: 24px 0 0;
    @include media() {
      width: 280px;
      min-width: 280px;
      margin: 0 0 0 24px;
    }
  }
}
</style>

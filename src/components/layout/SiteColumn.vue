<template>
  <div class="SiteColumn">
    <SiteInner class="SiteColumn_inner">
      <div v-if="$slots.main" class="SiteColumn_main">
        <slot name="main" />
      </div>
      <div v-if="$slots.sub" class="SiteColumn_sub">
        <slot name="sub" />
      </div>
    </SiteInner>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import SiteInner from '../layout/SiteInner.vue'

export default Vue.extend({
  name: 'SiteColumn',
  components: {
    SiteInner
  }
})
</script>

<style lang="scss" scoped>
.SiteColumn {
  &_inner {
    @include media() {
      display: flex;
      justify-content: center;
      align-items: flex-start;
    }
  }
  &_main {
    @include reset-child-margin();

    width: 100%;
    max-width: 776px;
  }
  &_sub {
    @include reset-child-margin();

    padding: 24px 0 0;
    margin: 24px 0 0;
    position: relative;

    @include media() {
      padding: 0;
      width: 240px;
      min-width: 240px;
      margin: 0 0 0 24px;
    }
    &::before {
      content: '';
      display: block;
      width: 100%;
      height: 1px;
      background: rgba($COLOR_GRAY, 0.5);
      position: absolute;
      top: 0;
      left: 0;
      @include media() {
        display: none;
      }
    }
  }
}
</style>

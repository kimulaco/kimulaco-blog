<template>
  <div
    class="SiteColumn"
    :class="{
      '--single': !$slots.sub,
    }"
  >
    <SiteInner class="SiteColumn__inner">
      <div class="SiteColumn_main">
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
    SiteInner,
  }
})
</script>

<style lang="scss" scoped>
.SiteColumn__inner {
  padding: 32px 20px;

  @include media() {
    display: flex;
    align-items: flex-start;
  }
}
.SiteColumn_main {
  width: 100%;

  @include media() {
    width: $MAIN_WIDTH;

    .SiteColumn.--single & {
      width: 100%;
    }
  }
}
.SiteColumn_sub {
  @include media() {
    width: #{$ASIDE_WIDTH - 20px};
    margin-left: 20px;
  }
}
</style>

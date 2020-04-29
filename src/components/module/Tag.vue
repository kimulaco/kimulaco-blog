<template>
  <nuxt-link
    :is="to ? 'nuxt-link' : 'span'"
    :to="to"
    class="Tag"
  >
    <slot />
  </nuxt-link>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'Tag',
  props: {
    to: {
      type: String,
      default: ''
    }
  }
})
</script>

<style lang="scss" scoped>
.Tag {
  display: block;
  font-size: 14px;
  font-weight: bold;
  padding: 1px 10px 0;
  border-radius: 14px;
  box-shadow: 0 0 2px rgba($COLOR_BLACK, 0.3);
  transition: 0.3s;
  @include media() {
    @include active() {
      box-shadow: 0 0 4px rgba($COLOR_BLACK, 0.4);
    }
  }
}
</style>

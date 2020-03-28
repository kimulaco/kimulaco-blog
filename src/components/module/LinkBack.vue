<template>
  <p class="LinkBack">
    <nuxt-link :to="to" class="LinkBack_anchor">
      <slot />
    </nuxt-link>
  </p>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'LinkBack',
  props: {
    to: {
      type: String,
      default: ''
    }
  }
})
</script>

<style lang="scss" scoped>
.LinkBack {
  font-size: 14px;
  margin: 0;
  &_anchor {
    display: inline-block;
    padding: 0 0 0 12px;
    position: relative;
    transition: 0.3s;
    @include active() {
      opacity: 0.7;
    }
    &::before {
      content: '';
      display: block;
      width: 4px;
      height: 4px;
      border-style: solid;
      border-color: inherit;
      border-width: 0 0 2px 2px;
      transform: rotate(45deg);
      position: absolute;
      top: 0.5em;
      left: 4px;
    }
  }
}
</style>

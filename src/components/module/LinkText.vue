<template>
  <p class="LinkText">
    <nuxt-link :to="to" class="LinkText_anchor">
      <slot />
    </nuxt-link>
  </p>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'LinkText',
  props: {
    to: {
      type: String,
      default: '',
    },
  },
})
</script>

<style lang="scss" scoped>
.LinkText {
  font-size: 15px;
  margin: 0;
}
.LinkText_anchor {
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
    transform: rotate(225deg);
    position: absolute;
    top: 0.5em;
    left: 0;
  }
}
.LinkText.-back {
  .LinkText_anchor {
    &::before {
      transform: rotate(45deg);
      left: 4px;
    }
  }
}
</style>

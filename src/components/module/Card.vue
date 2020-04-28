<template>
  <div :is="tag" class="Card">
    <div :is="to ? 'nuxt-link' : 'div'" :to="to || false" class="Card_inner">
      <slot />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'Card',
  props: {
    tag: {
      type: String,
      default: 'div'
    },
    to: {
      type: String,
      default: ''
    }
  }
})
</script>

<style lang="scss" scoped>
.Card {
  background: $COLOR_WHITE;
}
.Card_inner {
  @include reset-child-margin();

  display: block;
  width: 100%;
  padding: 16px;
  border: 1px solid rgba($COLOR_BLACK, 0.1);
  border-radius: 6px;
  color: $COLOR_BLACK;
  box-shadow: 0 2px 2px rgba($COLOR_BLACK, 0.1);
  transition: 0.3s;
}
a.Card {
  &_inner {
    @include active() {
      transform: translateY(-3px);
      box-shadow: 0 2px 8px rgba($COLOR_BLACK, 0.2);
    }
  }
}
</style>

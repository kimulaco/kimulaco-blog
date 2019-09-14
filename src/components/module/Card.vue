<template>
  <div :is="tag" class="Card">
    <div :is="to ? 'nuxt-link' : 'div'" :to="to || false" class="Card_inner">
      <slot />
    </div>
  </div>
</template>

<script>
export default {
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
}
</script>

<style lang="scss" scoped>
.Card {
  background: $COLOR_WHITE;
  &_inner {
    @include reset-child-margin();
    display: block;
    width: 100%;
    padding: 10px;
    border: 1px solid rgba($COLOR_BLACK, 0.1);
    color: $COLOR_BLACK;
    box-shadow: 0 2px 2px rgba($COLOR_BLACK, 0.1);
    transition: 0.3s;
    @include active() {
      box-shadow: 0 2px 4px rgba($COLOR_BLACK, 0.2);
    }
  }
}
</style>

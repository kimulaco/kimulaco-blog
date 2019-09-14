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
    padding: 16px;
    border: 1px solid rgba($COLOR_BLACK, 0.1);
    border-radius: 4px;
    color: $COLOR_BLACK;
    box-shadow: 0 2px 4px rgba($COLOR_BLACK, 0.2);
    transition: 0.3s;
  }
}
a.Card {
  &_inner {
    @include active() {
      transform: translateY(-3px);
      box-shadow: 0 2px 10px rgba($COLOR_BLACK, 0.3);
    }
  }
}
</style>

<template>
  <div :is="tag" class="Card">
    <div class="Card_inner">
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
    }
  }
}
</script>

<style lang="scss" scoped>
.Card {
  border: 1px solid #999;
}
</style>

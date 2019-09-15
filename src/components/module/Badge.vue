<template>
  <p :class="`-${category}`" class="Badge">
    <svg-icon name="category-cording" class="Badge_icon" />
    <span class="Badge_text">{{ category }}</span>
  </p>
</template>

<script>
export default {
  name: 'Badge',
  props: {
    category: {
      type: String,
      default: 'cording'
    }
  }
}
</script>

<style lang="scss" scoped>
.Badge {
  background: $COLOR_PURPLE;
  width: 32px;
  height: 32px;
  margin: 0;
  border: 3px solid $COLOR_WHITE;
  border-radius: 50%;
  overflow: hidden;
  box-shadow: 0 0 0 1px rgba($COLOR_BLACK, 0.1), 0 0 4px rgba($COLOR_BLACK, 0.2);
  position: relative;
  &_icon {
    color: $COLOR_WHITE;
    width: 16px;
    height: 16px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  &_text {
    color: transparent;
    text-indent: 32px;
  }
  &.-cording {
    background: $COLOR_PURPLE;
  }
}
</style>

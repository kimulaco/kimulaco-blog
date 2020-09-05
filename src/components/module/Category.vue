<template>
  <p class="Category">
    <svg-icon name="icon-category" class="Category_icon" />
    <span class="Category_text"><slot /></span>
  </p>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'Category',
})
</script>

<style lang="scss" scoped>
.Category {
  font-size: 12px;
  color: $COLOR_GRAY;
  display: flex;
  margin: 0;
}
.Category_icon {
  fill: $COLOR_GRAY;
  width: 16px;
  height: 16px;
  margin: 2px 4px 0 0;
  transform: translateY(-1px);
}
.Category_text {
  display: block;
}
</style>

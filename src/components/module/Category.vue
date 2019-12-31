<template>
  <p class="Category">
    <svg-icon name="icon-category" class="Category_icon" />
    <span class="Category_text"><slot /></span>
  </p>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'Category'
})
</script>

<style lang="scss" scoped>
.Category {
  font-size: 12px;
  color: $COLOR_GRAY;
  display: flex;
  &_icon {
    width: 14px;
    height: 14px;
    margin: 0 8px 0 0;
  }
}
</style>

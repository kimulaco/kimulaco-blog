<template>
  <div class="Tags">
    <svg-icon name="icon-tags" class="Tags_icon" />
    <ul class="Tags_list">
      <li v-for="tag in tags" :key="tag" class="Tags_item">{{ tag }}</li>
    </ul>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'Tags',
  props: {
    tags: {
      type: Array,
      default() {
        return []
      }
    }
  }
})
</script>

<style lang="scss" scoped>
$margin-top: 5px;
$margin-left: 10px;

.Tags {
  font-size: 14px;
  display: flex;
  &_list {
    display: flex;
    flex-wrap: wrap;
    padding: 0;
    margin: -#{$margin-top} 0 0 -#{$margin-left};
    list-style: none;
  }
  &_item {
    margin: #{$margin-top} 0 0 #{$margin-left};
  }
  &_icon {
    color: $COLOR_GRAY;
    width: 14px;
    height: 14px;
    margin: 0 8px 0 0;
    transform: translateY(1px);
  }
}
</style>

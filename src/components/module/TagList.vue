<template>
  <ul class="TagList">
    <li v-for="tag in tags" :key="tag.id" class="TagList_item">
      <Tag :to="`/tag/${tag.id}/`">{{ tag.name }} ({{ tag.count }})</Tag>
    </li>
  </ul>
</template>

<script lang="ts">
import Vue from 'vue'
import Tag from './Tag.vue'

export default Vue.extend({
  name: 'TagList',
  components: {
    Tag,
  },
  props: {
    tags: {
      type: Array,
      default() {
        return []
      },
    },
  },
})
</script>

<style lang="scss" scoped>
$margin-top: 10px;
$margin-left: 10px;

.TagList {
  display: flex;
  flex-wrap: wrap;
  padding: 0;
  margin: -#{$margin-top} 0 0 -#{$margin-left};
  list-style: none;
}
.TagList_item {
  margin: #{$margin-top} 0 0 #{$margin-left};
}
</style>

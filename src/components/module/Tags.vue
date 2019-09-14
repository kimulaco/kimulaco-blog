<template>
  <div class="Tags">
    <ul class="Tags_list">
      <li v-for="tag in tags" :key="tag" class="Tags_item">{{ tag }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Tags',
  props: {
    tags: {
      type: Array,
      default() {
        return []
      }
    }
  }
}
</script>

<style lang="scss" scoped>
$margin-top: 5px;
$margin-left: 10px;

.Tags {
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
}
</style>

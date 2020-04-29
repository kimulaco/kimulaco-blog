<template>
  <div class="Tags">
    <b class="Tags_heading">Tags: </b>
    <ul class="Tags_list">
      <li v-for="tag in tags" :key="tag.id" class="Tags_item">
        <nuxt-link :to="`/tag/${tag.id}/`" class="Tags_link">
          {{ tag.name }}
        </nuxt-link>
      </li>
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
$margin-left: 8px;

.Tags {
  font-size: 14px;
  display: flex;
  color: $COLOR_GRAY;
}
.Tags_heading {
  font-weight: normal;
  margin: 0 4px 0 0;
}
.Tags_list {
  display: flex;
  flex-wrap: wrap;
  padding: 0;
  margin: -#{$margin-top} 0 0 -#{$margin-left};
  list-style: none;
}
.Tags_item {
  margin: #{$margin-top} 0 0 #{$margin-left};
}
.Tags_link {
  transition: 0.3s;
  @include media() {
    @include active() {
      opacity: 0.8;
    }
  }
}
.Tags_icon {
  fill: $COLOR_GRAY;
  width: 14px;
  height: 14px;
  margin: 2px 8px 0 0;
  transform: translateY(1px);
}
</style>

<template>
  <section class="PostLink">
    <div class="PostLink_inner">
      <h3 class="PostLink_heading">
        <nuxt-link :to="`/post/${post.id}/`">{{ post.title }}</nuxt-link>
      </h3>
      <div class="PostLink_meta">
        <Tags v-if="post.tags" :tags="post.tags" class="PostLink_tags" />
        <Timestamp
          :created-at="post.created_at"
          :updated-at="post.updated_at"
          class="PostLink_timestamp"
        />
      </div>
      <p class="PostLink_description">{{ post.description }}</p>
    </div>
  </section>
</template>

<script lang="ts">
import Vue from 'vue'
import Tags from '../module/Tags.vue'
import Timestamp from '../module/Timestamp.vue'

export default Vue.extend({
  name: 'PostLink',
  components: {
    Tags,
    Timestamp
  },
  props: {
    post: {
      type: Object,
      required: true
    }
  }
})
</script>

<style lang="scss" scoped>
.PostLink {
  border-bottom: 1px solid $COLOR_LIGHTGRAY;
  position: relative;
  &:first-child {
    border-top: 1px solid $COLOR_LIGHTGRAY;
  }
}
.PostLink_inner {
  display: block;
  padding: 24px 20px;
  color: $COLOR_BLACK;
}
.PostLink_heading {
  font-size: 24px;
  padding: 5px 0;
  margin: 0;
  color: $COLOR_BLUE;
}
.PostLink_meta {
  display: flex;
  flex-wrap: wrap;
}
.PostLink_tags {
  margin: 0 10px 0 0;
  @include media() {
    margin: 0 0 12px;
  }
}
.PostLink_description {
  font-size: 15px;
  margin: 7px 0 0;
  padding: 0;
}
</style>

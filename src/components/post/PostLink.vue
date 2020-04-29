<template>
  <section class="PostLink">
    <div class="PostLink_inner">
      <h3 class="PostLink_heading">
        <nuxt-link :to="`/post/${post.id}/`" class="PostLink_heading-link">
          {{ post.title }}
        </nuxt-link>
      </h3>
      <div class="PostLink_meta">
        <Timestamp
          :created-at="post.created_at"
          :updated-at="post.updated_at"
          class="PostLink_timestamp"
        />
        <Tags v-if="postTag.length > 0" :tags="postTag" class="PostLink_tags" />
      </div>
      <p class="PostLink_description">{{ post.description }}</p>
    </div>
  </section>
</template>

<script lang="ts">
import Vue from 'vue'
import Tags from '../module/Tags.vue'
import Timestamp from '../module/Timestamp.vue'
import { Tag } from '../../types/blog'

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
  },
  computed: {
    postTag() {
      const { post } = this as any
      if (!post || !post.tag) {
        return []
      }
      return post.tag.map((tag: Tag) => {
        return {
          id: tag.id,
          name: tag.name
        }
      })
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
  padding: 20px 10px;
  color: $COLOR_BLACK;
  @include media() {
    padding: 24px 20px;
  }
}
.PostLink_heading {
  font-size: 24px;
  padding: 5px 0;
  line-height: 1.4;
  margin: 0;
  color: $COLOR_BLUE;
}
.PostLink_heading-link {
  transition: 0.3s;
  @include media() {
    @include active() {
      opacity: 0.8;
    }
  }
}
.PostLink_meta {
  display: flex;
  flex-wrap: wrap;
}
.PostLink_timestamp {
  margin: 0 16px 0 0;
}
.PostLink_description {
  font-size: 15px;
  margin: 7px 0 0;
  padding: 0;
}
</style>

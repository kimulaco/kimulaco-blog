<template>
  <Card v-if="posts.length > 0" class="PostsWidget" tag="section">
    <h2 class="PostsWidget_title"><slot name="title" /></h2>
    <ul class="PostsWidget_list">
      <li
        v-for="post in posts"
        :key="`popular-posts_${post.id}`"
        class="PostsWidget_item"
      >
        <nuxt-link :to="createPostPath(post.id)" class="PostsWidget_item-link">
          <span class="PostsWidget_item-title">{{ post.title }}</span>
        </nuxt-link>
      </li>
    </ul>
  </Card>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue'
import Card from '../module/Card.vue'
import { Post } from '../../types/blog'

export default Vue.extend({
  name: 'PostsWidget',
  components: {
    Card,
  },
  props: {
    posts: {
      type: Array as PropType<Post[]>,
      default() {
        return []
      },
    },
    from: {
      type: String,
      default: '',
    },
  },
  methods: {
    createPostPath(postId: string): string {
      let path = `/post/${postId}/`
      if (this.from) {
        path += `?from=${this.from}`
      }
      return path
    },
  },
})
</script>

<style lang="scss" scoped>
.PostsWidget {
  color: $COLOR_WHITE;
  margin: 0;
}
.PostsWidget_title {
  font-size: 18px;
  font-weight: bold;
  margin: 0 0 10px;
}
.PostsWidget_list {
  padding: 0;
  margin: 0;
  list-style: none;
}
.PostsWidget_item {
  border-top: 1px solid $COLOR_LIGHTGRAY;
  &:last-child {
    margin-bottom: 0;
    border-bottom: 1px solid $COLOR_LIGHTGRAY;
  }
}
.PostsWidget_item-link {
  display: block;
  padding: 8px 8px;
}
.PostsWidget_item-title {
  width: 100%;
  display: block;
  font-size: 14px;
  font-weight: bold;
}
</style>

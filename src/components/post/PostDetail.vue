<template>
  <article class="PostDetail">
    <div class="PostDetail_head">
      <h1 class="PostDetail_heading">{{ post.title }}</h1>
      <Timestamp
        :created-at="post.created_at"
        :updated-at="post.updated_at"
        class="PostDetail_timestamp"
      />
      <Tags v-if="postTag.length > 0" :tags="postTag" class="PostDetail_tags" />
      <img
        v-if="post.image"
        :src="post.image.url"
        class="PostDetail_image"
        alt=""
      />
      <Share
        :title="post.title"
        :description="post.description"
        :url="shareUrl"
      />
    </div>
    <!-- eslint-disable vue/no-v-html -->
    <PostContent class="PostDetail_content" v-html="$md.render(post.content)" />
    <!-- eslint-enable vue/no-v-html -->
    <div class="PostDetail_foot">
      <Share
        :title="post.title"
        :description="post.description"
        :url="shareUrl"
      />
      <LinkBack to="/" class="PostDetail_back">記事一覧に戻る</LinkBack>
    </div>
  </article>
</template>

<script lang="ts">
import Vue from 'vue'
import LinkBack from '../module/LinkBack.vue'
import Tags from '../module/Tags.vue'
import Timestamp from '../module/Timestamp.vue'
import Share from '../module/Share.vue'
import PostContent from '../post/PostContent.vue'
import { SITE_URL } from '../../utils/blog'

export default Vue.extend({
  name: 'PostDetail',
  components: {
    LinkBack,
    Tags,
    Timestamp,
    Share,
    PostContent
  },
  props: {
    post: {
      type: Object,
      required: true
    }
  },
  computed: {
    postTag() {
      if (!this.post || !this.post.tag) {
        return []
      }
      return this.post.tag.map((tag: any) => {
        return {
          id: tag.id,
          name: tag.name
        }
      })
    },
    shareUrl(): string {
      return `${SITE_URL}/post/${this.post.id}`
    }
  }
})
</script>

<style lang="scss" scoped>
.PostDetail {
  padding: 0 10px;
  position: relative;
  &_head {
    padding: 0 0 16px;
    @include media() {
      padding: 0 0 32px;
    }
  }
  &_heading {
    font-size: 28px;
    padding: 5px 0;
    margin: 0 0 8px;
    line-height: 1.2;
    @include media() {
      font-size: 32px;
    }
  }
  &_category {
    margin: 0 16px 16px 0;
  }
  &_tags {
    margin: 0 0 16px;
    @include media() {
      margin: 0 0 32px;
    }
  }
  &_image {
    margin: 0 0 16px;
    @include media() {
      margin: 0 0 32px;
    }
  }
  &_content {
    margin: 0;
    padding: 20px 0;
    position: relative;
    &::before {
      content: '';
      display: block;
      background: $COLOR_LIGHTGRAY;
      width: calc(100% + 20px);
      height: 1px;
      position: absolute;
      top: 0;
      left: -10px;
    }
    @include media() {
      padding: 32px 0;
    }
  }
  &_foot {
    margin: 0;
    padding: 32px 0 0;
    position: relative;
    &::before {
      content: '';
      display: block;
      background: $COLOR_LIGHTGRAY;
      width: calc(100% + 32px);
      height: 1px;
      position: absolute;
      top: 0;
      left: -16px;
    }
  }
}

.PostDetail_back.LinkBack {
  margin: 32px 0 0;
}
</style>

<template>
  <Card class="PostDetail" tag="article">
    <div class="PostDetail_head">
      <h1 class="PostDetail_heading">{{ post.title }}</h1>
      <div class="PostDetail_meta">
        <Category v-if="post.category" class="PostDetail_category">
          {{ post.category.name }}
        </Category>
        <Tags v-if="post.tags" :tags="post.tags" class="PostDetail_tags" />
        <Timestamp
          :created-at="post.createdAt"
          :updated-at="post.updatedAt"
          class="PostDetail_timestamp"
        />
      </div>
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
      <LinkBack to="/" class="PostDetail_back">トップページに戻る</LinkBack>
    </div>
  </Card>
</template>

<script lang="ts">
import Vue from 'vue'
import Card from '../module/Card.vue'
import LinkBack from '../module/LinkBack.vue'
import Category from '../module/Category.vue'
import Tags from '../module/Tags.vue'
import Timestamp from '../module/Timestamp.vue'
import Share from '../module/Share.vue'
import PostContent from '../post/PostContent.vue'

export default Vue.extend({
  name: 'PostDetail',
  components: {
    Card,
    LinkBack,
    Category,
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
    shareUrl() {
      return `/post/${this.post.id}`
    }
  }
})
</script>

<style lang="scss" scoped>
.PostDetail {
  margin: 0 0 32px;
  position: relative;
  &_head {
    padding: 0 0 16px;
  }
  &_heading {
    font-size: 28px;
    padding: 5px 0;
    margin: 0 0 8px;
  }
  &_meta {
    display: flex;
    flex-wrap: wrap;
  }
  &_category {
    margin: 0 16px 16px 0;
  }
  &_tags {
    margin: 0 0 10px;
    @include media() {
      margin: 0 0 12px;
    }
  }
  &_timestamp {
    margin: 0 0 16px;
  }
  &_image {
    margin: 0 0 16px;
  }
  &_content {
    margin: 0;
    padding: 20px 0;
    position: relative;
    &::before {
      content: '';
      display: block;
      background: rgba($COLOR_GRAY, 0.2);
      width: calc(100% + 32px);
      height: 1px;
      position: absolute;
      top: 0;
      left: -16px;
    }
    @include media() {
      padding: 32px 0;
    }
  }
  &_foot {
    margin: 0;
    padding: 20px 0 0;
    position: relative;
    &::before {
      content: '';
      display: block;
      background: rgba($COLOR_GRAY, 0.2);
      width: calc(100% + 32px);
      height: 1px;
      position: absolute;
      top: 0;
      left: -16px;
    }
  }
  &_back {
    margin: 16px 0 0;
  }
}
</style>

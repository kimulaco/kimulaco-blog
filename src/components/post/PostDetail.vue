<template>
  <Card class="PostDetail" tag="article">
    <div class="PostDetail_head">
      <h1 class="PostDetail_heading">{{ title }}</h1>
      <Badge :category="category" class="PostDetail_category" />
    </div>
    <Tags :tags="tags" class="PostDetail_tags" />
    <Timestamp
      :created-at="createdAt"
      :updated-at="updatedAt"
      class="PostDetail_timestamp"
    />
    <!-- eslint-disable vue/no-v-html -->
    <PostContent class="PostDetail_content" v-html="content" />
    <!-- eslint-enable vue/no-v-html -->
    <div class="PostDetail_foot">
      <Share :title="title" :description="description" :url="shareUrl" />
      <LinkBack to="/" class="PostDetail_back">トップページに戻る</LinkBack>
    </div>
  </Card>
</template>

<script lang="ts">
import Vue from 'vue'
import Card from '../module/Card.vue'
import Badge from '../module/Badge.vue'
import LinkBack from '../module/LinkBack.vue'
import Tags from '../module/Tags.vue'
import Timestamp from '../module/Timestamp.vue'
import Share from '../module/Share.vue'
import PostContent from '../post/PostContent.vue'
import { siteUrl } from '../../plugins/blog'

export default Vue.extend({
  name: 'PostDetail',
  components: {
    Card,
    Badge,
    LinkBack,
    Tags,
    Timestamp,
    Share,
    PostContent
  },
  props: {
    id: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    category: {
      type: String,
      required: true
    },
    tags: {
      type: Array,
      default() {
        return []
      }
    },
    content: {
      type: String,
      required: true
    },
    createdAt: {
      type: String,
      required: true
    },
    updatedAt: {
      type: String,
      default: ''
    }
  },
  computed: {
    shareUrl() {
      return `${siteUrl}/post/${this.id}/`
    }
  }
})
</script>

<style lang="scss" scoped>
.PostDetail {
  margin: 0 0 32px;
  position: relative;
  &_head {
    display: flex;
    align-items: flex-start;
    margin: 0 0 8px;
  }
  &_heading {
    font-size: 28px;
    padding: 5px 0;
    max-width: calc(100% - 50px);
    margin: 0 0 10px;
    @include media() {
      margin: 0;
    }
  }
  &_category {
    margin: 8px 0 0 auto;
  }
  &_tags {
    margin: 0 0 10px;
    @include media() {
      margin: 0 0 12px;
    }
  }
  &_timestamp {
    margin: 0 0 10px;
    @include media() {
      margin: 0 0 24px;
    }
  }
  &_content {
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

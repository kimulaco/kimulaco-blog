<template>
  <Card class="PostDetail" tag="article">
    <div class="PostDetail_head">
      <h3 class="PostDetail_heading">{{ title }}</h3>
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
      <p>share</p>
    </div>
  </Card>
</template>

<script>
import Card from '@/components/module/Card'
import Badge from '@/components/module/Badge'
import Tags from '@/components/module/Tags'
import Timestamp from '@/components/module/Timestamp'
import PostContent from '@/components/post/PostContent'

export default {
  name: 'PostDetail',
  components: {
    Card,
    Badge,
    Tags,
    Timestamp,
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
  data() {
    return {
      isActive: false
    }
  }
}
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
      padding: 20px 0 0;
    }
  }
  &_foot {
    margin: 20px 0 0;
    padding: 10px 0 0;
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
}
</style>

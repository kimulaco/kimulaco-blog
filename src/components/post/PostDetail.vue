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
    <p class="PostDetail_content" v-html="content" />
    <!-- eslint-enable vue/no-v-html -->
  </Card>
</template>

<script>
import Card from '@/components/module/Card'
import Badge from '@/components/module/Badge'
import Tags from '@/components/module/Tags'
import Timestamp from '@/components/module/Timestamp'

export default {
  name: 'PostDetail',
  components: {
    Card,
    Badge,
    Tags,
    Timestamp
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
      margin: 0 0 16px;
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
    border-top: 1px solid rgba($COLOR_GRAY, 0.2);
    @include media() {
      padding: 20px 0 0;
    }
  }
}
</style>

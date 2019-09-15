<template>
  <Card class="PostDetail" tag="article">
    <div class="PostDetail_head">
      <h3 class="PostDetail_heading">{{ title }}</h3>
      <p :class="`-${category}`" class="PostDetail_category">
        <CodeSvg class="PostDetail_category-icon" />
        <span class="PostDetail_category-text">{{ category }}</span>
      </p>
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
import Tags from '@/components/module/Tags'
import Timestamp from '@/components/module/Timestamp'
import CodeSvg from '@/assets/img/icon-code.svg'

export default {
  name: 'PostDetail',
  components: {
    Card,
    Tags,
    Timestamp,
    CodeSvg
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
    background: $COLOR_LIGHTGRAY;
    width: 32px;
    height: 32px;
    margin: 8px 0 0 auto;
    border: 3px solid $COLOR_WHITE;
    border-radius: 50%;
    overflow: hidden;
    box-shadow: 0 0 0 1px rgba($COLOR_BLACK, 0.1),
      0 0 4px rgba($COLOR_BLACK, 0.2);
    position: relative;
    &-icon {
      color: $COLOR_WHITE;
      width: 16px;
      height: 16px;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
    &-text {
      color: transparent;
      text-indent: 32px;
    }
    &.-programming {
      background: $COLOR_PURPLE;
    }
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

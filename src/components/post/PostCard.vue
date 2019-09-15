<template>
  <Card
    :class="{ '-active': isActive }"
    :to="`/post/${id}/`"
    class="PostCard"
    tag="section"
  >
    <div class="PostCard_head">
      <h3 class="PostCard_heading">{{ title }}</h3>
      <p :class="`-${category}`" class="PostCard_category">
        <CodeSvg class="PostCard_category-icon" />
        <span class="PostCard_category-text">{{ category }}</span>
      </p>
    </div>
    <Tags :tags="tags" class="PostCard_tags" />
    <Timestamp
      :created-at="createdAt"
      :updated-at="updatedAt"
      class="PostCard_timestamp"
    />
    <p class="PostCard_content">{{ content }}</p>
  </Card>
</template>

<script>
import Card from '@/components/module/Card'
import Tags from '@/components/module/Tags'
import Timestamp from '@/components/module/Timestamp'
import CodeSvg from '@/assets/img/icon-code.svg'

export default {
  name: 'PostCard',
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
.PostCard {
  margin: 0 0 24px;
  position: relative;
  @include media() {
    margin: 0 0 32px;
  }
  &_head {
    display: flex;
    flex-direction: row-reverse;
    align-items: flex-start;
    justify-content: flex-end;
  }
  &_heading {
    font-size: 20px;
    padding: 5px 0;
    max-width: calc(100% - 50px);
    margin: 0 0 10px;
    color: $COLOR_BLUE;
    @include media() {
      margin: 0 0 12px;
    }
  }
  &_category {
    background: $COLOR_LIGHTGRAY;
    width: 32px;
    height: 32px;
    margin: 0 8px 0 0;
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
    &.-code {
      background: $COLOR_PURPLE;
    }
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
      margin: 0 0 12px;
    }
  }
  &_content {
    margin: 0;
    padding: 10px 0 0;
    border-top: 1px solid rgba($COLOR_GRAY, 0.2);
    @include media() {
      padding: 12px 0 0;
    }
  }
}
</style>

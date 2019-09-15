<template>
  <Card
    :class="{ '-active': isActive }"
    :to="`/post/${id}/`"
    class="PostCard"
    tag="section"
  >
    <div class="PostCard_head">
      <h3 class="PostCard_heading">{{ title }}</h3>
      <Badge :category="category" class="PostCard_category" />
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
import Badge from '@/components/module/Badge'
import Tags from '@/components/module/Tags'
import Timestamp from '@/components/module/Timestamp'

export default {
  name: 'PostCard',
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
    margin: 0 8px 0 0;
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

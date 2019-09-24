<template>
  <Card :to="`/post/${id}/`" class="PostCard" tag="section">
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

<script lang="ts">
import Vue from 'vue'
import Card from '../module/Card.vue'
import Badge from '../module/Badge.vue'
import Tags from '../module/Tags.vue'
import Timestamp from '../module/Timestamp.vue'

export default Vue.extend({
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
  }
})
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
    align-items: flex-start;
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
    margin: 0 0 0 auto;
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

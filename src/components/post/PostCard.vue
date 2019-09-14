<template>
  <Card
    :class="{ '-active': isActive }"
    :to="`/post/${id}/`"
    class="PostCard"
    tag="section"
  >
    <h3 class="PostCard_heading">{{ title }}</h3>
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

export default {
  name: 'PostCard',
  components: {
    Card,
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
    content: {
      type: String,
      required: true
    },
    tags: {
      type: Array,
      default() {
        return []
      }
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
  margin: 0 0 16px;
  &_heading {
    font-size: 20px;
    margin: 0 0 10px;
    color: $COLOR_BLUE;
  }
  &_tags {
    margin: 0 0 10px;
  }
  &_timestamp {
    margin: 0 0 10px;
  }
  &_content {
    margin: 0;
  }
}
</style>

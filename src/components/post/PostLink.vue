<template>
  <Card :to="`/post/${post.id}/`" class="PostLink" tag="section">
    <div class="PostLink_column">
      <div class="PostLink_content">
        <h3 class="PostLink_heading">{{ post.title }}</h3>
        <div class="PostLink_meta">
          <Category v-if="post.category" class="PostLink_category">
            {{ post.category.name }}
          </Category>
          <Tags v-if="post.tags" :tags="post.tags" class="PostLink_tags" />
          <Timestamp
            :created-at="post.createdAt"
            :updated-at="post.updatedAt"
            class="PostLink_timestamp"
          />
        </div>
        <p class="PostLink_description">{{ post.description }}</p>
      </div>
      <div v-if="post.image && post.image.url" class="PostLink_img">
        <img :src="post.image.url" alt="" />
      </div>
    </div>
  </Card>
</template>

<script lang="ts">
import Vue from 'vue'
import Card from '../module/Card.vue'
import Tags from '../module/Tags.vue'
import Category from '../module/Category.vue'
import Timestamp from '../module/Timestamp.vue'

export default Vue.extend({
  name: 'PostLink',
  components: {
    Card,
    Tags,
    Category,
    Timestamp
  },
  props: {
    post: {
      type: Object,
      required: true
    }
  }
})
</script>

<style lang="scss" scoped>
.PostLink {
  margin: 0 0 24px;
  position: relative;
  @include media() {
    margin: 0 0 32px;
  }
  &_column {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  &_content {
    flex: 1 0 auto;
    width: 65%;
  }
  &_img {
    width: calc(35% - 16px);
    max-width: 240px;
    margin: 0 0 0 16px;
  }
  &_heading {
    font-size: 20px;
    padding: 5px 0;
    margin: 0 0 10px;
    color: $COLOR_BLUE;
    @include media() {
      margin: 0 0 12px;
    }
  }
  &_meta {
    display: flex;
  }
  &_category {
    margin: 0 10px 0 0;
  }
  &_tags {
    margin: 0 10px 0 0;
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
  &_description {
    font-size: 14px;
    line-height: 1.4;
    margin: 0;
    padding: 10px 0 0;
    border-top: 1px solid rgba($COLOR_GRAY, 0.2);
    @include media() {
      padding: 12px 0 0;
    }
  }
}
</style>

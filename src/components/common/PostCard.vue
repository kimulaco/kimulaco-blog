<template>
  <section class="PostCard">
    <div class="PostCard_inner">
      <h2 class="PostCard_title">
        <nuxt-link :to="href">{{ title }}</nuxt-link>
      </h2>

      <ul class="PostCard_tags">
        <li v-for="tag in tags" :key="tag" class="PostCard_tags-item">
          {{ tag }}
        </li>
      </ul>

      <dl class="PostCard_timestamp">
        <div class="PostCard_timestamp-item">
          <dt class="PostCard_timestamp-title">Created</dt>
          <dd class="PostCard_timestamp-date">{{ createdAt }}</dd>
        </div>
        <div v-if="updatedAt" class="PostCard_timestamp-item">
          <dt class="PostCard_timestamp-title">Updated</dt>
          <dd class="PostCard_timestamp-date">{{ createdAt }}</dd>
        </div>
      </dl>

      <p class="PostCard_content">{{ content }}</p>
    </div>
  </section>
</template>

<script>
export default {
  name: 'PostCard',
  props: {
    id: {
      type: String,
      required: true
    },
    title: {
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
    },
    content: {
      type: String,
      default: ''
    }
  },
  computed: {
    href() {
      return `/post/${this.id}/`
    }
  }
}
</script>

<style lang="scss"></style>

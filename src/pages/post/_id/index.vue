<template>
  <article class="PostDetail">
    <div class="PostDetail_head">
      <h1 class="PostDetail_heading">{{ post.title }}</h1>
      <Timestamp
        :created-at="post.created_at"
        :updated-at="post.updated_at"
        class="PostDetail_timestamp"
      />
      <Tags
        v-if="postTag.length > 0"
        :tags="postTag"
        :link="true"
        class="PostDetail_tags"
      />
      <img
        v-if="post.image"
        :src="post.image.url"
        class="PostDetail_image"
        alt=""
      />
      <Share
        :title="post.title"
        :description="post.description"
        :url="shareUrl"
        @click="$ga.event('share', 'click', $event, 1)"
      />
    </div>
    <!-- eslint-disable vue/no-v-html -->
    <PostContent class="PostDetail_content" v-html="post.content" />
    <!-- eslint-enable vue/no-v-html -->
    <div class="PostDetail_foot">
      <Share
        :title="post.title"
        :description="post.description"
        :url="shareUrl"
        @click="$ga.event('share', 'click', $event, 2)"
      />
      <LinkBack to="/" class="PostDetail_back">記事一覧に戻る</LinkBack>
    </div>
  </article>
</template>

<script lang="ts">
import { Context } from '@nuxt/types'
import Vue from 'vue'
import { Post, Tag } from '../../../types/blog'
import LinkBack from '../../../components/module/LinkBack.vue'
import Tags from '../../../components/module/Tags.vue'
import Timestamp from '../../../components/module/Timestamp.vue'
import Share from '../../../components/module/Share.vue'
import PostContent from '../../../components/post/PostContent.vue'
import { getPost } from '../../../plugins/cms'
import { SITE_URL, createMetaData } from '../../../utils/blog'

type LocalData = {
  post: Post | null
}

export default Vue.extend({
  name: 'PagePostDetail',
  components: {
    LinkBack,
    Tags,
    Timestamp,
    Share,
    PostContent
  },
  async asyncData(context: Context): Promise<LocalData> {
    const { app, params, redirect } = context
    try {
      const post: Post = await getPost(params.id)
      return {
        post: {
          ...post,
          content: app.$md.render(`[[toc]]\n\n${post.content}`)
        }
      }
    } catch (error) {
      redirect({
        path: '/404'
      })
      return { post: null }
    }
  },
  computed: {
    postTag() {
      if (!this.post || !this.post.tag) {
        return []
      }
      return this.post.tag.map((tag: Tag) => {
        return {
          id: tag.id,
          name: tag.name
        }
      })
    },
    shareUrl(): string {
      return `${SITE_URL}/post/${this.post.id}`
    }
  },
  head() {
    let imageUrl: string = ''
    if (this.post.image && this.post.image.url) {
      imageUrl = this.post.image.url
    }
    return createMetaData(
      this.post.title,
      this.post.description,
      `/post/${this.post.id}/`,
      imageUrl
    )
  }
})
</script>

<style lang="scss" scoped>
.PostDetail {
  padding: 0 10px;
  position: relative;
  &_head {
    padding: 0 0 16px;
    @include media() {
      padding: 0 0 32px;
    }
  }
  &_heading {
    font-size: 28px;
    padding: 5px 0;
    margin: 0 0 8px;
    line-height: 1.2;
    @include media() {
      font-size: 32px;
    }
  }
  &_category {
    margin: 0 16px 16px 0;
  }
  &_tags {
    margin: 0 0 16px;
    @include media() {
      margin: 0 0 32px;
    }
  }
  &_image {
    margin: 0 0 16px;
    @include media() {
      margin: 0 0 32px;
    }
  }
  &_content {
    margin: 0;
    padding: 20px 0;
    position: relative;
    &::before {
      content: '';
      display: block;
      background: $COLOR_LIGHTGRAY;
      width: calc(100% + 20px);
      height: 1px;
      position: absolute;
      top: 0;
      left: -10px;
    }
    @include media() {
      padding: 32px 0;
    }
  }
  &_foot {
    margin: 0;
    padding: 32px 0 0;
    position: relative;
    &::before {
      content: '';
      display: block;
      background: $COLOR_LIGHTGRAY;
      width: calc(100% + 32px);
      height: 1px;
      position: absolute;
      top: 0;
      left: -16px;
    }
  }
}

.PostDetail_back.LinkBack {
  margin: 32px 0 0;
}
</style>

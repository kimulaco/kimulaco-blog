<template>
  <div class="PagePostDetail">
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
        <LinkText to="/" class="PostDetail_back -back">記事一覧に戻る</LinkText>
      </div>
    </article>

    <aside v-if="post.related_posts.length > 0">
      <Heading>関連記事</Heading>
      <div>
        <PostLink
          v-for="post in post.related_posts"
          :key="post.id"
          :post="post"
        />
      </div>
    </aside>
  </div>
</template>

<script lang="ts">
import { Context } from '@nuxt/types'
import Vue from 'vue'
import { Post, Tag } from '../../../types/blog'
import Heading from '../../../components/module/Heading.vue'
import LinkText from '../../../components/module/LinkText.vue'
import Tags from '../../../components/module/Tags.vue'
import Timestamp from '../../../components/module/Timestamp.vue'
import Share from '../../../components/module/Share.vue'
import PostContent from '../../../components/post/PostContent.vue'
import PostLink from '../../../components/post/PostLink.vue'
import { getPost } from '../../../plugins/cms'
import { SITE_URL, createMetaData } from '../../../utils/blog'

type LocalData = {
  post: Post | null
}

export default Vue.extend({
  name: 'PagePostDetail',
  components: {
    Heading,
    LinkText,
    Tags,
    Timestamp,
    Share,
    PostContent,
    PostLink
  },
  async asyncData(context: Context): Promise<LocalData> {
    const { app, params, query, redirect } = context
    const draftKey = String(query.draft_key) || ''
    try {
      const post: Post = await getPost(params.id, { draftKey })
      return {
        post: {
          ...post,
          content: app.$md.render(`[[toc]]\n\n${post.content}`)
        }
      }
    } catch (error) {
      console.error(error)
      redirect({
        path: '/404'
      })
      return { post: null }
    }
  },
  computed: {
    postTag() {
      const { post } = this as any
      if (!post || !post.tag) {
        return []
      }
      return post.tag.map((tag: Tag) => {
        return {
          id: tag.id,
          name: tag.name
        }
      })
    },
    shareUrl(): string {
      const { post } = this as any
      return `${SITE_URL}/post/${post.id}`
    }
  },
  head() {
    const { post } = this as any
    let imageUrl: string = ''
    if (post.image && post.image.url) {
      imageUrl = post.image.url
    }
    return createMetaData(
      post.title,
      post.description,
      `/post/${post.id}/`,
      imageUrl
    )
  }
})
</script>

<style lang="scss" scoped>
.PostDetail {
  padding: 0 10px;
  position: relative;
}
.PostDetail_head {
  padding: 0 0 16px;
  @include media() {
    padding: 0 0 32px;
  }
}
.PostDetail_heading {
  font-size: 28px;
  padding: 5px 0;
  margin: 0 0 8px;
  line-height: 1.4;
  @include media() {
    font-size: 32px;
  }
}
.PostDetail_category {
  margin: 0 16px 16px 0;
}
.PostDetail_tags {
  margin: 0 0 16px;
  @include media() {
    margin: 0 0 32px;
  }
}
.PostDetail_image {
  margin: 0 0 16px;
  @include media() {
    margin: 0 0 32px;
  }
}
.PostDetail_content {
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
.PostDetail_foot {
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

.PostDetail_back.LinkText {
  margin: 32px 0 0;
}
</style>

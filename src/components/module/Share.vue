<template>
  <div class="Share">
    <ul class="Share_list">
      <li v-if="social.includes('twitter')" class="Share_item">
        <a
          :href="sharePageUrl.twitter"
          class="Share_anchor -twitter"
          target="_blank"
          rel="noopener noreferrer"
          title="Twitterでシェアする"
          @click="$emit('click', 'Twitter')"
        >
          <svg-icon name="icon-twitter" class="Share_icon" />
          <span class="Share_text">Twitterでシェアする</span>
        </a>
      </li>

      <li v-if="social.includes('facebook')" class="Share_item">
        <a
          :href="sharePageUrl.facebook"
          class="Share_anchor -facebook"
          target="_blank"
          rel="noopener noreferrer"
          title="Facebookでシェアする"
          @click="$emit('click', 'Facebook')"
        >
          <svg-icon name="icon-facebook" class="Share_icon" />
          <span class="Share_text">Facebookでシェアする</span>
        </a>
      </li>

      <li v-if="social.includes('feedly')" class="Share_item">
        <a
          :href="sharePageUrl.feedly"
          class="Share_anchor -feedly"
          target="_blank"
          rel="noopener noreferrer"
          title="Feedlyでフォローする"
          @click="$emit('click', 'Feedly')"
        >
          <img src="@/assets/img/icon-feedly.png" alt="" />
          <span class="Share_text">Feedlyでフォローする</span>
        </a>
      </li>

      <li v-if="social.includes('line')" class="Share_item">
        <a
          :href="sharePageUrl.line"
          class="Share_anchor -line"
          target="_blank"
          rel="noopener noreferrer"
          title="LINEで送る"
          @click="$emit('click', 'LINE')"
        >
          <svg-icon name="icon-line" class="Share_icon" />
          <span class="Share_text">LINEで送る</span>
        </a>
      </li>

      <li v-if="social.includes('hatena')" class="Share_item">
        <a
          :href="sharePageUrl.hatena"
          class="Share_anchor -hatena"
          target="_blank"
          rel="noopener noreferrer"
          title="はてなブックマークでブックマークする"
          @click="$emit('click', 'hatena')"
        >
          <svg-icon name="icon-hatena" class="Share_icon" />
          <span class="Share_text">はてなブックマークでブックマークする</span>
        </a>
      </li>

      <li v-if="social.includes('pocket')" class="Share_item">
        <a
          :href="sharePageUrl.pocket"
          class="Share_anchor -pocket"
          target="_blank"
          rel="noopener noreferrer"
          title="Pocketに保存する"
          @click="$emit('click', 'Pocket')"
        >
          <svg-icon name="icon-pocket" class="Share_icon" />
          <span class="Share_text">Pocketに保存する</span>
        </a>
      </li>

      <li v-if="social.includes('clipbord')" class="Share_item">
        <button
          type="button"
          class="Share_anchor -clipbord"
          title="URLをクリップボードにコピーする"
          @click="handleCopyClipbord"
        >
          <svg-icon name="icon-clipbord" class="Share_icon" />
          <span class="Share_text">URLをクリップボードにコピーする</span>
        </button>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import copyToClipbord from '../../utils/copy'
import { FEED_URL } from '../../utils/blog'

type ShareURLs = {
  twitter: string
  facebook: string
  feedly: string
  hatena: string
  pocket: string
}

export default Vue.extend({
  name: 'Share',
  props: {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    url: {
      type: String,
      required: true,
    },
    social: {
      type: Array,
      default() {
        return ['twitter', 'facebook', 'feedly', 'pocket', 'hatena', 'clipbord']
      },
    },
  },
  computed: {
    encodedTitle(): string {
      const { title } = this as any
      if (process.client) {
        return window.encodeURI(title)
      }
      return title
    },
    encodedDesc(): string {
      const { description } = this as any
      if (process.client) {
        return window.encodeURI(description)
      }
      return description
    },
    sharePageUrl(): ShareURLs {
      return {
        twitter: `https://twitter.com/share?url=${this.url}&text=${this.encodedTitle} ${this.encodedDesc}`,
        facebook: `https://www.facebook.com/share.php?u=${this.url}`,
        feedly: `https://feedly.com/i/subscription/feed${encodeURI(
          '/' + FEED_URL,
        )}`,
        hatena: `https://b.hatena.ne.jp/add?mode=confirm&url=${this.url}&title=${this.encodedTitle}`,
        pocket: `https://getpocket.com/edit?url=${this.url}&title=${this.encodedTitle}`,
      }
    },
  },
  methods: {
    handleCopyClipbord() {
      this.$emit('click', 'Clipbord')
      copyToClipbord(window.location.href)
      this.$store.commit('showNotification', {
        title: 'URLをクリップボードにコピーしました。',
        content: window.location.href,
      })
    },
  },
})
</script>

<style lang="scss" scoped>
.Share {
  margin: 0;
  font-size: 14px;
}
.Share_list {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  list-style: none;
  padding: 0;
  margin: -10px 0 0;
  @include media() {
    margin: -20px 0 0;
  }
}
.Share_item {
  margin: 10px 3px 0;
  @include media(356px) {
    margin: 10px 6px 0;
  }
  @include media() {
    margin: 20px 12px 0;
  }
}
.Share_icon {
  max-width: 20px;
  max-height: 20px;
}
.Share_text {
  font-size: 0;
  text-indent: -100vw;
}
.Share_anchor {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  padding: 8px;
  color: $COLOR_WHITE;
  overflow: hidden;
  border-radius: 50%;
  box-shadow: 0 1px 4px rgba(#000, 0.2);
  &.-twitter {
    background: #1da1f2;
  }
  &.-facebook {
    background: #4267b2;
  }
  &.-feedly {
    background: #6cc655;
  }
  &.-line {
    background: #00b900;
  }
  &.-pocket {
    background: #fff;
    padding-top: 10px;
  }
  &.-hatena {
    background: #00a4de;
    .Share_icon {
      max-width: 30px;
      max-height: 30px;
    }
  }
  &.-clipbord {
    background: #777;
  }
}
</style>

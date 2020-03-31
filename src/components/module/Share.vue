<template>
  <div class="Share">
    <ul class="Share_list">
      <li class="Share_item">
        <a
          :href="sharePageUrl.twitter"
          class="Share_anchor -twitter"
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg-icon name="icon-twitter" class="Share_icon" />
          <span class="Share_text">Twitterでシェアする</span>
        </a>
      </li>
      <li class="Share_item">
        <a
          :href="sharePageUrl.facebook"
          class="Share_anchor -facebook"
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg-icon name="icon-facebook" class="Share_icon" />
          <span class="Share_text">Facebookでシェアする</span>
        </a>
      </li>
      <li class="Share_item">
        <a
          :href="sharePageUrl.line"
          class="Share_anchor -line"
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg-icon name="icon-line" class="Share_icon" />
          <span class="Share_text">LINEで送る</span>
        </a>
      </li>
      <li class="Share_item">
        <a
          :href="sharePageUrl.hatena"
          class="Share_anchor -hatena"
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg-icon name="icon-hatena" class="Share_icon" />
          <span class="Share_text">はてなブックマークでブックマークする</span>
        </a>
      </li>
      <li class="Share_item">
        <a
          :href="sharePageUrl.pocket"
          class="Share_anchor -pocket"
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg-icon name="icon-pocket" class="Share_icon" />
          <span class="Share_text">Pocketに保存する</span>
        </a>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'Share',
  props: {
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    url: {
      type: String,
      required: true
    }
  },
  computed: {
    sharePageUrl() {
      return {
        twitter: `https://twitter.com/share?url=${this.url}&text=${this.title} ${this.description}`,
        facebook: `https://www.facebook.com/share.php?u=${this.url}`,
        line: `https://social-plugins.line.me/lineit/share?url=${this.url}`,
        hatena: `https://b.hatena.ne.jp/add?mode=confirm&url=${this.url}&title=${this.title}`,
        pocket: `https://getpocket.com/edit?url=${this.url}&title=${this.title}`
      }
    }
  }
})
</script>

<style lang="scss" scoped>
.Share {
  margin: 0;
  font-size: 14px;
  &_list {
    display: flex;
    justify-content: center;
    list-style: none;
    padding: 0;
    margin: -10px 0 0;
    @include media() {
      margin: -20px 0 0;
    }
  }
  &_item {
    margin: 10px 8px 0;
    @include media() {
      margin: 20px 16px 0;
    }
  }
  &_icon {
    max-width: 20px;
    max-height: 20px;
  }
  &_text {
    text-indent: -100vw;
  }
  &_anchor {
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
  }
}
</style>

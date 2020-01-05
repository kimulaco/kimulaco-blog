<template>
  <div class="Share">
    <ul class="Share_list">
      <li class="Share_item">
        <a
          :href="`${twitterBaseUrl}?url=${url}&text=${title} ${description}`"
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
          :href="`https://www.facebook.com/share.php?u=${url}`"
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
          :href="`https://social-plugins.line.me/lineit/share?url=${url}`"
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
          :href="
            `http://b.hatena.ne.jp/add?mode=confirm&url=${url}&title=${title}`
          "
          class="Share_anchor -hatena"
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg-icon name="icon-line" class="Share_icon" />
          <span class="Share_text">はてなブックマークでブックマークする</span>
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
  data() {
    return {
      twitterBaseUrl: 'https://twitter.com/share'
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
    list-style: none;
    padding: 0;
    margin: 0;
  }
  &_item {
    width: calc(100% / 3);
  }
  &_icon {
    max-width: 24px;
    max-height: 24px;
  }
  &_text {
    text-indent: -100vw;
  }
  &_anchor {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    padding: 8px;
    color: $COLOR_WHITE;
    overflow: hidden;
    &.-twitter {
      background: #1da1f2;
    }
    &.-facebook {
      background: #4267b2;
    }
    &.-line {
      background: #00b900;
    }
    &.-hatena {
      background: #008fde;
    }
  }
}
</style>

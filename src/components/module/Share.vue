<template>
  <div class="Share">
    <ul class="Share_list">
      <li class="Share_item -twitter">
        <a
          :href="`${twitterBaseUrl}?url=${url}&text=${title} ${description}`"
          class="Share_anchor"
          target="_blank"
          rel="noopener noreferrer"
        >
          Twitterでシェアする
        </a>
      </li>
      <li class="Share_item -facebook">
        <a
          :href="`https://www.facebook.com/share.php?u=${url}`"
          class="Share_anchor"
          target="_blank"
          rel="noopener noreferrer"
        >
          Facebookでシェアする
        </a>
      </li>
      <li class="Share_item -line">
        <a
          :href="`https://social-plugins.line.me/lineit/share?url=${url}`"
          class="Share_anchor"
          target="_blank"
          rel="noopener noreferrer"
        >
          LINEで送る
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
  }
  &_item {
    width: calc(100% / 3);
  }
  &_anchor {
    display: block;
    width: 100%;
    text-align: center;
  }
}
</style>

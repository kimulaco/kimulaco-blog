<template>
  <div class="PostContent">
    <slot />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'PostContent'
})
</script>

<style lang="scss">
.PostContent {
  line-height: 1.6;
  word-wrap: break-word;
  @include reset-child-margin();
  a {
    text-decoration: none;
    padding: 0 2px 2px;
    position: relative;
  }
  strong {
    color: $COLOR_RED;
  }
  p {
    margin: 16px 0;
  }
  p,
  li {
    > code {
      display: inline-block;
      color: $COLOR_DARKGRAY;
      background: #f1f1f1;
      padding: 2px 6px;
      margin: 0 4px;
      border-radius: 4px;
      line-height: 1.2;
      font-size: 15px;
    }
  }
  h2 {
    font-size: 24px;
    padding: 0 0 4px;
    margin: 40px 0 24px;
    border-bottom: 1px solid rgba($COLOR_GRAY, 0.3);
  }
  h3 {
    font-size: 20px;
    padding: 0 0 4px;
    margin: 32px 0 16px;
  }
  h4 {
    font-size: 18px;
    margin: 32px 0 16px;
  }
  h5 {
    font-size: 16px;
    margin: 32px 0 16px;
  }
  h6 {
    font-size: 14px;
    margin: 32px 0 16px;
  }
  ul,
  ol {
    padding: 0 0 0 20px;
    margin: 16px 0;
    ul,
    ol {
      margin: 0;
    }
  }
  blockquote {
    padding: 8px;
    margin: 16px 0;
    background: $COLOR_BLOCKGRAY;
    border-radius: 6px;
    @include reset-child-margin();
  }
  pre {
    margin: 24px 0;
    border-radius: 6px;
    overflow: auto;
    code {
      display: block;
      padding: 0;
      color: $COLOR_BLOCKGRAY;
    }
  }
  .PostContent_index {
    padding: 16px;
    border-radius: 6px;
    box-shadow: 0 0 4px rgba($COLOR_BLACK, 0.2);
    @include media() {
      margin: 20px;
    }
    ul {
      margin: 0;
    }
  }
  .PostContent_index-title {
    margin: 0 0 10px;
    font-size: 20px;
  }
}
</style>

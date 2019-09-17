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
  @include reset-child-margin();
  p {
    margin: 16px 0;
    code {
      display: inline-block;
      color: $COLOR_WHITE;
      background: $COLOR_DARKGRAY;
      padding: 1px 6px;
      border-radius: 4px;
    }
  }
  h2 {
    font-size: 22px;
    padding: 0 0 4px;
    margin: 32px 0 20px;
    border-bottom: 1px solid rgba($COLOR_GRAY, 0.2);
  }
  h3 {
    font-size: 20px;
    padding: 0 0 4px;
    margin: 32px 0 20px;
  }
  h4 {
    font-size: 18px;
    margin: 32px 0 20px;
  }
  h5 {
    font-size: 16px;
    margin: 32px 0 20px;
  }
  h6 {
    font-size: 14px;
    margin: 32px 0 20px;
  }
  a {
    text-decoration: none;
    padding: 0 2px 2px;
    position: relative;
    &::after {
      content: '';
      display: block;
      background: $COLOR_BLUE;
      width: 100%;
      height: 1px;
      position: absolute;
      left: 0;
      bottom: 0;
    }
  }
  strong {
    color: $COLOR_RED;
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
    background: $COLOR_LIGHTGRAY;
    border-radius: 4px;
    @include reset-child-margin();
  }
  pre {
    code {
      display: block;
      padding: 8px;
      background: $COLOR_DARKGRAY;
      border-radius: 4px;
      color: $COLOR_LIGHTGRAY;
    }
  }
}
</style>

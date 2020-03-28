<template>
  <Card class="AboutWidget">
    <div class="AboutWidget_head">
      <div class="AboutWidget_head-content">
        <h2 class="AboutWidget_name">kimulaco</h2>
        <p class="AboutWidget_job">Front-end Engineer</p>
      </div>
      <div class="AboutWidget_icon">
        <img class="AboutWidget_icon-img" src="/img/profile.png" alt="" />
      </div>
    </div>
    <div class="AboutWidget_content">
      <p>フロントエンドエンジニアとして働いています。</p>
      <p>映画と寿司とピザが好き。</p>
    </div>
    <div class="AboutWidget_link">
      <ul class="AboutWidget_link-list">
        <li class="AboutWidget_link-item">
          <a
            href="https://twitter.com/kimulaco"
            class="AboutWidget_link-anchor -twitter"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg-icon name="icon-twitter" class="AboutWidget_link-icon" />
            <span class="AboutWidget_link-text">Twitter</span>
          </a>
        </li>
        <li class="AboutWidget_link-item">
          <a
            href="https://github.com/kimulaco"
            class="AboutWidget_link-anchor -twitter"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg-icon name="icon-github" class="AboutWidget_link-icon" />
            <span class="AboutWidget_link-text">GitHub</span>
          </a>
        </li>
        <li class="AboutWidget_link-item">
          <a
            href="https://kimulaco.me/"
            class="AboutWidget_link-anchor -me"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img class="AboutWidget_link-icon" src="/img/icon.png" alt="" />
            <span class="AboutWidget_link-text">kimulaco.me</span>
          </a>
        </li>
      </ul>
    </div>
  </Card>
</template>

<script lang="ts">
import Vue from 'vue'
import Card from '../module/Card.vue'

export default Vue.extend({
  name: 'AboutWidget',
  components: {
    Card
  },
  props: {
    tag: {
      type: String,
      default: 'div'
    },
    to: {
      type: String,
      default: ''
    }
  }
})
</script>

<style lang="scss" scoped>
.AboutWidget {
  color: $COLOR_WHITE;
  margin: 0;
  &_head {
    display: flex;
    flex-direction: row-reverse;
    align-items: flex-start;
    justify-content: flex-end;
    margin: 0 0 8px;
  }
  &_name {
    font-size: 20px;
    margin: 6px 0 0;
    line-height: 1.2;
  }
  &_job {
    font-size: 14px;
    margin: 0;
    line-height: 1.2;
  }
  &_icon {
    width: 50px;
    height: 50px;
    margin: 0 10px 0 0;
    border-radius: 50%;
    overflow: hidden;
    box-shadow: 0 1px 4px rgba(#000, 0.2);
    &-img {
      max-width: 100%;
    }
  }
  &_content {
    font-size: 14px;
    padding: 8px 0 0;
    margin: 0 0 12px;
    p {
      margin: 2px 0 0;
    }
  }
  &_link {
    &-list {
      display: flex;
      flex-wrap: wrap;
      padding: 0;
      margin: -12px 0 0 -12px;
      list-style: none;
    }
    &-item {
      margin: 12px 0 0 12px;
    }
    &-icon {
      max-width: 24px;
      max-height: 24px;
    }
    &-text {
      font-size: 0;
    }
    &-anchor {
      display: block;
      max-width: 24px;
      max-height: 24px;
      &.-twitter {
        color: #1da1f2;
      }
    }
  }
  &_more {
    font-size: 14px;
    margin: 16px 0 0;
  }
}
</style>

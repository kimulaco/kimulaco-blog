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
      <p>東京の事業会社で働くフロントエンドエンジニア。</p>
      <p>映画と寿司とピザが好き。</p>
    </div>
    <LinkList
      :links="[
        { text: 'Twitter', url: 'https://twitter.com/kimulaco' },
        { text: 'GitHub', url: 'https://github.com/kimulaco' },
        { text: 'kimulaco.me', url: 'https://kimulaco.me' }
      ]"
      class="AboutWidget_link"
    />
    <div class="AboutWidget_more">
      <nuxt-link to="/about/">詳しく見る</nuxt-link>
    </div>
  </Card>
</template>

<script lang="ts">
import Vue from 'vue'
import Card from '../module/Card.vue'
import LinkList from '../module/LinkList.vue'

export default Vue.extend({
  name: 'AboutWidget',
  components: {
    Card,
    LinkList
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
  margin: 0;
  &_head {
    display: flex;
    flex-direction: row-reverse;
    align-items: flex-start;
    justify-content: flex-end;
    margin: 0 0 8px;
  }
  &_name {
    font-size: 18px;
    margin: 5px 0 4px;
  }
  &_job {
    font-size: 14px;
    margin: 0;
  }
  &_icon {
    width: 50px;
    height: 50px;
    margin: 0 10px 0 0;
    border-radius: 50%;
    overflow: hidden;
    &-img {
      max-width: 100%;
    }
  }
  &_content {
    line-height: 1.4;
    font-size: 14px;
    padding: 8px 0 0;
    margin: 0 0 12px;
    p {
      margin: 2px 0 0;
    }
  }
  &_more {
    font-size: 14px;
    margin: 16px 0 0;
  }
}
</style>

<template>
  <header class="SiteHeader">
    <SiteInner class="SiteHeader_inner">
      <p :is="isHome ? 'h1' : 'p'" class="SiteHeader_title">
        <nuxt-link
          :is="isHome ? 'span' : 'nuxt-link'"
          :to="isHome ? false : '/'"
          class="SiteHeader_title-text"
        >
          <img class="SiteHeader_title-icon" src="/img/icon.png" alt="" />
          kimulaco blog
        </nuxt-link>
      </p>

      <ul class="SiteHeader_menu">
        <li class="SiteHeader_menu-item">
          <nuxt-link class="SiteHeader_menu-anchor" to="/about/">
            <svg-icon name="icon-info" class="SiteHeader_menu-icon" />
            <span class="hidden">About</span>
          </nuxt-link>
        </li>
        <li class="SiteHeader_menu-item">
          <a :href="`${siteUrl}/feed/post.xml`" class="SiteHeader_menu-anchor">
            <svg-icon name="icon-feed" class="SiteHeader_menu-icon" />
            <span class="hidden">Feed</span>
          </a>
        </li>
      </ul>
    </SiteInner>
  </header>
</template>

<script lang="ts">
import Vue from 'vue'
import SiteInner from '../layout/SiteInner.vue'
import { SITE_URL } from '../../utils/blog'

export default Vue.extend({
  name: 'SiteHeader',
  components: {
    SiteInner,
  },
  computed: {
    isHome(): boolean {
      return this.$route.path === '/'
    },
    titleTextTag(): string {
      return this.isHome ? 'span' : 'nuxt-link'
    },
    siteUrl(): string {
      return SITE_URL
    },
  },
})
</script>

<style lang="scss" scoped>
.SiteHeader {
  background: $COLOR_WHITE;
  margin: 0;
  box-shadow: 0 2px 4px rgba($COLOR_BLACK, 0.1);
  @include media() {
    margin: 0 0 30px;
  }
  a {
    color: inherit;
  }
}
.SiteHeader_inner {
  min-height: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.SiteHeader_title {
  margin: 0;
  font-size: 16px;
  font-weight: normal;
}
.SiteHeader_title-text {
  display: flex;
  align-items: center;
  color: $COLOR_BLACK;
}
.SiteHeader_title-icon {
  display: block;
  width: 24px;
  margin: 0 8px 0 0;
}
.SiteHeader_menu {
  display: flex;
  padding: 0;
  margin: -6px 0 0 -6px;
  list-style: none;
}
.SiteHeader_menu-item {
  margin: 6px 0 0 6px;
}
.SiteHeader_menu-anchor {
  display: block;
  width: 32px;
  height: 32px;
}
.SiteHeader_menu-icon {
  width: 32px;
  height: 32px;
  fill: $COLOR_BLACK;
}
</style>

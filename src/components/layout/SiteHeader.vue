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
          kimulaco.com
        </nuxt-link>
      </p>
    </SiteInner>
  </header>
</template>

<script lang="ts">
import Vue from 'vue'
import SiteInner from '../layout/SiteInner.vue'

export default Vue.extend({
  name: 'SiteHeader',
  components: {
    SiteInner
  },
  computed: {
    isHome(): boolean {
      return this.$route.path === '/'
    },
    titleTextTag(): string {
      return this.isHome ? 'span' : 'nuxt-link'
    }
  }
})
</script>

<style lang="scss" scoped>
.SiteHeader {
  background: $COLOR_WHITE;
  margin: 0 0 60px;
  box-shadow: 0 2px 4px rgba($COLOR_BLACK, 0.1);
  &_inner {
    min-height: 50px;
    display: flex;
    align-items: center;
  }
  &_title {
    margin: 0;
    font-size: 16px;
    font-weight: normal;
    &-text {
      display: flex;
      align-items: center;
      color: $COLOR_BLACK;
    }
    &-icon {
      display: block;
      width: 24px;
      margin: 0 8px 0 0;
    }
  }
}
</style>

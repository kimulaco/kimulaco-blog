<template>
  <header class="SiteHeader">
    <SiteInner class="SiteHeader_inner">
      <p :is="isHome ? 'h1' : 'p'" class="SiteHeader_title">
        <nuxt-link
          :is="isHome ? 'span' : 'nuxt-link'"
          :to="isHome ? false : '/'"
          class="SiteHeader_title-text"
        >
          kimulaco.com
        </nuxt-link>
      </p>
    </SiteInner>
  </header>
</template>

<script>
import SiteInner from '@/components/layout/SiteInner'

export default {
  name: 'SiteHeader',
  components: {
    SiteInner
  },
  computed: {
    isHome() {
      return this.$route.path === '/'
    },
    titleTextTag() {
      return this.isHome ? 'span' : 'nuxt-link'
    }
  }
}
</script>

<style lang="scss" scoped>
.SiteHeader {
  background: $COLOR_WHITE;
  margin: 0 0 40px;
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
      color: $COLOR_BLACK;
    }
  }
}
</style>

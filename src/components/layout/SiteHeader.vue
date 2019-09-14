<template>
  <header class="SiteHeader">
    <div class="SiteHeader_inner">
      <p :is="isHome ? 'h1' : 'p'" class="SiteHeader_title">
        <nuxt-link
          :is="isHome ? 'span' : 'nuxt-link'"
          :to="isHome ? false : '/'"
          class="SiteHeader_title-text"
        >
          kimulaco.com
        </nuxt-link>
      </p>
    </div>
  </header>
</template>

<script>
export default {
  name: 'SiteHeader',
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
  &_inner {
    @extend %layout-inner;
  }
}
</style>

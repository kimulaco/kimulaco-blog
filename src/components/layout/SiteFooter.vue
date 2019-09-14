<template>
  <footer class="SiteFooter">
    <div class="SiteFooter_inner">
      <p class="SiteFooter_copyright">
        <small class="SiteFooter_copyright-text">
          &copy; 2019 kimulaco.com.
        </small>
      </p>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'SiteFooter'
}
</script>

<style lang="scss" scoped>
.SiteFooter {
  padding: 16px 0;
  &_inner {
    @extend %layout-inner;
    @include media() {
      padding: 0 20px;
    }
  }
  &_copyright {
    text-align: center;
    @include media() {
      text-align: left;
    }
    &-text {
      font-size: 14px;
    }
  }
}
</style>

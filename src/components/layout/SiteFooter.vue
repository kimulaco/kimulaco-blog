<template>
  <footer class="SiteFooter">
    <div class="SiteFooter_inner">
      <p class="SiteFooter_copyright">
        <small class="SiteFooter_copyright-text">
          &copy; 2019 kimulaco.org.
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
  &_inner {
    @extend %layout-inner;
  }
}
</style>

<template>
  <footer class="SiteFooter">
    <SiteInner class="SiteFooter_inner">
      <p class="SiteFooter_copyright">
        <small class="SiteFooter_copyright-text">
          &copy; 2020 kimulaco.com.
        </small>
      </p>
    </SiteInner>
  </footer>
</template>

<script lang="ts">
import Vue from 'vue'
import SiteInner from '../layout/SiteInner.vue'

export default Vue.extend({
  name: 'SiteFooter',
  components: {
    SiteInner
  }
})
</script>

<style lang="scss" scoped>
.SiteFooter {
  padding: 16px 0 24px;
  margin: 60px 0 0;
  &_inner {
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

<template>
  <footer class="SiteFooter">
    <SiteInner class="SiteFooter_inner">
      <ul class="SiteFooter_menu">
        <li class="SiteFooter_menu-item">
          <nuxt-link class="SiteFooter_menu-link" to="/about/">
            About
          </nuxt-link>
        </li>
        <li class="SiteFooter_menu-item">
          <nuxt-link class="SiteFooter_menu-link" to="/about/#contact">
            Contact
          </nuxt-link>
        </li>
        <li class="SiteFooter_menu-item">
          <a class="SiteFooter_menu-link" href="/feed/post.xml">
            Feed
          </a>
        </li>
      </ul>

      <p class="SiteFooter_copyright">
        <small class="SiteFooter_copyright-text">
          &copy; 2020 kimulaco.
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
  margin: 0;
  @include media() {
    margin: 30px 0 0;
  }
}
.SiteFooter_inner {
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  @include media() {
    padding: 0 20px;
  }
}
.SiteFooter_menu {
  margin: 0;
  padding: 0;
  display: flex;
  list-style: none;
}
.SiteFooter_menu-item {
  margin: 0 0 0 16px;
}
.SiteFooter_copyright {
  margin: 0;
  text-align: center;
  @include media() {
    text-align: left;
  }
}
.SiteFooter_copyright-text {
  font-size: 14px;
}
</style>

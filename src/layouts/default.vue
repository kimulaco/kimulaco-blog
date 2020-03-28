<template>
  <div class="Layout">
    <SiteHeader />

    <SiteInner>
      <transition name="fade">
        <Breadcrumb />
      </transition>
    </SiteInner>

    <SiteMain>
      <transition name="fade">
        <nuxt />
      </transition>
    </SiteMain>

    <SiteProfile>
      <AboutWidget />
    </SiteProfile>

    <SiteFooter />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Breadcrumb from '../components/module/Breadcrumb.vue'
import SiteInner from '../components/layout/SiteInner.vue'
import SiteHeader from '../components/layout/SiteHeader.vue'
import SiteMain from '../components/layout/SiteMain.vue'
import SiteProfile from '../components/layout/SiteProfile.vue'
import SiteFooter from '../components/layout/SiteFooter.vue'
import AboutWidget from '../components/widget/AboutWidget.vue'

export default Vue.extend({
  name: 'Layout',
  components: {
    Breadcrumb,
    SiteInner,
    SiteHeader,
    SiteMain,
    SiteProfile,
    SiteFooter,
    AboutWidget
  }
})
</script>

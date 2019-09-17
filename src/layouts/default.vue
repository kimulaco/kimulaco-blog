<template>
  <div class="Layout">
    <SiteHeader />

    <SiteInner>
      <transition name="fade">
        <Breadcrumb />
      </transition>
    </SiteInner>

    <SiteColumn>
      <template v-slot:main>
        <main>
          <transition name="fade">
            <nuxt />
          </transition>
        </main>
      </template>

      <template v-slot:sub>
        <AboutWidget />
      </template>
    </SiteColumn>

    <SiteFooter />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Breadcrumb from '../components/module/Breadcrumb.vue'
import SiteInner from '../components/layout/SiteInner.vue'
import SiteHeader from '../components/layout/SiteHeader.vue'
import SiteColumn from '../components/layout/SiteColumn.vue'
import SiteFooter from '../components/layout/SiteFooter.vue'
import AboutWidget from '../components/about/AboutWidget.vue'

export default Vue.extend({
  name: 'Layout',
  components: {
    Breadcrumb,
    SiteInner,
    SiteHeader,
    SiteColumn,
    SiteFooter,
    AboutWidget
  }
})
</script>

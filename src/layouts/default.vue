<template>
  <div class="Layout">
    <SiteHeader />

    <Breadcrumb />

    <SiteColumn>
      <template v-slot:main>
        <main>
          <transition name="router">
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

<script>
import Breadcrumb from '@/components/module/Breadcrumb'
import SiteHeader from '@/components/layout/SiteHeader'
import SiteColumn from '@/components/layout/SiteColumn'
import SiteFooter from '@/components/layout/SiteFooter'
import AboutWidget from '@/components/about/AboutWidget'

export default {
  name: 'Layout',
  components: {
    Breadcrumb,
    SiteHeader,
    SiteColumn,
    SiteFooter,
    AboutWidget
  }
}
</script>

<style lang="scss" scoped>
.router-enter-active,
.router-leave-active {
  transition: 0.5s;
}
.router-enter,
.router-leave-to {
  opacity: 0;
}
</style>

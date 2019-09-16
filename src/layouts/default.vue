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

<script>
import Breadcrumb from '@/components/module/Breadcrumb'
import SiteInner from '@/components/layout/SiteInner'
import SiteHeader from '@/components/layout/SiteHeader'
import SiteColumn from '@/components/layout/SiteColumn'
import SiteFooter from '@/components/layout/SiteFooter'
import AboutWidget from '@/components/about/AboutWidget'

export default {
  name: 'Layout',
  components: {
    Breadcrumb,
    SiteInner,
    SiteHeader,
    SiteColumn,
    SiteFooter,
    AboutWidget
  }
}
</script>

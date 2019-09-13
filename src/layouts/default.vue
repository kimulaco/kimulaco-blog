<template>
  <div class="Layout">
    <SiteHeader />
    <SiteMain>
      <nuxt />
    </SiteMain>
    <SiteFooter />
  </div>
</template>

<script>
import SiteHeader from '@/components/layout/SiteHeader'
import SiteMain from '@/components/layout/SiteMain'
import SiteFooter from '@/components/layout/SiteFooter'

export default {
  name: 'Layout',
  components: {
    SiteHeader,
    SiteMain,
    SiteFooter
  }
}
</script>

<style lang="scss"></style>

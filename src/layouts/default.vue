<template>
  <div class="Layout">
    <SiteHeader />

    <SiteColumn>
      <template v-slot:main>
        <SiteMain>
          <nuxt />
        </SiteMain>
      </template>
      <template v-slot:sub>
        <aside>
          <AboutWidget class="mb-20" />
          <Ads ad-slot="4432810314" />
        </aside>
      </template>
    </SiteColumn>

    <SiteFooter />

    <transition name="fade">
      <Notification v-if="notification.show" @close="handleCloseNotification">
        <template v-if="notification.title" v-slot:title>
          {{ notification.title }}
        </template>
        <template v-if="notification.content" v-slot:content>
          {{ notification.content }}
        </template>
      </Notification>
    </transition>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import SiteHeader from '../components/layout/SiteHeader.vue'
import SiteColumn from '../components/layout/SiteColumn.vue'
import SiteMain from '../components/layout/SiteMain.vue'
import SiteFooter from '../components/layout/SiteFooter.vue'
import Ads from '../components/module/Ads.vue'
import Notification from '../components/module/Notification.vue'
import AboutWidget from '../components/widget/AboutWidget.vue'

export default Vue.extend({
  name: 'Layout',
  components: {
    SiteHeader,
    SiteColumn,
    SiteMain,
    SiteFooter,
    Ads,
    Notification,
    AboutWidget,
  },
  computed: {
    notification() {
      return this.$store.state.notification
    },
  },
  watch: {
    'notification.show'(isShow: boolean): void {
      if (isShow) {
        setTimeout(() => {
          this.$ga.event('notification', 'close', 'timeout')
          this.$store.commit('hideNotification')
        }, 4000)
      }
    },
  },
  methods: {
    handleCloseNotification() {
      this.$ga.event('notification', 'close', 'click')
      this.$store.commit('hideNotification')
    },
  },
})
</script>

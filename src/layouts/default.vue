<template>
  <div class="Layout">
    <SiteHeader />

    <SiteMain>
      <nuxt />
    </SiteMain>

    <SiteProfile>
      <AboutWidget />
    </SiteProfile>

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
import SiteMain from '../components/layout/SiteMain.vue'
import SiteProfile from '../components/layout/SiteProfile.vue'
import SiteFooter from '../components/layout/SiteFooter.vue'
import Notification from '../components/module/Notification.vue'
import AboutWidget from '../components/widget/AboutWidget.vue'

export default Vue.extend({
  name: 'Layout',
  components: {
    SiteHeader,
    SiteMain,
    SiteProfile,
    SiteFooter,
    Notification,
    AboutWidget
  },
  computed: {
    notification() {
      return this.$store.state.notification
    }
  },
  watch: {
    'notification.show'(isShow: boolean): void {
      if (isShow) {
        setTimeout(() => {
          this.$ga.event('notification', 'close', 'timeout')
          this.$store.commit('hideNotification')
        }, 4000)
      }
    }
  },
  methods: {
    handleCloseNotification() {
      this.$ga.event('notification', 'close', 'click')
      this.$store.commit('hideNotification')
    }
  }
})
</script>

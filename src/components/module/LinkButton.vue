<template>
  <nuxt-link :to="to" class="LinkButton">
    <slot />
  </nuxt-link>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'LinkButton',
  props: {
    to: {
      type: String,
      required: true,
    },
  },
})
</script>

<style lang="scss" scoped>
.LinkButton {
  display: inline-block;
  color: $COLOR_WHITE;
  background: $COLOR_BLACK;
  font-size: 15px;
  text-align: center;
  min-width: 160px;
  padding: 8px 12px;
  margin: 0;
  border-radius: 4px;
}
</style>

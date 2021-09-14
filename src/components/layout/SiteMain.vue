<template>
  <main class="SiteMain">
    <div class="SiteMain_inner">
      <slot />
    </div>
  </main>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'SiteMain',
})
</script>

<style lang="scss" scoped>
.SiteMain {
  padding: 0 0 32px;
}
</style>

<template>
  <h1 class="PageTitle"><slot /></h1>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'PageTitle',
})
</script>

<style lang="scss" scoped>
.PageTitle {
  font-size: 32px;
  margin: 0 0 32px;
}
</style>

<template>
  <h2 class="Heading"><slot /></h2>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'Heading'
})
</script>

<style lang="scss" scoped>
.Heading {
  font-size: 24px;
  margin: 56px 0 20px;
}
</style>

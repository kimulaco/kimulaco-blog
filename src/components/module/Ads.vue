<template>
  <div class="Ads">
    <div class="Ads_inner">
      <adsbygoogle :ad-slot="adSlot" ad-format="rectangle" />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'Ads',
  props: {
    adSlot: {
      type: String,
      required: true,
    },
  },
})
</script>

<style lang="scss" scoped>
.Ads {
  display: flex;
  justify-content: center;
}
.Ads_inner {
  background: $COLOR_LIGHTGRAY;
}
</style>

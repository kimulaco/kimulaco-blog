<template>
  <div class="Ads">
    <div class="Ads_inner">
      <adsbygoogle
        ad-format="auto"
        :ad-slot="adSlot"
        :style="{
          'width': '100%',
          'min-width': '300px',
          'max-width': '740px',
        }"
      />
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
  // display: flex;
  // justify-content: center;
}
.Ads_inner {
  > ins[data-adtest='on'] {
    background-color: $COLOR_LIGHTGRAY;
  }
}
</style>

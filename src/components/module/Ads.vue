<template>
  <div class="Ads">
    <div class="Ads_inner">
      <adsbygoogle
        ad-format="auto"
        :ad-slot="adSlot"
        :style="adsStyle"
      />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

const DEFAULT_ADS_STYLE = {
  'width': '100%',
  'min-width': '280px',
  'max-width': '940px',
  'height': '280px',
}

export default Vue.extend({
  name: 'Ads',
  props: {
    adSlot: {
      type: String,
      required: true,
    },
    styles: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  computed: {
    adsStyle() {
      return Object.assign(DEFAULT_ADS_STYLE, this.styles || {})
    },
  },
})
</script>

<style lang="scss" scoped>
.Ads_inner {
  display: flex;
  justify-content: center;
  overflow: hidden;
  > ins[data-adtest='on'] {
    background-color: $COLOR_LIGHTGRAY;
  }
}
</style>

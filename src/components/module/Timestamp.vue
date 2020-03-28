<template>
  <div class="Timestamp">
    <dl class="Timestamp_list">
      <div class="Timestamp_item">
        <dt class="Timestamp_title">Publish:</dt>
        <dd class="Timestamp_date">{{ createdAt | date('YYYY/MM/DD') }}</dd>
      </div>
      <div v-if="updatedAt" class="Timestamp_item">
        <dt class="Timestamp_title">Update:</dt>
        <dd class="Timestamp_date">{{ updatedAt | date('YYYY/MM/DD') }}</dd>
      </div>
    </dl>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'Timestamp',
  props: {
    createdAt: {
      type: String,
      required: true
    },
    updatedAt: {
      type: String,
      default: ''
    }
  }
})
</script>

<style lang="scss" scoped>
$margin-top: 5px;
$margin-left: 10px;

.Timestamp {
  font-size: 14px;
  color: $COLOR_GRAY;
  display: flex;
  align-items: center;
  &_list {
    display: flex;
    flex-wrap: wrap;
    margin: -#{$margin-top} 0 0 -#{$margin-left};
  }
  &_item {
    display: flex;
    margin: #{$margin-top} 0 0 #{$margin-left};
  }
  &_date {
    margin: 0 0 0 2px;
  }
  &_icon {
    fill: $COLOR_GRAY;
    width: 15px;
    height: 15px;
    margin: 0 4px 0 0;
  }
}
</style>

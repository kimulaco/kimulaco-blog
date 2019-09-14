<template>
  <div class="Timestamp">
    <dl class="Timestamp_list">
      <div class="Timestamp_item">
        <dt class="Timestamp_title">Created:</dt>
        <dd class="Timestamp_date">{{ createdAt }}</dd>
      </div>
      <div v-if="updatedAt" class="Timestamp_item">
        <dt class="Timestamp_title">Updated:</dt>
        <dd class="Timestamp_date">{{ updatedAt }}</dd>
      </div>
    </dl>
  </div>
</template>

<script>
export default {
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
}
</script>

<style lang="scss" scoped>
$margin-top: 5px;
$margin-left: 10px;

.Timestamp {
  font-size: 12px;
  color: $COLOR_GRAY;
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
    margin: 0 0 0 4px;
  }
}
</style>

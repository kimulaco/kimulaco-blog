<template>
  <div class="Notification">
    <div class="Notification_inner">
      <h2 v-if="$slots.title" class="Notification_title">
        <slot name="title" />
      </h2>
      <p v-if="$slots.content" class="Notification_content">
        <slot name="content" />
      </p>
    </div>
    <button
      class="Notification_close"
      type="button"
      title="閉じる"
      @click="$emit('close')"
    >
      <svg-icon name="icon-close" class="Notification_close-icon" />
      閉じる
    </button>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'Notification',
})
</script>

<style lang="scss" scoped>
.Notification {
  background: #e8fffe;
  color: #0d3331;
  border-radius: 4px;
  box-shadow: 0 0 4px rgba($COLOR_BLACK, 0.2);
  position: fixed;
  top: 20px;
  right: 20px;
  max-width: calc(80vw - 28px);
  word-wrap: break-word;
}
.Notification_inner {
  padding: 12px 16px;
}
.Notification_title {
  font-size: 16px;
  margin: 0;
}
.Notification_content {
  font-size: 15px;
  margin: 0;
}
.Notification_close {
  display: block;
  background: #4dc0b5;
  font-size: 0;
  width: 20px;
  height: 20px;
  padding: 1px;
  border-radius: 50%;
  box-shadow: 0 0 4px rgba($COLOR_BLACK, 0.2);
  overflow: hidden;
  position: absolute;
  top: -6px;
  left: -6px;
}
.Notification_close-icon {
  display: block;
  width: 100%;
  max-height: 100%;
}
</style>

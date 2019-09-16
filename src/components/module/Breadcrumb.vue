<template>
  <div v-if="list.length > 1" class="Breadcrumb">
    <ul class="Breadcrumb_list">
      <li
        v-for="(item, i) in list"
        :key="`Breadcrumb-${i}`"
        class="Breadcrumb_item"
      >
        <nuxt-link
          :is="item.url ? 'nuxt-link' : 'span'"
          :to="item.url || false"
          :class="item.url ? 'Breadcrumb_anchor' : 'Breadcrumb_text'"
        >
          <svg-icon
            v-if="item.url === '/'"
            name="icon-home"
            class="Breadcrumb_home"
          />
          {{ item.text }}
        </nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'Breadcrumb',
  computed: {
    ...mapState('breadcrumb', ['list'])
  }
}
</script>

<style lang="scss" scoped>
.Breadcrumb {
  margin: 0;
  font-size: 14px;
  color: $COLOR_GRAY;
  &_list {
    display: flex;
    flex-wrap: wrap;
    list-style: none;
    padding: 0;
    margin: 0 0 16px;
  }
  &_item {
    padding: 0 0 0 20px;
    position: relative;
    &:not(:first-child)::before {
      content: '';
      display: block;
      width: 6px;
      height: 6px;
      border-width: 1px 1px 0 0;
      border-style: solid;
      border-color: $COLOR_GRAY;
      transform: rotate(45deg);
      position: absolute;
      top: 0.35em;
      left: 6px;
    }
    &:first-child {
      padding: 0;
    }
  }
  &_anchor {
    transition: 0.3s;
    @include active() {
      opacity: 0.7;
    }
  }
  &_home {
    width: 14px;
    height: 14px;
    transform: translateY(1px);
  }
}
</style>

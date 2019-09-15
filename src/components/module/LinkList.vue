<template>
  <div v-if="links.length > 0" class="LinkList">
    <ul class="LinkList_list">
      <li v-for="link in links" :key="link.url" class="LinkList_item">
        <a
          :href="link.url"
          target="_blank"
          class="LinkList_anchor"
          rel="noopener noreferrer"
        >
          {{ link.text }}
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'LinkList',
  props: {
    links: {
      type: Array,
      default() {
        return []
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.LinkList {
  &_list {
    margin: 0;
    padding: 0;
    list-style: none;
  }
  &_item {
    margin: 0 0 4px;
    padding: 0 0 0 16px;
    position: relative;
    &:last-child {
      margin: 0;
    }
    &::before {
      content: '';
      display: block;
      width: 4px;
      height: 4px;
      background: $COLOR_BLACK;
      border-radius: 1px;
      position: absolute;
      top: 0.5em;
      left: 4px;
    }
  }
}
</style>

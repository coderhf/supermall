<template>
  <scroll class="content">
    <div class="tab-list">
      <div class="tab-list-item"
           v-for="(item, index) in categories"
           :key="index"
           :class="{active: index === currentIndex}"
           @click="itemClick(index)">
        {{item.title}}
      </div>
    </div>
  </scroll>
</template>

<script>
import Scroll from "components/common/Scroll/Scroll";
export default {
  name: "CategoryTabMenu",
  props: {
    categories: {
      type: Array,
      default() {
        return []
      }
    }
  },
  data() {
    return {
      currentIndex: 0
    }
  },
  methods: {
    itemClick(index) {
      this.currentIndex = index
      this.$emit('selectItem', index)
    }
  },
  components: {
    Scroll
  }
}
</script>

<style scoped>
.content {
  width: 25%;
  height: calc(100vh - 44px - 49px);
}

.tab-list {
  width: 100%;
  background-color: #f6f6f6;
}
.tab-list-item {
  width: 100%;
  height: 45px;
  line-height: 45px;
  text-align: center;
  font-size: 14px;
}

.tab-list-item.active {
  background-color: #fff;
  font-weight: bold;
  color: var(--color-high-text);
  border-left: 3px solid var(--color-tint);
}
</style>

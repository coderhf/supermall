<template>
  <div class="tab-bar-item" @click="itemClick">
    <div v-if="!isActive">
      <slot name="item-icon"></slot>
    </div>
    <div v-else>
      <slot name="item-icon-active"></slot>
    </div>
    <div :class="{active: isActive}" >
      <slot name="item-text"></slot>
    </div>
<!--    <img src="../../assets/img/tabbar/home.svg" alt="">-->
<!--    <img src="../../assets/img/tabbar/home_active.svg" alt="">-->
<!--    <div>首页</div>-->
  </div>
</template>

<script>
export default {
  name: "TabBarItem",
  props: {
    path: String
  },
  data() {
    return {
      // isActive: true
    }
  },
  methods: {
    itemClick() {
      this.$router.push(this.path).catch(error => {})
    }
  },
  computed: {
    isActive() {
      return this.path.includes(this.$route.path);
    }
  }
}
</script>

<style scoped>
.tab-bar-item {
  flex: 1;
  height: 49px;
}

.tab-bar-item img {
  width: 24px;
  height: 24px;
  margin-top: 3px;
  vertical-align: middle;
}

.active {
  color: red;
}
</style>

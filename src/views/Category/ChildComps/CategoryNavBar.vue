<template>
  <nav-bar class="navbar">
    <div slot="center">商品分类</div>
  </nav-bar>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";

export default {
  name: "CategoryNavBar",
  components: {
    NavBar
  }
}
</script>

<style scoped>
.nav-bar {
  background-color: var(--color-tint);
  color: #fff;
  font-weight: bold;
  font-size: 18px;
}
</style>

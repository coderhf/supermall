<template>
  <div class="pro-nav">
    <nav-bar>
      <div slot="center">霸气商城</div>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";

export default {
  name: "ProfileNavBar",
  components: {
    NavBar
  }
}
</script>

<style scoped>
.pro-nav {
  background-color: var(--color-tint);
  color: #fff;
  font-weight: bold;
  font-size: 18px;
}
</style>

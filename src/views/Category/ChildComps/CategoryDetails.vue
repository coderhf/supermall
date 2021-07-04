<template>
  <div class="cate-details">
    <goods-list :goods="CategoryDetails"/>
  </div>
</template>

<script>
import GoodsList from "components/content/Goods/GoodsList";
export default {
  name: "CategoryDetails",
  props: {
    CategoryDetails: {
      type: Array,
      default() {
        return []
      }
    }
  },
  components: {
    GoodsList
  }
}
</script>

<style scoped>

</style>

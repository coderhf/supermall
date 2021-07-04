<template>
    <div class="tab-content">
      <div v-for="(item, index) in categories.list" :key="index" class="tab-content-item">
        <a :href="item.link">
          <img class="item-img" :src="item.image" alt="" @load="imgLoad">
          <div class="item-text">{{item.title}}</div>
        </a>
      </div>
    </div>
</template>

<script>
export default {
  name: "CategoryContent",
  props: {
    categories: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  data() {
    return {
      count: 0
    }
  },
 methods: {
    imgLoad() {
      if (++this.count === this.categories.list.length) {
        console.log('走到了');
        // 重置为0
        this.count = 0
        this.$emit('imgLoad')
      }
    }
 }
}
</script>

<style scoped>

.tab-content {
  padding: 20px 0 0 8px;
  display: flex;
  flex-flow: wrap;
}

.tab-content-item {
  text-align: center;
  width: 81px;
  font-size: 12px;
  margin-right: 10px;
}

.tab-content-item img {
  width: 80%;
}

.tab-content-item .item-text {
  margin: 15px 0;
}
</style>

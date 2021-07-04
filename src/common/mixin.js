import {debounce} from "./Utiles";
import BackTop from "components/content/BackTop/BackTop";

export const itemMixin = {
  data() {
    return {
      imgLoadEvent: null, // 保存图片加载后的事件处理函数
    }
  },
  mounted() {
    // 执行防抖函数
    const refresh = debounce(this.$refs.scroll.refresh, 500)
    // 保存图片加载事件函数
    this.imgLoadEvent = () => {
      refresh()
    }
    this.$bus.$on('itemImgLoad', this.imgLoadEvent)
  }
}

export const backTopMixin = {
  data() {
    return {
      scrollShow: false, // 用于表示返回顶部按钮的显示与隐藏
    }
  },
  components: {
    BackTop
  },
  methods: {
    /**
     * 返回顶部
     * */
    backTop: function () {
      this.$refs.scroll.scrollTo(0, 0)
    },

    /**
     * 如果超过1000那就让其为true
     */
    backTopShow(position) {
      // 滚动的值超过1000就显示返回顶部的按钮
      this.scrollShow = Math.abs(position.y) > 1000
    }
  }
}

export const tabClickMixin = {
  data() {
    return {
      tabOffsetTop: 0,  // 记录tabContent的offsetTop值
      isTabContentFixed: false, // tabContent是否加fixed定位
      currentType: 'pop', // 用来存储当前得type类型
    }
  },
  methods: {
    /**
     * 通过点击获取相对应得type
     * @param index
     */
    tabClick(index) {
      this.isCategoryDetails = true
      switch (index) {
        case 0:
          this.currentType = 'pop'
          break
        case 1:
          this.currentType = 'new'
          break
        case 2:
          this.currentType = 'sell'
          break
      }
      this.$refs.tabContent1.currentIndex = index
      this.$refs.tabContent2.currentIndex = index
    },
    /**
     * 监听滚动事件
     * */
    contentScroll(position) {
      this.isTabContentFixed = Math.abs(position.y) > this.tabOffsetTop
      if (this.isTabContentFixed) {
        this.$refs.scroll.refresh()
      }
      // 调用是否显示返回顶部按钮
      this.backTopShow(position)
    }
  }
}

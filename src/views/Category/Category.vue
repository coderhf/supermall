<template>
  <div id="category">
    <category-nav-bar/>
    <tab-control class="top-nav" :titles="titles" @tabClick="tabClick" v-show="isTabContentFixed" ref="tabContent1"/>
    <div class="category-content">
      <category-tab-menu :categories="categoryList" @selectItem="selectItem"/>
      <scroll
        class="sub-content"
        ref="scroll"
        @scroll="contentScroll"
        :probe-type="3">
        <category-content :categories="showSubCategory" @imgLoad="subImgLoad"/>
        <tab-control :titles="titles" @tabClick="tabClick" ref="tabContent2" v-show="!isTabContentFixed"/>
        <category-details :category-details="showCategoryDetails"/>
      </scroll>
      <!--  返回顶部组件  -->
      <back-top @click.native="backTop" v-show="scrollShow"/>
    </div>
  </div>
</template>

<script>
import Scroll from "components/common/Scroll/Scroll";
import TabControl from "components/content/TabControl/TabControl";

import CategoryNavBar from "./ChildComps/CategoryNavBar";
import CategoryTabMenu from "./ChildComps/CategoryTabMenu";
import CategoryContent from "./ChildComps/CategoryContent";
import CategoryDetails from "./ChildComps/CategoryDetails";


import {
  getCategory,
  getSubCategory,
  getCategoryDetails
} from "network/category";

import {
  tabClickMixin,
  backTopMixin
} from "common/mixin";

export default {
  name: "Category",
  mixins: [tabClickMixin, backTopMixin],
  data() {
    return {
      categoryList: [], // 获取分类导航栏数据
      categoryData: [], // 用来存储分类得子数据
      currentIndex: 0, // 用来存储当前点击得index
      isSubCategory: false, // 用来判断分类上部分是否已经存储有值
      titles: ['综合', '新品', '销量'], // tabcontrol得导航内容
      isCategoryDetails: false, // 用来判断分类详情内容是否已经存储有值
    }
  },
  components: {
    Scroll,
    TabControl,
    CategoryNavBar,
    CategoryTabMenu,
    CategoryContent,
    CategoryDetails
  },
  created() {
    // 获取分类到导航数据
    this._getCategory()
  },
  methods: {
    /**
     * 点击分类时获取每个分类得商品信息
     * @param index
     */
    selectItem(index) {
      this.currentIndex = index
      this._getSubCategory(index)
      // 重新让上面得tabnav进行隐藏
      this.isTabContentFixed = false
    },

    /**
     * 获取分类导航数据
     * */
    _getCategory() {
      // 获取分类数据
      getCategory().then(res => {
        // console.log(res);
        if (res.data) {
          this.categoryList = res.data.category.list
        }
        // 将categoryData进行初始化
        for (let i = 0; i < this.categoryList.length; i++) {
          this.categoryData[i] = {
            subCategory: {},
            categoryDetails: {
              'pop': [],
              'new': [],
              'sell': []
            }
          }
        }
        // 获取第一次得数据
        this.selectItem(this.currentIndex)
      })
    },

    /**
     * 获取分类详情数据
     * @param index
     * @param type
     * @private
     */
    _getCategoryDetails(index, type) {
      const miniWallkey = this.categoryList[index].miniWallkey
      getCategoryDetails(miniWallkey, type).then(res => {
        this.categoryData[index].categoryDetails[type] = res
        this.isCategoryDetails = true
      })
    },

    /**
     * 获取分类上部分数据
     * @param index
     * @private
     */
    _getSubCategory(index) {
      const maitKey = this.categoryList[index].maitKey
      getSubCategory(maitKey).then(res => {
        // console.log(res);
        // 将数据存储到categoryData中
        this.categoryData[index].subCategory = res.data
        this.isSubCategory = true
      })
      // 获取分类得详情数据，将其存储到pop,new和sell中
      this._getCategoryDetails(index, 'new')
      this._getCategoryDetails(index, 'pop')
      this._getCategoryDetails(index, 'sell')
    },

    /**
     * 检测分类中得上部分图片加载完成
     */
    subImgLoad() {
      // 滚动刷新
      this.$refs.scroll.refresh()
      // 获取tabnav得值
      this.tabOffsetTop = this.$refs.tabContent2.$el.offsetTop
    },
  },
  computed: {
    /**
     * 用来返回分类中最上面得数据
     * @returns {{}|*}
     */
    showSubCategory() {
      if (this.isSubCategory) {
        this.isSubCategory = false
        return this.categoryData[this.currentIndex].subCategory
      }
    },

    /**
     * 获取分类中得相应得详情内容
     */
    showCategoryDetails() {
      if (this.isCategoryDetails) {
        this.isCategoryDetails = false
        return this.categoryData[this.currentIndex].categoryDetails[this.currentType]
      }
    }
  },

}
</script>

<style scoped>

.top-nav {
  width: 75%;
  position: fixed;
  right: 0;
}

.category-content {
  display: flex;
}

.sub-content {
  width: 75%;
  height: calc(100vh - 44px - 49px);
  overflow: hidden;
}

/*.sub-content-height {*/
/*  height: calc(100vh - 44px - 49px - 40px);*/
/*}*/
</style>

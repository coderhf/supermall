<template>
  <div id="app">
    <keep-alive exclude="Detail">
      <router-view/>
    </keep-alive>
    <main-tab-bar></main-tab-bar>
    <icon/>
    <svg-icon/>
  </div>
</template>

<script>
import MainTabBar from "components/content/MainTabBar/MainTabBar";
import SvgIcon from "./components/content/Icon/svg";
import Icon from "./components/content/Icon/Icon";
export default {
  name: 'App',
  components: {
    MainTabBar,
    SvgIcon,
    Icon
  }
}
</script>

<style>
@import "assets/css/base.css";
</style>

import Vue from 'vue'
import App from './App.vue'
import router from "./router";
import store from "./store";
import toast from "./components/common/toast";
import fastclick from 'fastclick'
import VueLazyload from "vue-lazyload";

Vue.config.productionTip = false

// 中央事件总线
Vue.prototype.$bus = new Vue({})

// 注册toast(弹框插件)
Vue.use(toast)

// 解决移动端点击300ms的延迟问题
fastclick.attach(document.body)

// 图片懒加载
Vue.use(VueLazyload, {
  loading: require('./assets/img/common/placeholder.png')
})

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')

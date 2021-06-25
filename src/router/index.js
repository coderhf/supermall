import Vue from 'vue'
import VueRouter from 'vue-router'

const Home = () => import('views/Home/Home')
const Category = () => import('views/Category/Category')
const Shop = () => import('views/Shop/Shop')
const Profile = () => import('views/Profile/Profile')
const Detail = () => import('views/Details/Detail')

// 1. 安装插件
Vue.use(VueRouter)

// 创建vue-router对象
const routes = [
  {
    path: '',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/category',
    component: Category
  },
  {
    path: '/shop',
    component: Shop
  },
  {
    path: '/profile',
    component: Profile
  },
  {
    path: '/detail/:id',
    component: Detail
  }
]
const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router

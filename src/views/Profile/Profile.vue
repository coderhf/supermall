<template>
 <div id="profile">
  <profile-nav-bar/>
   <user-infos/>
   <selection/>
   <profile-view :list-data="orderList" class="order-list"/>
   <profile-view :list-data="serviceList" class="service-list"/>
 </div>
</template>

<script>
import ProfileNavBar from "./ChildComps/ProfileNavBar";
import UserInfos from "./ChildComps/UserInfos";
import Selection from "./ChildComps/Selection";
import ProfileView from "./ChildComps/ProfileView";

export default {
  name: "Profile",
  components: {
    ProfileNavBar,
    UserInfos,
    Selection,
    ProfileView
  },
  data() {
    return {
      orderList: [
        {icon: '#order', iconColor: '#ff8198', info: '我的消息'},
        {icon: '#point', iconColor: '#fc7b53', info: '积分商城'},
        {icon: '#vip', iconColor: '#ffc636', info: '会员卡'},
      ],
      serviceList: [
        {icon: '#service', iconColor: '#ff8198', info: '我的购物车'},
        {icon: '#download', iconColor: '#ff8198', info: '下载购物APP'},
      ]
    }
  }
}
</script>

<style scoped>
#profile {
  background-color: #f2f2f2;
}
.order-list, .service-list {
  margin-top: 12px;
}
</style>

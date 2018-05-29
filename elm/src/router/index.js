/**
 * 配置了路由的路由器模块
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
import goods from '../components/goods/goods.vue'
import ratings from '../components/ratings/ratings.vue'
import seller from '../components/seller/seller.vue'

Vue.use(VueRouter)
//创建路由实例
export default new VueRouter({
  linkActiveClass: 'active',
  routes: [
    {
      path: '/',
      // component:  goods
      redirect: '/ratings'
    },
    {
      path: '/goods',
      component: goods
    },
    {
      path: '/ratings',
      component: ratings
    },
    {
      path: '/seller',
      component: seller
    }
  ]
})

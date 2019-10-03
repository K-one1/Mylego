import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/body/Body.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    //购物车
    {
      path:'/shopCar',
      name:'shopCar',
      component:()=>import('./components/shopCar/ShopCar.vue')
    }
  ]
})

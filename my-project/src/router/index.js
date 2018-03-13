import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import home from '@/components/home'
import cart from '@/components/cart'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index,
      children: [
        {
          path: '/index/home',
          name: 'home',
          component: home
        },
        {
          path: '/index/cart',
          name: 'cart',
          component: cart
        }
      ]
    }
  ]
})

import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home.vue'
import Stock from '@/views/Stock.vue'
import Sale from '@/views/Sale.vue'
import HomeContent from '@/views/HomeContent.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component:Home,
    children:[
      {
        path:'/',
        component:HomeContent
      },
      {
        path:'/stock',
        component:Stock
      },
      {
        path:'/sale',
        component:Sale
      },

    ]
  },
]

const router = new VueRouter({
  routes
})

export default router

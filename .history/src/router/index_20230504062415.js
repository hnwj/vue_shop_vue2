import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '@/components/Login'
Vue.use(VueRouter)

const routes = [
  {
    redirect: '/login',
    path: '/'
  },
  {
    path: '/login',
    component: Login
  }
]

const router = new VueRouter({
  routes
})

export default router

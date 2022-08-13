import { createRouter, createWebHistory } from 'vue-router'
// import StartAnimation from '@/views/start-animation/index.vue'
// const ROOT_NAV = () => import(/* webpackChunkName: "Root_Nav" */ '../components/RootNav.vue')

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/home/index.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router

import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/login')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../layout')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router

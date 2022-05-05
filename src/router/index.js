import { h } from 'vue'
import { createRouter, createWebHistory, RouterView } from 'vue-router'

const routes = [
  {
    path: '/',
    redirect: '/histology'
  },
  {
    path: '/histology',
    component: {render: () => h(RouterView)},
    children: [
      {
        path: '',
        component: () => import('../views/histology/Home.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

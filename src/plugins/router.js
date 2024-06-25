import { createRouter, createWebHistory } from 'vue-router'
import Result from '@/components/Result.vue'
import Item from '@/components/Item.vue'
import About from '@/components/About.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'result',
      component: Result
    },
    {
      path: '/item',
      name: 'item',
      component: Item
    },
    {
      path: '/about',
      name: 'about',
      component: About
    }
  ]
})

export default router

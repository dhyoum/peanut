import { createRouter, createWebHistory } from 'vue-router'
import Result from '@/views/Result.vue'
import Item from '@/views/Item.vue'
import Test from '@/views/Test.vue'
import Test2 from '@/views/Test2.vue'
import About from '@/views/About.vue'

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
      path: '/test',
      name: 'Test',
      component: Test
    },
    {
      path: '/test2',
      name: 'Test2',
      component: Test2
    },
    {
      path: '/about',
      name: 'about',
      component: About
    }
  ]
})

export default router

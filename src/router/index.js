import { createRouter, createWebHistory } from 'vue-router'
import FirstOjtContent from '../views/FirstOjtContent.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'first-content',
      component: FirstOjtContent
    }
  ]
})

export default router

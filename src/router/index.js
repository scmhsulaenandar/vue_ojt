import { createRouter, createWebHistory } from 'vue-router'
import FirstOjtContent from '../views/FirstOjtContent.vue'
import ThirdOjtContent from '../views/ThirdOjtContent.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'first-content',
      component: FirstOjtContent
    },
    {
      path: '/third-ojt',
      name: 'third-content',
      component: ThirdOjtContent
    }
  ]
})

export default router

import { createRouter, createWebHistory } from 'vue-router'
import FirstOjtContent from '../views/FirstOjtContent.vue'
import SecondOjtContent from '../views/SecondOjtContent.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'first-content',
      component: FirstOjtContent
    },
    {
      path: '/second-ojt',
      name: 'second-content',
      component: SecondOjtContent
    }
  ]
})

export default router
  
import { createRouter, createWebHistory } from 'vue-router'
import FirstOjtContent from '../views/FirstOjtContent.vue'
import ThirdOjtContent from '../views/ThirdOjtContent.vue'
import SecondOjtContent from '../views/SecondOjtContent.vue'
import BookContent from '../views/BookContent.vue'
import Register from'../views//FinalOjtProjVue/Register.vue'
import RegisterList from'../views/FinalOjtProjVue/RegisterList.vue'

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
    },
    {
      path: '/second-ojt',
      name: 'second-content',
      component: SecondOjtContent
    },
    {
      path: '/book',
      name: 'book-content',
      component: BookContent
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: '/register-list',
      name: 'register-list',
      component: RegisterList
    }
  ]
})

export default router


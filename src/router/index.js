import { createRouter, createWebHistory } from 'vue-router'
import homePage from '../views/home.page.vue'
import gamePage from '../views/game.page.vue'
import gameDetails from '../views/game.details.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: homePage
    },
    {
      path: '/game',
      name: 'game',
      component: gamePage
    },
    {
      path: '/game-details/:id',
      name: 'gameDetails',
      component: gameDetails
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    }
  ]
})

export default router

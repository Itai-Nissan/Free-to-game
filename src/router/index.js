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
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    }
  ]
})

export default router

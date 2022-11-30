import { createRouter, createWebHashHistory } from 'vue-router'
import homePage from '../views/home.page.vue'
import gamePage from '../views/game.page.vue'
import gameDetails from '../views/game.details.vue'
import login from '../views/login.vue'
import signup from '../views/signup.vue'
import userPage from '../views/user.page.vue'


const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: homePage
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/signup',
      name: 'signup',
      component: signup
    },
    {
      path: '/user/:_id',
      name: 'userPage',
      component: userPage
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
      component: () => import('../views/about.page.vue')
    },
    {
      path: '/learn',
      name: 'learn',
      component: () => import('../views/learn.more.vue')
    }
  ]
})

export default router

import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/one',
      name: 'one',
      component: () => import('../views/Days/DayOne.vue')
    },
    {
      path: '/two',
      name: 'two',
      component: () => import('../views/Days/DayTwo.vue')
    },
    {
      path: '/three',
      name: 'three',
      component: () => import('../views/Days/DayThree.vue')
    },
    {
      path: '/four',
      name: 'four',
      component: () => import('../views/Days/DayFour.vue')
    },
    {
      path: '/five',
      name: 'five',
      component: () => import('../views/Days/DayFive.vue')
    },
    {
      path: '/six',
      name: 'six',
      component: () => import('../views/Days/DaySix.vue')
    },
    {
      path: '/seven',
      name: 'seven',
      component: () => import('../views/Days/DaySeven.vue')
    },
    {
      path: '/eight',
      name: 'eight',
      component: () => import('../views/Days/DayEight.vue')
    },
    {
      path: '/nine',
      name: 'nine',
      component: () => import('../views/Days/DayNine.vue')
    },
    {
      path: '/ten',
      name: 'ten',
      component: () => import('../views/Days/DayTen.vue')
    },
    {
      path: '/eleven',
      name: 'eleven',
      component: () => import('../views/Days/DayEleven.vue')
    },
    {
      path: '/twelve',
      name: 'twelve',
      component: () => import('../views/Days/DayTwelve.vue')
    },
    {
      path: '/thirteen',
      name: 'thirteen',
      component: () => import('../views/Days/DayThirteen.vue')
    },
    {
      path: '/fourteen',
      name: 'fourteen',
      component: () => import('../views/Days/DayFourteen.vue')
    },
    {
      path: '/fifteen',
      name: 'fifteen',
      component: () => import('../views/Days/DayFifteen.vue')
    },
    {
      path: '/sixteen',
      name: 'sixteen',
      component: () => import('../views/Days/DaySixteen.vue')
    },
    {
      path: '/seventeen',
      name: 'seventeen',
      component: () => import('../views/Days/DaySeventeen.vue')
    },
    {
      path: '/eighteen',
      name: 'eighteen',
      component: () => import('../views/Days/DayEighteen.vue')
    },
    {
      path: '/nineteen',
      name: 'nineteen',
      component: () => import('../views/Days/DayNineteen.vue')
    },
    {
      path: '/twenty',
      name: 'twenty',
      component: () => import('../views/Days/DayTwenty.vue')
    },
    {
      path: '/twentyone',
      name: 'twentyone',
      component: () => import('../views/Days/DayTwentyone.vue')
    },
    {
      path: '/twentytwo',
      name: 'twentytwo',
      component: () => import('../views/Days/DayTwentytwo.vue')
    },
    {
      path: '/twentythree',
      name: 'twentythree',
      component: () => import('../views/Days/DayTwentythree.vue')
    },
    {
      path: '/twentyfour',
      name: 'twentyfour',
      component: () => import('../views/Days/DayTwentyfour.vue')
    }
  ]
})

export default router

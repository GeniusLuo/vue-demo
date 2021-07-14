import Vue from 'vue'
import VueRouter from 'vue-router'
const Home = () => import(/* webpackChunkName: "home" */ '../views/Home.vue')
const About = () => import(/* webpackChunkName: "about" */ '../views/About.vue')
const Animation = () => import(/* webpackChunkName: "animation" */ '../views/Animation.vue')
const Pagination = () => import(/* webpackChunkName: "pagination" */ '../views/Pagination.vue')

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/animation',
    name: 'Animation',
    component: Animation
  },
  {
    path: '/Pagination',
    name: 'Pagination',
    component: Pagination
  }
]

const router = new VueRouter({
  routes
})

export default router

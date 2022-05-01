import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView'
import AboutView from '@/views/AboutView'
import BlogsView from '@/views/BlogsView'
import AccountView from "@/views/AccountView";

const routes = [
  {
    path: '/',
    name: 'home-view',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about-view',
    component: AboutView
  },
  {
    path: '/account',
    name: 'account-view',
    component: AccountView
  },
  {
    path: '/blogs',
    name: 'blogs-view',
    component: BlogsView
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router

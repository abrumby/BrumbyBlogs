import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView'
import AboutView from '@/views/AboutView'
import BlogsView from '@/views/BlogsView'
import CreateBlogView from '@/views/CreateBlogView'
import LoginView from '@/views/LoginView'
import RegisterView from '@/views/RegisterView'
import RecoverAccountView from '@/views/RecoverAccountView'
import ProfileView from "@/views/ProfileView"
import TestFormView from "@/views/TestFormView"
import AdminView from "@/views/AdminView"
import { auth } from "@/firebase/firebaseInit"
import NotFound from "@/views/NotFound"
import TodoView from "@/views/TodoView"


const routes = [
  {
    path: '/',
    name: 'home-view',
    component: HomeView,
    meta: {
      title: 'Home',
      requiresAuth: false
    }
  },
  {
    path: '/blogs',
    name: 'blogs-view',
    component: BlogsView,
    meta: {
      title: 'Blogs',
      requiresAuth: false
    }
  },
  {
    path: '/create-blog',
    name: 'create-blog-view',
    component: CreateBlogView,
    meta: {
      title: 'Blogs',
      requiresAuth: false
    }
  },
  {
    path: '/about',
    name: 'about-view',
    component: AboutView,
    meta: {
      title: 'About',
      requiresAuth: false
    }
  },
  {
    path: '/profile',
    name: 'profile-view',
    component: ProfileView,
    meta: {
      title: 'My Profile',
      requiresAuth: true
    }
  },
  {
    path: '/admin',
    name: 'admin-view',
    component: AdminView,
    meta: {
      title: 'Admin',
      requiresAuth: true
    }
  },
  {
    path: '/login',
    name: 'login-view',
    component: LoginView,
    meta: {
      title: 'Login',
      requiresAuth: false
    }
  },
  {
    path: '/register',
    name: 'register-view',
    component: RegisterView,
    meta: {
      title: 'Register',
      requiresAuth: false
    }
  },
  {
    path: '/recover-account',
    name: 'recover-account-view',
    component: RecoverAccountView,
    meta: {
      title: 'Account',
      requiresAuth: false
    }
  },
  {
    path: '/test',
    name: 'test-form-view',
    component: TestFormView,
    meta: {
      title: 'Test Form',
      requiresAuth: false
    }
  },
  {
    path: "/todo",
    name: 'todo-view',
    component: TodoView,
    meta: {
      title: 'Todo',
      requiresAuth: false
    }
  },
  {
    path: "/:catchAll(.*)",
    name: "NotFound",
    component: NotFound,
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  if(to.matched.some(record => record.meta.requiresAuth) && !auth.currentUser){
    next('/login')
    return
  }
  document.title = `${to.meta.title} | Brumby logs`;
  next();
})

export default router

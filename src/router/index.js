import { createRouter, createWebHistory } from "vue-router";
import { auth } from "@/firebase/firebaseInit";

const routes = [
  {
    path: "/",
    name: "home-view",
    component: () => import("@/views/HomeView"),
    meta: {
      title: "Home",
      requiresAuth: false,
    },
  },
  {
    path: "/blogs",
    name: "blogs-view",
    component: () => import("@/views/BlogsView"),
    meta: {
      title: "Blogs",
      requiresAuth: false,
    },
  },
  {
    path: "/create-blog",
    name: "create-blog-view",
    component: () => import("@/views/CreateBlogView"),
    meta: {
      title: "Blogs",
      requiresAuth: false,
    },
  },
  {
    path: "/about",
    name: "about-view",
    component: () => import("@/views/AboutView"),
    meta: {
      title: "About",
      requiresAuth: false,
    },
  },
  {
    path: "/profile",
    name: "profile-view",
    component: () => import("@/views/ProfileView"),
    meta: {
      title: "My Profile",
      requiresAuth: true,
    },
  },
  {
    path: "/admin",
    name: "admin-view",
    component: () => import("@/views/AdminView"),
    meta: {
      title: "Admin",
      requiresAuth: true,
    },
  },
  {
    path: "/login",
    name: "login-view",
    component: () => import("@/views/LoginView"),
    meta: {
      title: "Login",
      requiresAuth: false,
    },
  },
  {
    path: "/register",
    name: "register-view",
    component: () => import("@/views/RegisterView"),
    meta: {
      title: "Register",
      requiresAuth: false,
    },
  },
  {
    path: "/recover-account",
    name: "recover-account-view",
    component: () => import("@/views/RecoverAccountView"),
    meta: {
      title: "Account",
      requiresAuth: false,
    },
  },
  {
    path: "/test",
    name: "test-form-view",
    component: () => import("@/views/TestFormView"),
    meta: {
      title: "Test Form",
      requiresAuth: false,
    },
  },
  {
    path: "/todo",
    name: "todo-view",
    component: () => import("@/views/TodoView"),
    meta: {
      title: "Todo",
      requiresAuth: false,
    },
  },
  {
    path: "/:catchAll(.*)",
    name: "NotFound",
    component: () => import("@/views/NotFound"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresAuth) && !auth.currentUser) {
    next("/login");
    return;
  }
  document.title = `${to.meta.title} | Brumby logs`;
  next();
});

export default router;

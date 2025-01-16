import { createRouter, createWebHashHistory } from 'vue-router';

const routes = [
  // Home
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/Home.vue'),
  },
  // Login
  {
    path: '/pages/login',
    name: 'Login',
    component: () => import('@/views/pages/Login.vue'),
  },
  // Dashboard
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: () => import('@/views/dashboard/Dashboard.vue'),
  },

];

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior() {
    return { top: 0 };
  },
});

export default router;

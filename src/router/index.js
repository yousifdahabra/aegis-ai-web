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
  // Users List
  {
    path: '/base/users/list',
    name: 'UsersList',
    component: () => import('@/views/base/users/UsersList.vue'),
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

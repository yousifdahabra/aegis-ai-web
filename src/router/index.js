import { createRouter, createWebHashHistory } from 'vue-router';
import DefaultLayout from '@/layouts/DefaultLayout.vue';

const routes = [
  // Home route
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/Home.vue'),
  },
  // Login route
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/pages/Login.vue'),
  },
  // Dashboard
  {
    path: '/dashboard',
    component: DefaultLayout,
    meta: { requiresAuth: true },
    children: [
      {
        path: '/dashboard',
        name: 'Dashboard',
        component: () => import('@/views/base/users/UsersList.vue'),
      },
    ],
  },
  // Users
  {
    path: '/base/users',
    component: DefaultLayout,
    meta: { requiresAuth: true },
    children: [
      {
        path: 'list',
        name: 'UsersList',
        component: () => import('@/views/base/users/UsersList.vue'),
      },
    ],
  },
  // Tests
  {
    path: '/base/tests/:id',
    component: DefaultLayout,
    meta: { requiresAuth: true },
    children: [
      {
        path: 'add/:id',
        name: 'AddTest',
        component: () => import('@/views/base/tests/AddTest.vue'),
        props: true,
      },
      {
        path: '',
        name: 'TestsList',
        component: () => import('@/views/base/tests/TestsList.vue'),
        props: true,
      },
      {
        path: '/base/tests/details/:testId',
        name: 'TestDetails',
        component: () => import('@/views/base/tests/TestDetails.vue'),
        props: true,
      },
    ],
  },
  // Requests
  {
    path: '/base/request',
    component: DefaultLayout,
    meta: { requiresAuth: true },
    children: [
      {
        path: 'view',
        name: 'ViewRequests',
        component: () => import('@/views/base/request/RequestsList.vue'),
      },
    ],
  },
  // Expert Requests
  {
    path: '/base/expert',
    component: DefaultLayout,
    meta: { requiresAuth: true, expertOnly: true },
    children: [
      {
        path: 'list',
        name: 'ExpertRequestList',
        component: () => import('@/views/base/expert/ExpertRequestList.vue'),
      },
    ],
  },
  // Profile
  {
    path: '/base/profile',
    component: DefaultLayout,
    meta: { requiresAuth: true },
    children: [
      {
        path: 'view',
        name: 'Profile',
        component: () => import('@/views/base/Profile.vue'),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior() {
    return { top: 0 };
  },
});

// Navigation guard for login and role-based access
router.beforeEach((to, from, next) => {
  const user = JSON.parse(localStorage.getItem('user'));
  const role = localStorage.getItem('role');

  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!user) {
      return next({ name: 'Login' });
    }

    if (to.matched.some(record => record.meta.expertOnly || record.meta.adminOnly)) {
      if (role !== 'admin') {
        return next({ name: 'Dashboard' });
      }
    }
  }

  if (to.name === 'Login' && user) {
    return next({ name: role === 'expert' ? 'Dashboard' : 'Dashboard' });
  }

  next();
});
export default router;

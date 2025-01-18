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
  // Login route
  {
    path: '/pages/login',
    name: 'Login',
    component: () => import('@/views/pages/Login.vue'),
  },
  // Dashboard
  {
    path: '/dashboard',
    component: DefaultLayout,
    children: [
      {
        path: '/dashboard',
        name: 'Dashboard',
        component: () => import('@/views/dashboard/Dashboard.vue'),
      },
    ],
  },
  {
    path: '/base/users',
    component: DefaultLayout,
    children: [
      {
        path: 'list',
        name: 'UsersList',
        component: () => import('@/views/base/users/UsersList.vue'),
      },
    ],
  },
  {
    path: '/base/tests/:id',
    component: DefaultLayout,
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
  {
    path: '/base/request',
    component: DefaultLayout,
    children: [
      {
        path: 'view',
        name: 'ViewRequests',
        component: () => import('@/views/base/request/RequestsList.vue'),
      },
    ],
  },
  {
    path: '/base/expert',
    component: DefaultLayout,
    children: [
      {
        path: 'list',
        name: 'ExpertRequestList',
        component: () => import('@/views/base/expert/ExpertRequestList.vue'),
      },
    ],
  },


];

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior() {
    // Always scroll to top
    return { top: 0 };
  },
});

export default router;

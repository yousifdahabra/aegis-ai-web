export default [
  {
    component: 'CNavItem',
    name: 'Dashboard',
    to: '/dashboard',
    icon: 'cil-speedometer',
    role: 'all',
  },
  {
    component: 'CNavGroup',
    name: 'Users',
    to: '/base/users',
    icon: 'cil-people',
    role: 'admin',
    items: [
      {
        component: 'CNavItem',
        name: 'List Users',
        to: '/base/users/list',
      },
    ],
  },
  {
    component: 'CNavGroup',
    name: 'Requests',
    to: '/requests',
    icon: 'cil-task',
    role: 'all',
    items: [
      {
        component: 'CNavItem',
        name: 'View Requests',
        to: '/base/request/view',
      },
    ],
  },
  {
    component: 'CNavGroup',
    name: 'Become an Expert',
    to: '/base/expert',
    icon: 'cil-star',
    role: 'admin',
    items: [
      {
        component: 'CNavItem',
        name: 'Expert Request List',
        to: '/base/expert/list',
      },
    ],
  },


];

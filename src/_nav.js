export default [
  {
    component: 'CNavItem',
    name: 'Dashboard',
    to: '/dashboard/overview',
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
        name: 'Add User',
        to: '/base/users/add',
      },
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
        to: '/requests/view',
      },
    ],
  },



];

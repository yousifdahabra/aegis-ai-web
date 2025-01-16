import { defineStore } from 'pinia';
import { requestAPI } from '@/utlis/request';

export const useUsersStore = defineStore('users', {
  state: () => ({
    users: [],
    errorMessage: null,
  }),
  actions: {
    async fetchUsers() {
        const response = await requestAPI({
          route: 'users',
          method: 'GET',
        });

    },
  },
});

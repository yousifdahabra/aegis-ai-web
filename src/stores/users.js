import { defineStore } from 'pinia';
import { requestAPI } from '@/utlis/request';

export const useUsersStore = defineStore('users', {
  state: () => ({
    users: [],
    errorMessage: null,
  }),
  actions: {
    async fetchUsers() {
      try {
        const response = await requestAPI({
          route: 'users',
          method: 'GET',
        });

        if (response.status) {
          this.users = response.data;
          return { success: true };
        } else {
          this.errorMessage = response.message;
          return { success: false, message: response.message };
        }
      } catch (error) {
        this.errorMessage = 'An error occurred while fetching users.';
        return { success: false, message: 'An error occurred while fetching users.' };
      }
    },
  },
});

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
          this.users = Object.values(response.data);
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
    async blockUser(userId) {
      try {
        const response = await requestAPI({
          route: `users/block/${userId}`,
          method: 'DELETE',
        });

        if (response.status) {
          this.users = this.users.filter((user) => user.id !== userId);
          return { success: true };
        } else {
          return { success: false, message: response.message };
        }
      } catch (error) {
        return { success: false, message: 'An error occurred while blocking the user.' };
      }
    },
    async editUser(userId, updatedData) {
      try {
        const response = await requestAPI({
          route: `users/${userId}`,
          method: 'PUT',
          body: updatedData,
          header: 'application/json',
        });

        if (response.status) {
          const userIndex = this.users.findIndex((user) => user.id === userId);
          if (userIndex !== -1) {
            this.users[userIndex] = { ...this.users[userIndex], ...updatedData };
          }
          return { success: true };
        } else {
          return { success: false, message: response.message };
        }
      } catch (error) {
        return { success: false, message: 'An error occurred while editing the user.' };
      }
    },
  },
  persist: true,
});

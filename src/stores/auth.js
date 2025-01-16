import { defineStore } from 'pinia';
import { requestAPI } from '@/utils/request';

export const useAuthStore = defineStore('auth', {
  state: () => ({
    token: localStorage.getItem('token') || null,
    user: JSON.parse(localStorage.getItem('user')) || null,
  }),
  actions: {
    async login(credentials) {
      try {
        const response = await requestAPI({
          route: 'login',
          method: 'POST',
          body: credentials,
          header: 'application/json',
        });

        if (response.success) {
          this.token = response.token;
          this.user = response.user;

          localStorage.setItem('token', response.token);
          localStorage.setItem('user', JSON.stringify(response.user));

          return { success: true };
        } else {
          return { success: false, message: response.message };
        }
      } catch (error) {
        return { success: false, message: 'An error occurred during login.' };
      }
    },
  },
  getters: {
    isAuthenticated: (state) => !!state.token,
    getUser: (state) => state.user,
  },
});

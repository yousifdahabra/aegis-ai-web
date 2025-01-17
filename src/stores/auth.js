import { defineStore } from 'pinia';
import { requestAPI } from '@/utlis/request';

export const useAuthStore = defineStore('auth', {
  state: () => ({
    token: localStorage.getItem('token') || null,
    user: JSON.parse(localStorage.getItem('user')) || null,
    role: localStorage.getItem('role') || '',
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

        if (response) {
          this.token = response.token;
          this.user = response.user;
          const user_role_id = response.user.user_role_id;
          let role = '';

          if(user_role_id == 1) role = 'admin';
          else if(user_role_id == 2) role = 'expert';
          else if(user_role_id == 3) role = 'user';

          localStorage.setItem('token',"Bearer "+ response.token);
          localStorage.setItem('role', role);
          localStorage.setItem('user', JSON.stringify(response.user));

          return { success: true };
        } else {
          return { success: false, message: response.message };
        }
      } catch (error) {
        return { success: false, message: 'An error occurred during login.' };
      }
    },
    logout() {
      this.token = null;
      this.user = null;
      localStorage.removeItem('token');
      localStorage.removeItem('user');
    },
  },
  getters: {
    isAuthenticated: (state) => !!state.token,
    getUser: (state) => state.user,
  },
  persist: true,
});

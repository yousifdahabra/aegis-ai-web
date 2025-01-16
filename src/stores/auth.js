import { defineStore } from 'pinia';
import { requestAPI } from '@/utils/request';

export const useAuthStore = defineStore('auth', {
  state: () => ({}),
  actions: {
    async login(credentials) {
        const response = await requestAPI({
          route: 'login',
          method: 'POST',
          body: credentials,
          header: 'application/json',
        });
    },
  },
  getters: {},
});

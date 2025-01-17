import { defineStore } from 'pinia';
import { requestAPI } from '@/utlis/request';

export const useRequestsStore = defineStore('requests', {
  state: () => ({
    requests: [],
    loading: false,
    errorMessage: null,
    successMessage: null,
  }),
  actions: {
    async fetchRequests() {
      try {
        this.loading = true;
        this.errorMessage = null;

        const response = await requestAPI({
          route: 'user_expert_requests',
          method: 'GET',
          header: 'application/json',
        });

        if (response.status) {
          this.requests = Object.values(response.data);
        } else {
          this.errorMessage = response.message;
        }
      } catch (error) {
        this.errorMessage = 'An error occurred while fetching requests.';
      } finally {
        this.loading = false;
      }
    },
  },
  persist: true,
});

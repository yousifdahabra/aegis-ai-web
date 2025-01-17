import { defineStore } from 'pinia';
import { requestAPI } from '@/utlis/request';

export const useTestsStore = defineStore('tests', {
  state: () => ({
    tests: [],
    loading: false,
    errorMessage: null,
    successMessage: null,
  }),
  actions: {
    async fetchTests(userId) {
      try {
        this.loading = true;
        this.errorMessage = null;

        const response = await requestAPI({
          route: `tests/get-user-list/${userId}`,
          method: 'GET',
          header: 'application/json',
        });
        console.log('response')
        console.log(response)

        if (response) {
          this.tests = Object.values(response.data);
        } else {
          this.errorMessage = response.message;
          this.tests = [];
        }
      } catch (error) {
        this.errorMessage = 'Failed to fetch tests. Please try again.';
      } finally {
        this.loading = false;
      }
    },
  },
});

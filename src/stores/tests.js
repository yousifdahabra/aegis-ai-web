import { defineStore } from 'pinia';
import { requestAPI } from '@/utlis/request';

export const useTestsStore = defineStore('tests', {
  state: () => ({
    tests: [],
    testDetails: null,
    questions: [],
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

        if (response.status) {
          this.tests = Object.values(response.data);
        } else {
          this.tests = [];
          this.errorMessage = response.message;
        }
      } catch (error) {
        this.tests = [];
        this.errorMessage = 'Failed to fetch tests. Please try again.';
      } finally {
        this.loading = false;
      }
    },

    async fetchTestDetails(testId) {
      try {
        this.loading = true;
        this.errorMessage = null;

        const response = await requestAPI({
          route: `tests/get-test-solutions/${testId}`,
          method: 'GET',
          header: 'application/json',
        });

        if (response.status) {
          this.testDetails = response.data.test;
          this.questions = Object.values(response.data.question);
          this.successMessage = response.message;
        } else {
          this.testDetails = null;
          this.questions = [];
          this.errorMessage = response.message;
        }
      } catch (error) {
        this.testDetails = null;
        this.questions = [];
        this.errorMessage = 'Failed to fetch test details. Please try again.';
      } finally {
        this.loading = false;
      }
    },

    async addTest(testData) {
      try {
        this.loading = true;
        this.errorMessage = null;

        console.log('Request Data:', testData);

        const response = await requestAPI({
          route: 'tests/store-full-test',
          method: 'POST',
          body: testData,
          header: 'application/json',
        });

        if (response.status) {
          this.successMessage = 'Test added successfully!';
          return { success: true };
        } else {
          this.errorMessage = response.message;
          return { success: false, message: response.message };
        }
      } catch (error) {
        this.errorMessage = 'Failed to add test. Please try again.';
        return { success: false, message: 'Failed to add test. Please try again.' };
      } finally {
        this.loading = false;
      }
    }

  },
  persist: true,
});

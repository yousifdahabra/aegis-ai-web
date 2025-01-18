import { defineStore } from "pinia";
import { requestAPI } from "@/utlis/request";

export const useExpertRequestsStore = defineStore("expertRequests", {
  state: () => ({
    requests: [],
    loading: false,
    errorMessage: null,
    successMessage: null,
  }),
  actions: {
    async fetchExpertRequests() {
      try {
        this.loading = true;
        this.errorMessage = null;

        const response = await requestAPI({
          route: "experts/get-expert-request",
          method: "GET",
          header: "application/json",
        });

        if (response.status && Array.isArray(response.data)) {
          this.requests = response.data.map((req) => ({
            ...req,
            user: req.user || {},
            expert_request_documents: req.expert_request_documents || [],
          }));
          this.successMessage = "Expert requests fetched successfully!";
        } else {
          this.requests = [];
          this.errorMessage = response.message || "Failed to fetch expert requests.";
        }
      } catch (error) {
        this.requests = [];
        this.errorMessage = "An error occurred while fetching expert requests.";
      } finally {
        this.loading = false;
      }
    },

    async downloadFile(filePath) {
      try {
        this.loading = true;
        const response = await requestAPI({
          route: filePath,
          method: "GET",
          responseType: "application/json",
        });

        if (response) {
          const url = window.URL.createObjectURL(new Blob([response]));
          const link = document.createElement("a");
          link.href = url;
          link.setAttribute("download", filePath.split("/").pop());
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);

          this.successMessage = "File downloaded successfully!";
        } else {
          this.errorMessage = "Failed to download file.";
        }
      } catch (error) {
        this.errorMessage = "An error occurred while downloading the file.";
      } finally {
        this.loading = false;
      }
    },

    async acceptRequest(requestId) {
      try {
        this.loading = true;
        const response = await requestAPI({
          route: `experts/accept-request/${requestId}`,
          method: "GET",
          header: "application/json",
        });

        if (response.status) {
          console.log('acceptRequest')
          console.log(response)

          this.successMessage = "Request accepted successfully!";
          return { success: true };
        } else {
          this.errorMessage = response.message || "Failed to accept request.";
          return { success: false };
        }
      } catch (error) {
        this.errorMessage = "An error occurred while accepting the request.";
        return { success: false };
      } finally {
        this.loading = false;
      }
    },

    async rejectRequest(requestId) {
      try {

        this.loading = true;
        const response = await requestAPI({
          route: `experts/reject-request/${requestId}`,
          method: "GET",
          header: "application/json",
        });

        if (response.status) {
          console.log('rejectRequest')
          console.log(response)

          this.successMessage = "Request rejected successfully!";
          return { success: true };
        } else {
          this.errorMessage = response.message || "Failed to reject request.";
          return { success: false };
        }
      } catch (error) {
        this.errorMessage = "An error occurred while rejecting the request.";
        return { success: false };
      } finally {
        this.loading = false;
      }
    },
  },
  persist: true,
});

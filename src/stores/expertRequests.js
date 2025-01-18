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

        console.log("API Response:", response);

        if (response.status && Array.isArray(response.data)) {
          this.requests = response.data.map((req) => ({
            ...req,
            user: req.user || {}, // Ensure user is an object
            expert_request_documents: req.expert_request_documents || [], // Ensure documents is an array
          }));
          this.successMessage = "Expert requests fetched successfully!";
        } else {
          this.requests = [];
          this.errorMessage = response.message || "Failed to fetch expert requests.";
        }
      } catch (error) {
        console.error("Fetch Expert Requests Error:", error);
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
        console.error("Download File Error:", error);
        this.errorMessage = "An error occurred while downloading the file.";
      } finally {
        this.loading = false;
      }
    },
  },
  persist: true,
});

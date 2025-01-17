<template>
  <div>
    <h1>Expert Request List</h1>
    <div v-if="errorMessage" class="text-danger mb-3">{{ errorMessage }}</div>
    <div v-if="successMessage" class="text-success mb-3">{{ successMessage }}</div>
    <div v-if="loading" class="text-center mb-3">Loading...</div>

    <CTable striped hover v-if="!loading && expertRequests.length">
      <CTableHead>
        <CTableRow>
          <CTableHeaderCell>User Name</CTableHeaderCell>
          <CTableHeaderCell>Email</CTableHeaderCell>
          <CTableHeaderCell>Extra Information</CTableHeaderCell>
          <CTableHeaderCell>Files</CTableHeaderCell>
        </CTableRow>
      </CTableHead>
      <CTableBody>
        <CTableRow v-for="request in expertRequests" :key="request.id">
          <CTableDataCell>{{ request.user?.name || "N/A" }}</CTableDataCell>
          <CTableDataCell>{{ request.user?.email || "N/A" }}</CTableDataCell>
          <CTableDataCell>{{ request.extra_informations || "N/A" }}</CTableDataCell>
          <CTableDataCell>
            <div v-if="request.expert_request_documents?.length > 0">
              <div
                v-for="(doc, index) in request.expert_request_documents"
                :key="index"
                class="mb-2"
              >
                <CButton
                  color="info"
                  size="sm"
                  @click="downloadDocument(doc.file_path)"
                >
                  Download File {{ index + 1 }}
                </CButton>
              </div>
            </div>
            <div v-else>No files available</div>
          </CTableDataCell>
        </CTableRow>
      </CTableBody>
    </CTable>

    <div v-else-if="!loading && !expertRequests.length" class="text-center">
      No expert requests found.
    </div>
  </div>
</template>

<script>
import { useExpertRequestsStore } from "@/stores/expertRequests";
import { onMounted } from "vue";

export default {
  name: "ExpertRequestList",
  setup() {
    const expertRequestsStore = useExpertRequestsStore();

    const fetchExpertRequests = async () => {
      await expertRequestsStore.fetchExpertRequests();
    };

    const downloadDocument = async (filePath) => {
      await expertRequestsStore.downloadFile(filePath);
    };

    onMounted(() => {
      fetchExpertRequests();
    });

    return {
      expertRequests: expertRequestsStore.requests,
      loading: expertRequestsStore.loading,
      errorMessage: expertRequestsStore.errorMessage,
      successMessage: expertRequestsStore.successMessage,
      downloadDocument,
    };
  },
};
</script>

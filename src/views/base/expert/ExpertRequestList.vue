<template>
  <div>
    <h1>Expert Request List</h1>
    <div v-if="errorMessage">
      <CAlert color="danger" class="mb-3">{{ errorMessage }}</CAlert>
    </div>
    <div v-if="successMessage">
      <CAlert color="success" class="mb-3">{{ successMessage }}</CAlert>
    </div>

    <div>
      <div v-if="loading" class="text-center mb-3">Loading...</div>
      <div v-else-if="!loading && expertRequests.length" class="table-responsive">
        <CTable striped hover>
          <CTableHead>
            <CTableRow>
              <CTableHeaderCell>User Name</CTableHeaderCell>
              <CTableHeaderCell>Email</CTableHeaderCell>
              <CTableHeaderCell>Extra Information</CTableHeaderCell>
              <CTableHeaderCell>Files</CTableHeaderCell>
              <CTableHeaderCell>Actions</CTableHeaderCell>
            </CTableRow>
          </CTableHead>
          <CTableBody>
            <CTableRow v-for="request in expertRequests" :key="request.id">
              <CTableDataCell>{{ request.user?.name || "N/A" }}</CTableDataCell>
              <CTableDataCell>{{ request.user?.email || "N/A" }}</CTableDataCell>
              <CTableDataCell class="text-wrap">{{ request.extra_informations || "N/A" }}</CTableDataCell>
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
              <CTableDataCell>
                <div class="d-flex flex-column">
                  <CButton
                    color="success"
                    size="sm"
                    class="mb-2"
                    @click="acceptRequest(request.id)"
                  >
                    Accept
                  </CButton>
                  <CButton
                    color="danger"
                    size="sm"
                    @click="rejectRequest(request.id)"
                  >
                    Reject
                  </CButton>
                </div>
              </CTableDataCell>
            </CTableRow>
          </CTableBody>
        </CTable>
      </div>
      <div v-else class="text-center">
        No expert requests found.
      </div>
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

    const acceptRequest = async (requestId) => {
      const result = await expertRequestsStore.acceptRequest(requestId);
      if (result.success) {
        expertRequestsStore.successMessage = "Request accepted successfully!";
        await fetchExpertRequests();
      }
    };

    const rejectRequest = async (requestId) => {
      const result = await expertRequestsStore.rejectRequest(requestId);
      if (result.success) {
        expertRequestsStore.successMessage = "Request rejected successfully!";
        await fetchExpertRequests();
      }
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
      acceptRequest,
      rejectRequest,
    };
  },
};
</script>

<style scoped>
.table-responsive {
  overflow-x: auto;
}
.text-wrap {
  word-wrap: break-word;
  white-space: normal;
}
</style>

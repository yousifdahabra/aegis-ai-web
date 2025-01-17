<template>
  <div>
    <h1>View Requests</h1>
    <div v-if="errorMessage" class="text-danger mb-3">{{ errorMessage }}</div>
    <div v-if="successMessage" class="text-success mb-3">{{ successMessage }}</div>
    <div v-if="loading" class="text-center mb-3">Loading...</div>
    <CTable striped hover v-if="!loading && requests.length">
      <CTableHead>
        <CTableRow>
          <CTableHeaderCell>User Name</CTableHeaderCell>
          <CTableHeaderCell>About User</CTableHeaderCell>
          <CTableHeaderCell>User Note</CTableHeaderCell>
          <CTableHeaderCell>Links</CTableHeaderCell>
          <CTableHeaderCell>Actions</CTableHeaderCell>
        </CTableRow>
      </CTableHead>
      <CTableBody>
        <CTableRow v-for="(request) in requests" :key="request.id">
          <CTableDataCell>{{ request.user.name }}</CTableDataCell>
          <CTableDataCell>{{ request.about_user }}</CTableDataCell>
          <CTableDataCell>{{ request.user_note }}</CTableDataCell>
          <CTableDataCell>{{ request.links }}</CTableDataCell>
          <!-- <CTableDataCell>
            <a v-for="(link, index) in request.links" :key="index" :href="link" target="_blank">
              Link {{ index + 1 }}
            </a>
          </CTableDataCell> -->
          <CTableDataCell>
            <CButton color="info" size="sm" @click="viewTestList(request.user.id)">
              View Test List
            </CButton>
            <CButton color="primary" size="sm" class="ms-2" @click="redirectToAddTest(request.user_id)">
              Add Test
            </CButton>
          </CTableDataCell>
        </CTableRow>
      </CTableBody>
    </CTable>
    <div v-else-if="!loading && !requests.length" class="text-center">
      No requests found.
    </div>
  </div>
</template>

<script>
import { useRouter } from 'vue-router';
import { onMounted } from 'vue';
import { useRequestsStore } from '@/stores/requests';

export default {
  name: 'ViewRequests',
  setup() {
    const router = useRouter();
    const requestsStore = useRequestsStore();

    const fetchRequests = async () => {
      await requestsStore.fetchRequests();
    };

    const viewTestList = (id) => {
      router.push({ name: 'TestsList', params: { id } });
    };

    const redirectToAddTest = (userId) => {
      router.push({ name: 'AddTest', params: { userId } }); // Assuming AddTest route will be added.
    };

    onMounted(() => {
      fetchRequests();
    });

    return {
      requests: requestsStore.requests,
      loading: requestsStore.loading,
      errorMessage: requestsStore.errorMessage,
      successMessage: requestsStore.successMessage,
      viewTestList,
      redirectToAddTest,
    };
  },
};
</script>

<template>
  <div>
    <h1>View Requests</h1>
    <div v-if="errorMessage">
      <CAlert color="danger" class="mb-3">{{ errorMessage }}</CAlert>
    </div>
    <div v-if="successMessage">
      <CAlert color="success" class="mb-3">{{ successMessage }}</CAlert>
    </div>
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
          <CTableDataCell>
            <CButton color="info" size="sm" @click="viewTestList(request.user.id)">
              View Test List
            </CButton>
            <CButton color="primary" size="sm" class="ms-2" @click="redirectToAddTest(request.user.id)">
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

    const redirectToAddTest = (id) => {
      router.push({ name: 'AddTest', params: { id } });
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

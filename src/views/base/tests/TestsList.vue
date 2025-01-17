<template>
  <div>
    <h1>Test List</h1>
    <div v-if="errorMessage" class="text-danger mb-3">{{ errorMessage }}</div>
    <div v-if="successMessage" class="text-success mb-3">{{ successMessage }}</div>
    <div v-if="loading" class="text-center mb-3">Loading...</div>
    <CTable striped hover v-if="!loading && tests.length">
      <CTableHead>
        <CTableRow>
          <CTableHeaderCell>#</CTableHeaderCell>
          <CTableHeaderCell>Title</CTableHeaderCell>
          <CTableHeaderCell>Security</CTableHeaderCell>
          <CTableHeaderCell>User Name</CTableHeaderCell>
          <CTableHeaderCell>State</CTableHeaderCell>
          <CTableHeaderCell>Questions Count</CTableHeaderCell>
          <CTableHeaderCell>Actions</CTableHeaderCell>
        </CTableRow>
      </CTableHead>
      <CTableBody>
        <CTableRow v-for="(test) in tests" :key="test.id">
          <CTableDataCell>{{ test.id }}</CTableDataCell>
          <CTableDataCell>{{ test.title }}</CTableDataCell>
          <CTableDataCell>{{ test.security }}</CTableDataCell>
          <CTableDataCell>{{ test.user_name }}</CTableDataCell>
          <CTableDataCell>{{ test.test_state }}</CTableDataCell>
          <CTableDataCell>{{ test.questions_count }}</CTableDataCell>
          <CTableDataCell>
            <CButton color="info" size="sm" @click="viewTestDetails(test.id)">
              View Details
            </CButton>
          </CTableDataCell>
        </CTableRow>
      </CTableBody>
    </CTable>
    <div v-else-if="!loading && !tests.length" class="text-center">
      No tests found.
    </div>
  </div>
</template>

<script>
import { useRoute, useRouter } from 'vue-router';
import { onMounted } from 'vue';
import { useTestsStore } from '@/stores/tests';

export default {
  name: 'TestsList',
  setup() {
    const route = useRoute();
    const router = useRouter();
    const testsStore = useTestsStore();

    const userId = route.params.id;

    const fetchTests = async () => {
      await testsStore.fetchTests(userId);
    };

    const viewTestDetails =  (testId) => {
      router.push({ name: 'TestDetails', params: { testId } });
    };

    onMounted(() => {
      fetchTests();
    });

    return {
      tests: testsStore.tests,
      loading: testsStore.loading,
      errorMessage: testsStore.errorMessage,
      successMessage: testsStore.successMessage,
      viewTestDetails,
    };
  },
};
</script>

<template>
  <div>
    <h1 class="mb-4">Test Details</h1>
    <CContainer>
      <CCard class="mb-4">
        <CCardHeader>Test Overview</CCardHeader>
        <CCardBody v-if="testDetails">
          <p><strong>Test ID:</strong> {{ testDetails.id }}</p>
          <p><strong>Title:</strong> {{ testDetails.title }}</p>
          <p><strong>User Name:</strong> {{ testDetails.user_name }}</p>
          <p><strong>State:</strong> {{ testDetails.test_state }}</p>
        </CCardBody>
        <CCardBody v-else>
          <div class="text-center">Loading test details...</div>
        </CCardBody>
      </CCard>

      <CCard class="mb-4">
        <CCardHeader>Questions and Answers</CCardHeader>
        <CCardBody>
          <CTable striped hover v-if="questions.length">
            <CTableHead>
              <CTableRow>
                <CTableHeaderCell>#</CTableHeaderCell>
                <CTableHeaderCell>Question</CTableHeaderCell>
                <CTableHeaderCell>Answer</CTableHeaderCell>
              </CTableRow>
            </CTableHead>
            <CTableBody>
              <CTableRow v-for="(question, index) in questions" :key="question.id">
                <CTableDataCell>{{ index + 1 }}</CTableDataCell>
                <CTableDataCell>{{ question.title }}</CTableDataCell>
                <CTableDataCell>{{ question.option_answer || 'No answer provided' }}</CTableDataCell>
              </CTableRow>
            </CTableBody>
          </CTable>
          <div v-else class="text-center">No questions found.</div>
        </CCardBody>
      </CCard>

      <CCard>
        <CCardHeader>Test Result</CCardHeader>
        <CCardBody>
          <p><strong>Score:</strong> {{ testDetails.security }}</p>
          <p><strong>Feedback:</strong> Coming soon...</p>
        </CCardBody>
      </CCard>
    </CContainer>
  </div>
</template>

<script>
import { useRoute } from 'vue-router';
import { onMounted } from 'vue';
import { useTestsStore } from '@/stores/tests';

export default {
  name: 'TestDetails',
  setup() {
    const route = useRoute();
    const testsStore = useTestsStore();

    const testId = route.params.testId;

    onMounted(async () => {
      await testsStore.fetchTestDetails(testId);
      await console.log()
    });

    return {
      testDetails: testsStore.testDetails,
      questions: testsStore.questions,
      loading: testsStore.loading,
      errorMessage: testsStore.errorMessage,
      successMessage: testsStore.successMessage,
    };
  },
};
</script>

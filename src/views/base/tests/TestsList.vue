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
            <CButton color="danger" size="sm" class="ms-2" @click="deleteTest(test.id)">
              Delete
            </CButton>
          </CTableDataCell>
        </CTableRow>
      </CTableBody>
    </CTable>
  </div>
</template>

<script>
</script>

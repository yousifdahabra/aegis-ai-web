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
    </CTable>
  </div>
</template>

<script>
</script>

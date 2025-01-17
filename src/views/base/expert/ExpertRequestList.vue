<template>
  <div>
    <h1>Expert Request List</h1>

    <CTable striped hover v-if="!loading && expertRequests.length">
      <CTableHead>
        <CTableRow>
          <CTableHeaderCell>User Name</CTableHeaderCell>
          <CTableHeaderCell>Email</CTableHeaderCell>
          <CTableHeaderCell>Extra Information</CTableHeaderCell>
          <CTableHeaderCell>Files</CTableHeaderCell>
        </CTableRow>
      </CTableHead>
    </CTable>

  </div>
</template>

<script>
</script>

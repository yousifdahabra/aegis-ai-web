<template>
  <div>
    <h1 class="mb-4">Test Details</h1>
    <CContainer>
      <!-- Test Overview -->
      <CCard class="mb-4">
        <CCardHeader>Test Overview</CCardHeader>
        <CCardBody v-if="testDetails">
          <p><strong>Test ID:</strong> {{ testDetails.id }}</p>
          <p><strong>Title:</strong> {{ testDetails.title }}</p>
          <p><strong>Security:</strong> {{ testDetails.security }}</p>
          <p><strong>User Name:</strong> {{ testDetails.user_name }}</p>
          <p><strong>State:</strong> {{ testDetails.test_state }}</p>
        </CCardBody>
        <CCardBody v-else>
          <div class="text-center">Loading test details...</div>
        </CCardBody>
      </CCard>



    </CContainer>
  </div>
</template>

<script>
</script>

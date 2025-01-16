<template>
  <div>
    <h1>Users List</h1>
    <CTable striped hover>
      <CTableHead>
        <CTableRow>
          <CTableHeaderCell scope="col">Name</CTableHeaderCell>
          <CTableHeaderCell scope="col">Email</CTableHeaderCell>
          <CTableHeaderCell scope="col">Total Tests</CTableHeaderCell>
          <CTableHeaderCell scope="col">Actions</CTableHeaderCell>
        </CTableRow>
      </CTableHead>
      <CTableBody>
        <CTableRow v-for="(user, index) in users" :key="index">
          <CTableDataCell>{{ user.name }}</CTableDataCell>
          <CTableDataCell>{{ user.email }}</CTableDataCell>
          <CTableDataCell>{{ user.totalTests }}</CTableDataCell>
          <CTableDataCell>
            <CButton color="info" size="sm" @click="editUser(user.id)">
              Edit
            </CButton>
            <CButton color="danger" size="sm" class="ms-2" @click="blockUser(user.id)">
              Block
            </CButton>
            <CButton color="success" size="sm" class="ms-2" @click="viewTestList(user.id)">
              View Test List
            </CButton>
          </CTableDataCell>
        </CTableRow>
      </CTableBody>
    </CTable>
  </div>
</template>

<script>
export default {
  data() {
    return {
      users: [
        { id: 1, name: 'John Doe', email: 'john@example.com', totalTests: 5 },
        { id: 2, name: 'Jane Smith', email: 'jane@example.com', totalTests: 3 },
      ],
    };
  },
  methods: {
    editUser(id) {
      console.log(`Edit user with ID: ${id}`);
    },
    blockUser(id) {
      console.log(`Block user with ID: ${id}`);
    },
    viewTestList(id) {
      console.log(`View test list for user ID: ${id}`);
    },
  },
};
</script>

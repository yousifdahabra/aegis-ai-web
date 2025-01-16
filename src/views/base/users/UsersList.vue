<template>
  <div>
    <h1>Users List</h1>
    <div v-if="errorMessage" class="text-danger mb-3">{{ errorMessage }}</div>
    <div v-if="loading" class="text-center mb-3">Loading...</div>
    <CTable striped hover v-if="!loading && users.length">
      <CTableHead>
        <CTableRow>
          <CTableHeaderCell>Name</CTableHeaderCell>
          <CTableHeaderCell>Email</CTableHeaderCell>
          <CTableHeaderCell>Role</CTableHeaderCell>
          <CTableHeaderCell>Actions</CTableHeaderCell>
        </CTableRow>
      </CTableHead>
      <CTableBody>
        <CTableRow v-for="user in users" :key="user.id">
          <CTableDataCell>{{ user.name }}</CTableDataCell>
          <CTableDataCell>{{ user.email }}</CTableDataCell>
          <CTableDataCell>{{ user.user_role_id }}</CTableDataCell>
          <CTableDataCell>
            <CButton color="info" size="sm" @click="editUser(user.id)">Edit</CButton>
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
    <div v-else-if="!loading && !users.length" class="text-center">
      No users found.
    </div>
  </div>
</template>

<script>
import { useUsersStore } from '@/stores/users';
import { onMounted } from 'vue';

export default {
  setup() {
    const usersStore = useUsersStore();

    onMounted(async () => {
      await usersStore.fetchUsers();
      await console.log(usersStore.users)
    });

    const editUser = (id) => {
      console.log(`Edit user with ID: ${id}`);
    };

    const blockUser = async (id) => {
      const result = await usersStore.blockUser(id);
      if (!result.success) {
        alert(result.message);
      }
    };

    const viewTestList = (id) => {
      console.log(`View test list for user ID: ${id}`);
    };

    return {
      users: usersStore.users,
      errorMessage: usersStore.errorMessage,
      loading: usersStore.loading,
      editUser,
      blockUser,
      viewTestList,
    };
  },
};
</script>

<template>
  <div>
    <h1>Users List</h1>
    <div v-if="errorMessage" class="text-danger mb-3">{{ errorMessage }}</div>
    <div v-if="successMessage" class="text-success mb-3">{{ successMessage }}</div>
    <div v-if="loading" class="text-center mb-3">Loading...</div>
    <CTable striped hover v-if="!loading && users.length">
      <CTableHead>
        <CTableRow>
          <CTableHeaderCell>Name</CTableHeaderCell>
          <CTableHeaderCell>Email</CTableHeaderCell>
          <CTableHeaderCell>Role</CTableHeaderCell>
          <CTableHeaderCell>States</CTableHeaderCell>
          <CTableHeaderCell>Actions</CTableHeaderCell>
        </CTableRow>
      </CTableHead>
      <CTableBody>
        <CTableRow v-for="user in users" :key="user.id">
          <CTableDataCell>{{ user.name }}</CTableDataCell>
          <CTableDataCell>{{ user.email }}</CTableDataCell>
          <CTableDataCell>{{ user.user_role_id }}</CTableDataCell>
          <CTableDataCell>{{ user.blocked ? 'Block' : 'Active' }}</CTableDataCell>
          <CTableDataCell>
            <CButton color="info" size="sm" @click="openEditModal(user)">Edit</CButton>
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

    <!-- Use the new EditUserModal component -->
    <EditUserModal
      :visible="editModalVisible"
      :user="editedUser"
      @update="saveUserChanges"
      @close="closeEditModal"
    />
  </div>
</template>

<script>
import { useUsersStore } from '@/stores/users';
import { ref, onMounted } from 'vue';
import EditUserModal from './EditUserModal.vue';

export default {
  components: { EditUserModal },
  setup() {
    const usersStore = useUsersStore();

    const editModalVisible = ref(false);
    const editedUser = ref({});

    const successMessage = ref(null);
    const errorMessage = ref(null);

    const openEditModal = (user) => {
      editedUser.value = { ...user, password: '' };
      editModalVisible.value = true;
    };

    const closeEditModal = () => {
      editModalVisible.value = false;
    };

    const saveUserChanges = async (updatedUser) => {
      const result = await usersStore.editUser(updatedUser.id, {
        name: updatedUser.name,
        email: updatedUser.email,
        password: updatedUser.password,
      });

      if (result.success) {
        successMessage.value = 'User updated successfully!';
        errorMessage.value = null;
        editModalVisible.value = false;
        await usersStore.fetchUsers();
      } else {
        errorMessage.value = result.message;
        successMessage.value = null;
      }
    };

    const blockUser = async (id) => {
      const result = await usersStore.blockUser(id);
      if (result.success) {
        successMessage.value = 'User blocked successfully!';
        errorMessage.value = null;
      } else {
        errorMessage.value = result.message;
        successMessage.value = null;
      }
    };

    const viewTestList = (id) => {
      console.log(`View test list for user ID: ${id}`);
    };

    onMounted(async () => {
      await usersStore.fetchUsers();
    });

    return {
      users: usersStore.users,
      errorMessage,
      successMessage,
      loading: usersStore.loading,
      editModalVisible,
      editedUser,
      openEditModal,
      closeEditModal,
      saveUserChanges,
      blockUser,
      viewTestList,
    };
  },
};
</script>

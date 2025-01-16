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
          <CTableHeaderCell>Actions</CTableHeaderCell>
        </CTableRow>
      </CTableHead>
      <CTableBody>
        <CTableRow v-for="user in users" :key="user.id">
          <CTableDataCell>{{ user.name }}</CTableDataCell>
          <CTableDataCell>{{ user.email }}</CTableDataCell>
          <CTableDataCell>{{ user.user_role_id }}</CTableDataCell>
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

    <!-- Edit User Modal -->
    <CModal :visible="editModalVisible" @close="closeEditModal">
      <CModalHeader>Edit User</CModalHeader>
      <CModalBody>
        <div v-if="formErrorMessage" class="text-danger mb-3">{{ formErrorMessage }}</div>
        <div v-if="formSuccessMessage" class="text-success mb-3">{{ formSuccessMessage }}</div>
        <CForm @submit.prevent="saveUserChanges">
          <CFormInput
            v-model="editedUser.name"
            label="Name"
            placeholder="Enter user name"
            class="mb-3"
            required
          />
          <CFormInput
            v-model="editedUser.email"
            label="Email"
            type="email"
            placeholder="Enter user email"
            class="mb-3"
            required
          />
          <CFormInput
            v-model="editedUser.password"
            label="Password"
            type="password"
            placeholder="Enter user password"
            class="mb-3"
          />
          <CButton color="primary" type="submit">Save Changes</CButton>
        </CForm>
      </CModalBody>
    </CModal>
  </div>
</template>

<script>
import { useUsersStore } from '@/stores/users';
import { reactive, ref, onMounted } from 'vue';

export default {
  setup() {
    const usersStore = useUsersStore();

    const editModalVisible = ref(false);
    const editedUser = reactive({
      id: null,
      name: '',
      email: '',
      password: '',
    });

    const successMessage = ref(null);
    const errorMessage = ref(null);
    const formSuccessMessage = ref(null);
    const formErrorMessage = ref(null);

    const openEditModal = (user) => {
      editedUser.id = user.id;
      editedUser.name = user.name;
      editedUser.email = user.email;
      editedUser.password = '';
      formSuccessMessage.value = null;
      formErrorMessage.value = null;
      editModalVisible.value = true;
    };

    const closeEditModal = () => {
      editModalVisible.value = false;
      formSuccessMessage.value = null;
      formErrorMessage.value = null;
    };

    const saveUserChanges = async () => {
      const result = await usersStore.editUser(editedUser.id, {
        name: editedUser.name,
        email: editedUser.email,
        password: editedUser.password,
      });

      if (result.success) {
        formSuccessMessage.value = 'User updated successfully!';
        formErrorMessage.value = null;

        setTimeout(() => {
          closeEditModal();
        }, 1500);
      } else {
        formErrorMessage.value = result.message;
        formSuccessMessage.value = null;
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
      formSuccessMessage,
      formErrorMessage,
      openEditModal,
      closeEditModal,
      saveUserChanges,
      blockUser,
      viewTestList,
    };
  },
};
</script>

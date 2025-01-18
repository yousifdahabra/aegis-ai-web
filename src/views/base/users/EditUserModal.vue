<template>
  <CModal :visible="visible" @close="close">
    <CModalHeader>Edit User</CModalHeader>
    <CModalBody>
      <div v-if="formErrorMessage">
        <CAlert color="danger" class="mb-3">{{ formErrorMessage }}</CAlert>
      </div>
      <div v-if="formSuccessMessage">
        <CAlert color="success" class="mb-3">{{ formSuccessMessage }}</CAlert>
      </div>
      <CForm @submit.prevent="saveChanges">
        <CFormInput
          v-model="localUser.name"
          label="Name"
          placeholder="Enter user name"
          class="mb-3"
          required
        />
        <CFormInput
          v-model="localUser.email"
          label="Email"
          type="email"
          placeholder="Enter user email"
          class="mb-3"
          required
        />
        <CFormInput
          v-model="localUser.password"
          label="Password"
          type="password"
          placeholder="Enter user password"
          class="mb-3"
        />
        <CButton color="primary" type="submit">Save Changes</CButton>
      </CForm>
    </CModalBody>
  </CModal>
</template>

<script>
import { reactive, ref, watch } from 'vue';
import { useUsersStore } from '@/stores/users';

export default {
  props: {
    visible: {
      type: Boolean,
      required: true,
    },
    user: {
      type: Object,
      required: true,
    },
  },
  emits: ['close', 'refresh'],
  setup(props, { emit }) {
    const usersStore = useUsersStore();

    const localUser = reactive({
      id: null,
      name: '',
      email: '',
      password: '',
    });

    const formSuccessMessage = ref(null);
    const formErrorMessage = ref(null);

    watch(
      () => props.user,
      (newUser) => {
        localUser.id = newUser.id;
        localUser.name = newUser.name;
        localUser.email = newUser.email;
        localUser.password = '';
      },
      { immediate: true }
    );

    const saveChanges = async () => {
      const result = await usersStore.editUser(localUser.id, {
        name: localUser.name,
        email: localUser.email,
        password: localUser.password?? '',
      });

      if (result.success) {
        formSuccessMessage.value = 'User updated successfully!';
        formErrorMessage.value = null;

        emit('refresh');

        setTimeout(() => {
          emit('close');
        }, 1500);
      } else {
        formErrorMessage.value = result.message || 'Failed to update user.';
        formSuccessMessage.value = null;
      }
    };

    const close = () => {
      emit('close');
    };

    return {
      localUser,
      formSuccessMessage,
      formErrorMessage,
      saveChanges,
      close,
    };
  },
};
</script>

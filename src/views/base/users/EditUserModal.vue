<template>
  <CModal :visible="visible" @close="close">
    <CModalHeader>Edit User</CModalHeader>
    <CModalBody>
      <div v-if="formErrorMessage" class="text-danger mb-3">{{ formErrorMessage }}</div>
      <div v-if="formSuccessMessage" class="text-success mb-3">{{ formSuccessMessage }}</div>
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
import { ref, watch, reactive } from 'vue';

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
  emits: ['update', 'close'],
  setup(props, { emit }) {
    const formSuccessMessage = ref(null);
    const formErrorMessage = ref(null);

    const localUser = reactive({
      id: null,
      name: '',
      email: '',
      password: '',
    });

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

      const result = await Promise.resolve({
        success: true,
      });

      if (result.success) {
        formSuccessMessage.value = 'User updated successfully!';
        formErrorMessage.value = null;

        setTimeout(() => {
          emit('update', { ...localUser });
          emit('close');
        }, 1500);
      } else {
        formErrorMessage.value = 'Failed to update user.';
        formSuccessMessage.value = null;
      }
    };

    const close = () => {
      emit('close');
    };

    return {
      localUser,
      saveChanges,
      close,
      formSuccessMessage,
      formErrorMessage,
    };
  },
};
</script>

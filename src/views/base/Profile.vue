<template>
  <div class="profile">
    <h1>Edit Profile</h1>
    <div v-if="formErrorMessage" class="text-danger mb-3">{{ formErrorMessage }}</div>
    <div v-if="formSuccessMessage" class="text-success mb-3">{{ formSuccessMessage }}</div>
    <CForm @submit.prevent="saveChanges">
      <CFormInput
        v-model="localUser.name"
        label="Name"
        placeholder="Enter your name"
        class="mb-3"
        required
      />
      <CFormInput
        v-model="localUser.email"
        label="Email"
        type="email"
        placeholder="Enter your email"
        class="mb-3"
        required
      />
      <CFormInput
        v-model="localUser.password"
        label="Password"
        type="password"
        placeholder="Enter a new password (optional)"
        class="mb-3"
      />
      <CButton color="primary" type="submit">Save Changes</CButton>
    </CForm>
  </div>
</template>

<script>
import { reactive, ref, onMounted } from 'vue';
import { useUsersStore } from '@/stores/users';

export default {
  setup() {
    const usersStore = useUsersStore();

    const localUser = reactive({
      id: null,
      name: '',
      email: '',
      password: '',
    });

    const formSuccessMessage = ref(null);
    const formErrorMessage = ref(null);

    onMounted(() => {
      const storedUser = (localStorage.getItem('user'));
      if (storedUser) {
        const user = JSON.parse(storedUser);
        localUser.id = user.id;
        localUser.name = user.name;
        localUser.email = user.email;
      } else {
        formErrorMessage.value = 'Unable to load user data.';
      }
    });

    const saveChanges = async () => {
      const result = await usersStore.editUser(localUser.id, {
        name: localUser.name,
        email: localUser.email,
        password: localUser.password || '',
      });

      if (result.success) {
        formSuccessMessage.value = 'Profile updated successfully!';
        formErrorMessage.value = null;

        localStorage.setItem(
          'user',
          JSON.stringify({
            id: localUser.id,
            name: localUser.name,
            email: localUser.email,
          })
        );
      } else {
        formErrorMessage.value = result.message || 'Failed to update profile.';
        formSuccessMessage.value = null;
      }
    };

    return {
      localUser,
      formSuccessMessage,
      formErrorMessage,
      saveChanges,
    };
  },
};
</script>

<style scoped>
.profile {
  max-width: 600px;
  margin: 20px auto;
}
</style>

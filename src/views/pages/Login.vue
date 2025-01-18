<template>
  <div class="wrapper d-flex min-vh-100">
    <CContainer class="d-flex justify-content-center align-items-center">
      <CRow class="login-container">
        <CCol md="6" class="d-flex align-items-center justify-content-center">
          <CCard class="p-4 w-100">
            <CCardBody>
              <CForm @submit.prevent="handleLogin">
                <h1 class="main-title mb-3">Welcome Back!</h1>
                <p class="sub-title mb-4">Enter your credentials to log in to your account</p>

              </CForm>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </CContainer>
  </div>
</template>

<script>
import { useAuthStore } from '@/stores/auth';

export default {
  data() {
    return {
      email: '',
      password: '',
      errorMessage: null,
    };
  },
  methods: {
    async handleLogin() {
      const authStore = useAuthStore();
      const credentials = { email: this.email, password: this.password };

      const response = await authStore.login(credentials);

      if (response) {
        const role = localStorage.getItem('role');
        if (role === 'user') {
          this.$router.push('/home');
        } else {
          this.$router.push('/base/users/list');
        }
      } else {
        this.errorMessage = response.message || 'Login failed.';
      }
    },
  },
};
</script>


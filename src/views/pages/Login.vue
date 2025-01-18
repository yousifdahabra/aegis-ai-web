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
                <CInputGroup class="mb-3">
                  <CInputGroupText>
                    <CIcon icon="cil-user" />
                  </CInputGroupText>
                  <CFormInput
                    v-model="email"
                    placeholder="Email Address"
                    type="email"
                    autocomplete="email"
                    required
                  />
                </CInputGroup>
                <CInputGroup class="mb-3">
                  <CInputGroupText>
                    <CIcon icon="cil-lock-locked" />
                  </CInputGroupText>
                  <CFormInput
                    v-model="password"
                    type="password"
                    placeholder="Password"
                    autocomplete="current-password"
                    required
                  />
                </CInputGroup>

              </CForm>
            </CCardBody>
          </CCard>
        </CCol>

        <CCol md="6" class="d-none d-md-flex align-items-center justify-content-center">
          <img
            src="https://cdn.mos.cms.futurecdn.net/SyDThccFHHMeSP2gbK8uHG-1024-80.jpg.webp"
            alt="Login Illustration"
            class="img-fluid login-image"
          />
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


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
                <CButton color="primary" class="w-100 mb-3" type="submit">
                  Login
                </CButton>
                <p class="text-center">
                  Don't have an account?
                  <router-link to="/register" class="sign-up-link">Sign Up</router-link>
                </p>
                <div v-if="errorMessage" class="text-danger mt-3 text-center">
                  {{ errorMessage }}
                </div>
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

<style scoped>
.wrapper {
  background-color: #f8f9fa;
}

.login-container {
  width: 100%;
  max-width: 1200px;
}

.main-title {
  font-size: 24px;
  font-weight: bold;
  color: #16354d;
}

.sub-title {
  font-size: 16px;
  color: #71727a;
}

.sign-up-link {
  color: #289dd2;
  text-decoration: none;
}

.sign-up-link:hover {
  text-decoration: underline;
}

.login-image {
  height: 95vh;
  width: 100%;
  object-fit: cover;
}
</style>

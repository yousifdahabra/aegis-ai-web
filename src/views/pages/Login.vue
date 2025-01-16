<template>
  <div class="wrapper min-vh-100 d-flex flex-row align-items-center">
    <CContainer>
      <CRow class="justify-content-center">
        <CCol :md="8">
          <CCardGroup>
            <CCard class="p-4">
              <CCardBody>
                <CForm @submit.prevent="handleLogin">
                  <h1>Login</h1>
                  <p class="text-body-secondary">Sign In to your account</p>
                  <CInputGroup class="mb-3">
                    <CInputGroupText>
                      <CIcon icon="cil-user" />
                    </CInputGroupText>
                    <CFormInput
                      v-model="email"
                      placeholder="email"
                      type="email"

                      autocomplete="email"
                    />
                  </CInputGroup>
                  <CInputGroup class="mb-4">
                    <CInputGroupText>
                      <CIcon icon="cil-lock-locked" />
                    </CInputGroupText>
                    <CFormInput
                      v-model="password"
                      type="password"
                      placeholder="Password"
                      autocomplete="current-password"
                    />
                  </CInputGroup>
                  <CRow>
                    <CCol :xs="6">
                      <CButton color="primary" class="px-4" type="submit">
                        Login
                      </CButton>
                    </CCol>
                  </CRow>
                  <div v-if="errorMessage" class="text-danger mt-2">
                    {{ errorMessage }}
                  </div>
                </CForm>
              </CCardBody>
            </CCard>
          </CCardGroup>
        </CCol>
      </CRow>
    </CContainer>
  </div>
</template>

<script>
import { useAuthStore } from '@/stores/auth';
import { requestAPI } from '@/utlis/request';
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
        const response = await requestAPI({
          route: 'login',
          method: 'POST',
          body: {
            email: this.email,
            password: this.password,
          },
          header: 'application/json',
        });



    },
  },
};

 </script>

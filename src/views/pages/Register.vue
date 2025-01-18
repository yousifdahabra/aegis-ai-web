<template>
  <div class="wrapper d-flex min-vh-100">
    <CContainer class="d-flex justify-content-center align-items-center">
      <CRow class="signup-container">
        <!-- Left Side: Signup Form -->
        <CCol md="6" class="d-flex align-items-center justify-content-center">
          <CCard class="p-4 w-100">
            <CCardBody>
              <CForm @submit.prevent="handleSignup">
                <h1 class="main-title mb-3">Create an Account</h1>
                <p class="sub-title mb-4">Fill in your details to create a new account</p>
                <CInputGroup class="mb-3">
                  <CInputGroupText>
                    <CIcon :icon="icons.cilUser" />
                  </CInputGroupText>
                  <CFormInput
                    v-model="name"
                    placeholder="Full Name"
                    type="text"
                    required
                  />
                </CInputGroup>
                <CInputGroup class="mb-3">
                  <CInputGroupText>
                    <CIcon :icon="icons.cilEnvelopeClosed" />
                  </CInputGroupText>
                  <CFormInput
                    v-model="email"
                    placeholder="Email Address"
                    type="email"
                    required
                  />
                </CInputGroup>
                <CInputGroup class="mb-3">
                  <CInputGroupText>
                    <CIcon :icon="icons.cilPhone" />
                  </CInputGroupText>
                  <CFormInput
                    v-model="phone_number"
                    placeholder="Phone Number"
                    type="text"
                    required
                  />
                </CInputGroup>
                <CInputGroup class="mb-3">
                  <CInputGroupText>
                    <CIcon :icon="icons.cilExternalLink" />
                  </CInputGroupText>
                  <CFormInput
                    v-model="links"
                    placeholder="Links (Optional)"
                    type="text"
                  />
                </CInputGroup>
                <CInputGroup class="mb-3">
                  <CInputGroupText>
                    <CIcon :icon="icons.cilInfo" />
                  </CInputGroupText>
                  <CFormTextarea
                    v-model="extra_informations"
                    placeholder="Extra Information"
                    rows="3"
                  />
                </CInputGroup>
                <CInputGroup class="mb-3">
                  <CInputGroupText>
                    <CIcon :icon="icons.cilLockLocked" />
                  </CInputGroupText>
                  <CFormInput
                    v-model="password"
                    placeholder="Password"
                    type="password"
                    required
                  />
                </CInputGroup>
                <div class="mb-3">
                  <label class="form-label">Upload Documents</label>
                  <CFormInput
                    type="file"
                    multiple
                    @change="handleFileUpload"
                  />
                </div>
                <CButton color="primary" class="w-100 mb-3" type="submit">
                  Sign Up
                </CButton>
                <p class="text-center">
                  Already have an account? <a href="#" class="login-link">Login</a>
                </p>
                <div v-if="errorMessage" class="text-danger mt-3 text-center">
                  {{ errorMessage }}
                </div>
                <div v-if="successMessage" class="text-success mt-3 text-center">
                  {{ successMessage }}
                </div>
              </CForm>
            </CCardBody>
          </CCard>
        </CCol>
        <CCol md="6" class="d-none d-md-flex align-items-center justify-content-center">
          <img
            src="https://cdn.mos.cms.futurecdn.net/SyDThccFHHMeSP2gbK8uHG-1024-80.jpg.webp"
            alt="Signup Illustration"
            class="img-fluid signup-image"
          />
        </CCol>
      </CRow>
    </CContainer>
  </div>
</template>

<script>
import { ref } from "vue";
import { CIcon } from "@coreui/icons-vue";
import { cilUser, cilEnvelopeClosed, cilPhone, cilExternalLink, cilInfo, cilLockLocked } from "@coreui/icons";
import { useAuthStore } from "@/stores/auth";

export default {
  components: {
    CIcon,
  },
  setup() {
    const icons = { cilUser, cilEnvelopeClosed, cilPhone, cilExternalLink, cilInfo, cilLockLocked };
    const name = ref("");
    const email = ref("");
    const phone_number = ref("");
    const password = ref("");
    const links = ref("");
    const extra_informations = ref("");
    const documents = ref([]);
    const errorMessage = ref("");
    const successMessage = ref("");

    const handleFileUpload = (event) => {
      documents.value = Array.from(event.target.files);
    };

    const handleSignup = async () => {
      const authStore = useAuthStore();

      const formData = new FormData();

      formData.append("birth_year", '');
      formData.append("name", name.value);
      formData.append("email", email.value);
      formData.append("phone_number", phone_number.value);
      formData.append("password", password.value);
      formData.append("links", links.value);
      formData.append("extra_informations", extra_informations.value);
      documents.value.forEach((file) => formData.append("documents[]", file));

      const result = await authStore.register(formData);

      if (result.success) {
        successMessage.value = "Application created successfully!";
        errorMessage.value = null;
      } else {
        errorMessage.value = result.message || "Failed to register.";
        successMessage.value = null;
      }
    };

    return {
      name,
      email,
      phone_number,
      password,
      links,
      extra_informations,
      documents,
      errorMessage,
      successMessage,
      handleFileUpload,
      handleSignup,
      icons,
    };
  },
};
</script>

<style scoped>
.wrapper {
  background-color: #f8f9fa;
}

.signup-container {
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

.login-link {
  color: #289dd2;
  text-decoration: none;
}

.login-link:hover {
  text-decoration: underline;
}

.signup-image {
  height: 100vh;
  width: 100%;
  object-fit: cover;
}
</style>

<template>
  <div>
    <h1>Add Test</h1>
    <CAlert
      v-if="successMessage"
      color="success"
      dismissible
      @close="successMessage = null"
      class="mb-4"
    >
      {{ successMessage }}
    </CAlert>
    <CAlert
      v-if="errorMessage"
      color="danger"
      dismissible
      @close="errorMessage = null"
      class="mb-4"
    >
      {{ errorMessage }}
    </CAlert>

    <div class="mb-4">
      <CFormInput
        v-model="testTitle"
        label="Test Title"
        placeholder="Enter the test title"
        required
      />
    </div>
    <div v-for="(question, index) in questions" :key="index" class="mb-4">
      <h5>Question {{ index + 1 }}</h5>
      <CFormInput
        v-model="question.text"
        label="Question Text"
        placeholder="Enter question text"
        required
        class="mb-2"
      />
      <label>Question Type</label>
      <CFormSelect
        v-model="question.type"
        class="mb-2"
        @change="handleQuestionTypeChange(index)"
      >
        <option
          v-for="type in questionTypes"
          :key="type.value"
          :value="String(type.value)"
        >
          {{ type.text }}
        </option>
      </CFormSelect>
      <div v-if="question.type === '2' || question.type === '3'" class="mb-3">
        <h6>Options</h6>
        <div
          v-for="(option, optIndex) in question.options"
          :key="optIndex"
          class="d-flex align-items-center mb-2"
        >
          <CFormInput
            v-model="question.options[optIndex]"
            placeholder="Enter option"
            class="me-2"
            required
          />
          <CButton color="danger" size="sm" @click="removeOption(index, optIndex)">
            -
          </CButton>
        </div>
        <CButton color="primary" size="sm" class="mt-2" @click="addOption(index)">
          Add Option
        </CButton>
      </div>
      <CButton color="danger" size="sm" class="mt-2" @click="removeQuestion(index)">
        Remove Question
      </CButton>
      <hr />
    </div>
    <div class="d-flex justify-content-between align-items-center mt-4">
      <CButton color="success" size="sm" @click="addQuestion">Add Question</CButton>
      <CButton color="primary" size="sm" @click="submitTest">Submit Test</CButton>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  name: "AddTest",
  props: ["id"],
    mounted() {
  },

  setup() {
    const testTitle = ref("");
    const questions = ref([
      {
        text: "",
        type: "1",
        options: [],
      },
    ]);
    const questionTypes = [
      { value: 1, text: "Input" },
      { value: 2, text: "Radio" },
      { value: 3, text: "Checkbox" },
      { value: 6, text: "Voice" },
    ];
    const successMessage = ref(null);
    const errorMessage = ref(null);

    return {
      testTitle,
      questions,
      questionTypes,
      successMessage,
      errorMessage,
    };
  },
};
</script>

<style scoped>
.d-flex {
  display: flex;
}
.justify-content-between {
  justify-content: space-between;
}
.align-items-center {
  align-items: center;
}
</style>

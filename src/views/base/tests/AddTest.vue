<template>
  <div>
    <h1>Add Test</h1>
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

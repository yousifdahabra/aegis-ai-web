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
      <CFormSelect
        v-model="question.type"
        label="Question Type"
        :options="questionTypes"
        required
        class="mb-2"
      />


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

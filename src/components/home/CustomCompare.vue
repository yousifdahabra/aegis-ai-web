<template>
  <section class="timeline-section">
    <div class="container">
      <h2 class="section-title">How the Test Works</h2>
      <div class="timeline">
        <div class="timeline-item">
          <div class="timeline-content response">
            <i class="fa fa-user-edit icon"></i>
            <p class="timeline-text">
              <strong>User Start:</strong> Start Test.
            </p>
          </div>
        </div>

        <div class="timeline-item">
          <div class="timeline-content request">
            <i class="fa fa-comment-dots icon"></i>
            <p class="timeline-text">
              <strong>AI Ask:</strong> First question tailored to start your personalized journey.
            </p>
          </div>
        </div>

        <div class="timeline-item">
          <div class="timeline-content response">
            <i class="fa fa-user-edit icon"></i>
            <p class="timeline-text">
              <strong>User Answer:</strong> You answer the question.
            </p>
          </div>
        </div>

        <div class="timeline-item">
          <div class="timeline-content request">
            <i class="fa fa-sync-alt icon"></i>
            <p class="timeline-text">
              <strong>AI Ask:</strong> Next question based on your previous answer.
            </p>
          </div>
        </div>

        <div class="timeline-item">
          <div class="timeline-content response">
            <i class="fa fa-user-edit icon"></i>
            <p class="timeline-text">
              <strong>User Answer:</strong> You answer the next question.
            </p>
          </div>
        </div>

        <div class="timeline-item">
          <div class="timeline-content request">
            <i class="fa fa-chart-line icon"></i>
            <p class="timeline-text">
              <strong>AI Result:</strong> Test completed. Receive detailed analysis and feedback.
            </p>
          </div>
        </div>

        <div class="timeline-item">
          <div class="timeline-content response">
            <i class="fa fa-user-edit icon"></i>
            <p class="timeline-text">
              <strong>User:</strong> You will receive answers.
            </p>
          </div>
        </div>


      </div>
    </div>
  </section>
</template>



<script>
export default {
  name: "CustomCompare",
};
</script>
<style scoped>
/* Timeline Section */
.timeline-section {
  padding: 60px 20px;
  background: linear-gradient(135deg, #f4f9fc, #e6f7ff);
}

.section-title {
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 40px;
  color: #16354d;
}

</style>

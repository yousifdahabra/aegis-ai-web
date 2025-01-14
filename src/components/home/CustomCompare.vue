<template>

<section class="timeline-section">
    <div class="container">
      <h2 class="section-title">How the Static Test Works</h2>
      <div class="timeline">
        <div class="timeline-item">
          <div class="timeline-content request">
            <i class="fa fa-list-alt icon"></i>
            <p class="timeline-text">
              <strong>User:</strong> Start the test.
            </p>
          </div>
        </div>
                <div class="timeline-item">
          <div class="timeline-content response">
            <i class="fa fa-user-edit icon"></i>
            <p class="timeline-text">
              <strong>Receive</strong> user receive test with all question.
            </p>
          </div>
        </div>

        <div class="timeline-item">
          <div class="timeline-content request">
            <i class="fa fa-user-edit icon"></i>
            <p class="timeline-text">
              <strong>Receive</strong> Answer the first question.
            </p>
          </div>
        </div>


        <div class="timeline-item">
          <div class="timeline-content request">
            <i class="fa fa-arrow-right icon"></i>
            <p class="timeline-text">
              <strong>Step 3:</strong> Proceed to the next question in a fixed order.
            </p>
          </div>
        </div>

        <div class="timeline-item">
          <div class="timeline-content request">
            <i class="fa fa-user-edit icon"></i>
            <p class="timeline-text">
              <strong>Step 4:</strong> Continue answering questions as they appear.
            </p>
          </div>
        </div>

        <div class="timeline-item">
          <div class="timeline-content request">
            <i class="fa fa-chart-line icon"></i>
            <p class="timeline-text">
              <strong>Step 5:</strong> Complete the test and receive results.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="timeline-section">

    <div class="container">
      <h2 class="section-title">How the dynamic Test Works</h2>
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

.timeline {
  position: relative;
  margin: 0 auto;
  padding: 20px 0;
  max-width: 800px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.timeline::before {
  content: "";
  position: absolute;
  top: 0;
  left: 50%;
  width: 4px;
  height: 100%;
  background: #289dd2;
  transform: translateX(-50%);
}

.timeline-item {
  position: relative;
  width: 100%;
  margin: 20px 0;
}

.timeline-content {
  position: relative;
  width: 45%;
  background: #ffffff;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 20px;
  text-align: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.timeline-content.request {
  margin-left: 55%;
}

.timeline-content.response {
  margin-right: 55%;
}

.timeline-item::after {
  content: "";
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: #289dd2;
  width: 12px;
  height: 12px;
  border-radius: 50%;
}

.icon {
  font-size: 2rem;
  color: #289dd2;
  margin-bottom: 10px;
}

.timeline-text {
  font-size: 1rem;
  color: #555;
}

@media (max-width: 768px) {
  .timeline-content {
    width: 80%;
    margin: 10px auto;
  }

  .timeline-content.request,
  .timeline-content.response {
    margin-left: auto;
    margin-right: auto;
  }

  .timeline::before {
    left: 20px;
  }
}
</style>

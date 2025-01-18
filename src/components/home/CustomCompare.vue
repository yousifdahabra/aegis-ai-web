<template>
  <section class="compare-tests-section">
    <div class="container">
      <h2 class="section-title">Why Choose Us</h2>
      <div class="comparison-grid">
        <!-- Normal Test -->
        <div class="test-card static-test">
          <div class="test-header">
            <h3>Normal Test </h3>
          </div>
          <div class="test-content">
            <div class="test-feature">
              <i class="fa fa-list-alt icon"></i>
              <p><strong>All Questions Upfront:</strong> Fixed set of questions delivered at once.</p>
            </div>
            <div class="test-feature">
              <i class="fa fa-arrow-right icon"></i>
              <p><strong>Fixed Sequence:</strong> Answer questions in a strict order.</p>
            </div>
            <div class="test-feature">
              <i class="fa fa-user-edit icon"></i>
              <p><strong>Generic Feedback:</strong> Limited insights based on static results.</p>
            </div>
          </div>
        </div>

        <!-- Our Test -->
        <div class="test-card dynamic-test">
          <div class="test-header">
            <h3>Our Test</h3>
          </div>
          <div class="test-content">
            <div class="test-feature">
              <i class="fa fa-comment-dots icon"></i>
              <p><strong>Adaptive Questions:</strong> Tailored questions evolve based on your responses.</p>
            </div>
            <div class="test-feature">
              <i class="fa fa-sync-alt icon"></i>
              <p><strong>Personalized Flow:</strong> Questions adapt to your needs and answers.</p>
            </div>
            <div class="test-feature">
              <i class="fa fa-chart-line icon"></i>
              <p><strong>Actionable Insights:</strong> Detailed, personalized feedback and recommendations.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "CompareTests",
};
</script>

<style  >

.compare-tests-section {
  padding: 80px 20px;
  background: linear-gradient(135deg, #f4f9fc, #e6f7ff);
  text-align: center;
}

.section-title {
  font-size: 2.8rem;
  margin-bottom: 50px;
  color: var(--main-title-color);
  font-weight: bold;
}

.comparison-grid {
  display: flex;
  justify-content: space-between;
  gap: 30px;
}

.test-card {
  flex: 1;
  max-width: 50%;
  background: #ffffff;
  border-radius: 16px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.test-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
}

.test-header {
  background: var(--button-background-color);
  padding: 20px;
  text-align: center;
  color: var(--button-text-color);
  font-size: 1.8rem;
  font-weight: bold;
  font-family: var(--cui-btn-font-family);
}

.static-test .test-header {
  background: rgba(220, 53, 69, 0.9); /* Static Test Red */
}

.dynamic-test .test-header {
  background: var(--button-background-color); /* Dynamic Test Blue */
}

.test-content {
  padding: 30px 20px;
}

.test-feature {
  display: flex;
  align-items: flex-start;
  gap: 15px;
  margin-bottom: 20px;
}

.test-feature p {
  font-size: 1rem;
  color: var(--sub-title-color);
  line-height: 1.6;
}

.icon {
  font-size: 2rem;
  color: var(--link-text-color);
  flex-shrink: 0;
}

@media (max-width: 768px) {
  .comparison-grid {
    flex-direction: column;
    gap: 20px;
  }

  .test-card {
    max-width: 100%;
  }
}
</style>

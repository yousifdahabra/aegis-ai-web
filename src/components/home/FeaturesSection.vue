<template>

    <!-- Features Section -->
    <section class="features">
  <div class="container">
    <h2 class="section-title ">Why Choose Our App?</h2>
    <div class="feature reverse ">
      <div class="feature-image-container">
        <img
          src="@/assets/images/home/voice.webp"
          alt="Dynamic Questioning"
          class="feature-image"
        />
      </div>
      <div class="feature-text">
        <h3> AI Voice Interactions</h3>
        <p>
          AI will prompt you to respond to some questions using your voice to facilitate interaction with the user.</p>
        <!-- <div><button class="btn-download">More Details</button></div> -->
      </div>
    </div>

    <div class="feature ">
      <div class="feature-image-container">
        <img
          src="@/assets/images/home/Analysis.webp"
          alt="AI Analysis"
          class="feature-image"
        />
      </div>
      <div class="feature-text">
        <h3>AI-Powered Analysis</h3>
        <p>
          Get real-time feedback with our AI-driven assessments tailored to
          improve your digital safety.
        </p>
        <!-- <div><button class="btn-download">More Details</button></div> -->

      </div>
    </div>
    <div class="feature reverse ">
      <div class="feature-image-container">
        <img
          src="@/assets/images/home/qustion.webp"
          alt="Dynamic Questioning"
          class="feature-image"
        />
      </div>
      <div class="feature-text">
        <h3>Dynamic Questions</h3>
        <p>
          Our app evolves with your responses to create personalized learning
          experiences with diffrent types of questions.
        </p>
        <!-- <div><button class="btn-download">More Details</button></div> -->
      </div>
    </div>

  </div>
</section>

</template>

<script>
export default {
  name: "FeaturesSection",
};
</script>
<style>
/* Features */
.features {
  padding: 60px 20px;
  background: #f9f9f9;
}

.feature {
  display: flex;
  align-items: center;
  gap: 20px;
  margin-bottom: 40px;
  flex-wrap: wrap;
}

.feature.reverse {
  flex-direction: row-reverse;
}

.feature-image-container {
  flex: 1;
  display: flex;
  justify-content: center;
}

.feature-image {
  max-width: 100%;
  border-radius: 8px;
}

.feature-text {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

@media (max-width: 768px) {
  .feature {
    flex-direction: column;
  }

  .feature.reverse {
    flex-direction: column;
  }
}


</style>

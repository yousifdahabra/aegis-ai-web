<template>
  <section class="features-section">
    <div class="container">
      <h2 class="section-title">Explore Our Features</h2>
      <div class="cards-grid">
        <div v-for="(feature, index) in features" :key="index" class="feature-card">
          <img :src="feature.image" :alt="feature.alt" class="feature-image" />
          <h3 class="feature-title">{{ feature.title }}</h3>
          <p class="feature-description">{{ feature.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import voiceImage from "@/assets/images/home/voice.webp";
import analysisImage from "@/assets/images/home/Analysis.webp";
import questionImage from "@/assets/images/home/qustion.webp";

export default {
  name: "FeaturesSection",
  setup() {
    const features = [
      {
        image: voiceImage,
        alt: "AI Voice Interactions",
        title: "AI Voice Interactions",
        description: "AI will prompt you to respond to some questions using your voice to facilitate interaction with the user.",
      },
      {
        image: analysisImage,
        alt: "AI-Powered Analysis",
        title: "AI-Powered Analysis",
        description: "Get real-time feedback with our AI-driven assessments tailored to improve your digital safety.",
      },
      {
        image: questionImage,
        alt: "Dynamic Questioning",
        title: "Dynamic Questions",
        description: "Our app evolves with your responses to create personalized learning experiences with different types of questions.",
      },
    ];

    return { features };
  },
};
</script>

<style scoped>
.features-section {
  padding: 60px 20px;
  background: linear-gradient(135deg, #f4f9fc, #e6f7ff);
  text-align: center;
}

.section-title {
  font-size: 2.5rem;
  color: var(--main-title-color);
  margin-bottom: 40px;
}

.cards-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
}

.feature-card {
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 20px;
  transition: transform 0.3s, box-shadow 0.3s;
  text-align: left;
}

.feature-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
}

.feature-image {
  width: 100%;
  border-radius: 10px;
  margin-bottom: 20px;
}

.feature-title {
  font-size: 1.5rem;
  color: var(--main-title-color);
  margin-bottom: 10px;
}

.feature-description {
  font-size: 1rem;
  color: var(--sub-intro-color);
  line-height: 1.6;
}
</style>

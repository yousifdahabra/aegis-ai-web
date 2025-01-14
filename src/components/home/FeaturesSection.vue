<template>
  <section class="features">
    <div class="container">
      <h2 class="section-title">Why Choose Our App?</h2>

      <div
        v-for="(feature, index) in features"
        :key="index"
        class="feature"
        :class="{ reverse: index % 2 !== 0, 'is-active': index === activeFeatureIndex }"
      >
        <div class="feature-image-container">
          <img :src="feature.image" :alt="feature.alt" class="feature-image" />
        </div>
        <div class="feature-text">
          <h3>{{ feature.title }}</h3>
          <p>{{ feature.description }}</p>
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



    return {
      features,
      activeFeatureIndex,
    };
  },
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

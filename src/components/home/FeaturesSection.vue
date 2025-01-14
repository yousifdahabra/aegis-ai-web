<template>
  <section class="features-wrapper">
    <div class="parallax-bg"></div>
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
  </section>
</template>

<script>
import { ref, onMounted, onUnmounted } from "vue";
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

    const activeFeatureIndex = ref(0);

    const handleScroll = () => {
      const featuresSection = document.querySelector(".features");
      const { height } = featuresSection.getBoundingClientRect();
      const scrollPosition = window.scrollY - (featuresSection.offsetTop - window.innerHeight / 2);

      const featureHeight = height / features.length;

      const index = Math.min(
        Math.max(Math.floor(scrollPosition / featureHeight), 0),
        features.length - 1
      );

      activeFeatureIndex.value = index;
    };

    onMounted(() => {
      window.addEventListener("scroll", handleScroll);
    });

    onUnmounted(() => {
      window.removeEventListener("scroll", handleScroll);
    });

    return {
      features,
      activeFeatureIndex,
    };
  },
};
</script>
<style scoped>
/* Features Wrapper */
.features-wrapper {
  position: relative;
  overflow: hidden;
}

.parallax-bg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 150%;
  background-image: url("@/assets/images/home/features_background.webp");
  background-attachment: fixed;
  background-size: cover;
  background-position: center;
  z-index: -1;
}

/* Features */
.features {
  padding: 60px 20px;
  background: rgb(255 255 255 / 60%); /* Slight background overlay for readability */
  position: relative; /* Ensure content stays above the parallax background */
}

.feature {
  display: flex;
  align-items: center;
  gap: 20px;
  margin-bottom: 40px;
  flex-wrap: wrap;
  opacity: 0;
  visibility: hidden;
  transform: translateY(20px);
  transition: opacity 0.5s ease, transform 0.5s ease;
}

.feature.is-active {
  opacity: 1;
  visibility: visible;
  transform: translateY(0);
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

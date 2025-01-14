<template>
  <div class="home-page">
    <CustomHeader />
    <HeroSection />
    <FeaturesSection />
    <CustomCompare />
    <CustomFooter />
  </div>
</template>

<script>
import CustomHeader from "@/components/home/Header.vue";
import HeroSection from "@/components/home/HeroSection.vue";
import CustomFooter from "@/components/home/Footer.vue";
import FeaturesSection from "@/components/home/FeaturesSection.vue";
import CustomCompare from "@/components/home/CustomCompare.vue";

export default {
  name: "Home",
  components: {
    CustomHeader,
    HeroSection,
    CustomFooter,
    FeaturesSection,
    CustomCompare,
  },

  data() {
  },
  methods: {
  },
};
</script>

<style >
/* Button Styles */
.btn-download,
.btn-send {
  background-color: var(--button-background-color);
  color: #fff;
  padding: 10px 20px;
  border-radius: 5px;
  display: inline-flex;
  align-items: center;
  gap: 10px;
  border: none;
  cursor: pointer;
  font-size: 1rem;
  font-weight: 500;
  transition: transform 0.3s ease, background-color 0.3s ease;
}

.btn-download:hover,
.btn-send:hover {
  background-color: var(--hover-button-background-color);
  transform: scale(1.05);
}

</style>

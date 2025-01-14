<template>
  <div class="home-page">
    <CustomHeader />
    <HeroSection />
  </div>
</template>

<script>
import CustomHeader from "@/components/home/Header.vue";
import HeroSection from "@/components/home/HeroSection.vue";

export default {
  name: "Home",
  components: {
    CustomHeader,
    HeroSection,
  },

  data() {
  },
  methods: {
  },
};
</script>

<style >
</style>

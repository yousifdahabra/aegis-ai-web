<template>
    <!-- Hero Section -->
    <section class="hero">
      <div class="container text-center">
        <h1 class="hero-title animate-fade-in">Discover the Future of Security Test</h1>
        <h4 class="hero-subtitle animate-fade-in">
          Our AI-powered app test using dynamic Questions suit to your personality. Download
          now and experience cutting-edge security evaluations.
        </h4>
        <button class="btn-download">
          <img src="@/assets/images/home/google-play.png" alt="Google Play" class="icon" />
          Download on Google Play
        </button>
      </div>
    </section>
</template>

<script>
export default {
  name: "HeroSection",
};
</script>
<style>
/* Hero Section */
.hero {
  padding: 60px 20px;
  background: url('@/assets/images/home/hero.jpg') no-repeat center center;
  background-size: cover;
  color: #fff;
  text-align: center;
}

.hero-title {
  font-size: 3rem;
  margin-bottom: 20px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7);
}

.hero-subtitle {
  font-size: 1.5rem;
  margin-bottom: 30px;
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.7);
}


</style>

<template>
  <!-- Hero Section -->
  <section class="hero">
    <div class="container text-center">
      <h1 class="hero-title animate-fade-in">Discover the Future of Security Test</h1>
      <p class="hero-subtitle animate-fade-in">
        Our AI-powered app test using dynamic Questions suit to your personality. Download
        now and experience cutting-edge security evaluations.
      </p>
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
  padding: 100px 20px;
  background: url("@/assets/images/home/features_background.webp") no-repeat center center / cover;
  background-attachment: fixed;
  color: #fff;
  text-align: center;
  position: relative;
  overflow: hidden;
}

.hero-title {
  color: var(--main-title-color);
  font-size: 3rem;
  margin-bottom: 20px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7);
}

.hero-subtitle {
  font-size: 1.5rem;
  margin-bottom: 30px;
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.7);
}

.hero::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(139, 136, 136, 0.479);
  z-index: 1;
}

.container {
  position: relative;
  z-index: 2;
}

.btn-download {
  background-color: #ff6b6b;
  color: #fff;
  border: none;
  padding: 10px 20px;
  font-size: 1rem;
  font-weight: bold;
  border-radius: 5px;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  gap: 10px;
}

.btn-download .icon {
  height: 24px;
}

.btn-download:hover {
  background-color: #ff4c4c;
}
</style>

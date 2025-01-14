<template>
  <section class="features">
    <div class="container">
      <h2 class="section-title">Why Choose Our App?</h2>

      <div
        v-for="(feature, index) in features"
        :key="index"
      >
        <div class="feature-image-container">
          <img :src="feature.image" :alt="feature.alt" class="feature-image" />
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

<template>
  <!-- Navbar -->
  <header class="navbar">
    <div class="container navbar-container">
      <div class="logo-nav-container">
        <img src="https://placehold.co/150x50" alt="Logo" class="logo" />
        <nav class="nav-links"  >
          <a href="#" class="nav-item">Home</a>
          <a href="#" class="nav-item">About Us</a>
          <a href="#" class="nav-item">Contact Us</a>
          <a href="#" class="nav-item btn-expert-mobile">Be an Expert</a>
        </nav>
      </div>

      <a href="#" class="btn-expert">Be an Expert</a>

      <button class="burger-menu" >
        <span class="line"></span>
        <span class="line"></span>
        <span class="line"></span>
      </button>
    </div>
  </header>


</template>

<script>
export default {
  name: "CustomHeader",
  setup() { },
};
</script>

<style></style>

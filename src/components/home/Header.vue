<template>
  <!-- Navbar -->
  <header class="navbar">
    <div class="container navbar-container">
      <div class="logo-nav-container">
        <img src="https://placehold.co/150x50" alt="Logo" class="logo" />
        <nav class="nav-links" :class="{ 'show-menu': isMenuOpen }">
          <a href="#" class="nav-item">Home</a>
          <a href="#" class="nav-item">About Us</a>
          <a href="#" class="nav-item">Contact Us</a>
          <a href="#" class="nav-item btn-expert-mobile">Be an Expert</a>
        </nav>
      </div>
      <a href="#" class="btn-expert">Be an Expert</a>

      <button class="burger-menu" @click="toggleMenu">
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
  data() {
    return {
      isMenuOpen: false,
    };
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    },
  },
};
</script>

<style>
.navbar {
  background-color: #fff;
  padding: 15px 30px;
  border-bottom: 1px solid #e5e5e5;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo-nav-container {
  display: flex;
  align-items: center;
  gap: 20px;
}

.logo {
  height: 50px;
}

.nav-links {
  display: flex;
  gap: 20px;
}

.nav-links.show-menu {
  display: block;
  position: absolute;
  top: 70px;
  left: 0;
  width: 100%;
  background-color: #fff;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 15px 20px;
  border-radius: 5px;
  z-index: 10;

  text-align: center;
}
.nav-links.show-menu .nav-item {
  display: block;
  margin-bottom: 15px;
}

.nav-links.show-menu .nav-item:last-child {
  margin-bottom: 0;
}

.nav-item {
  text-decoration: none;
  color: #163354;
  font-weight: 500;
}

.nav-item:hover {
  text-decoration: underline;
}

</style>

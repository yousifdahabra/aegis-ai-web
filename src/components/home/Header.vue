<template>
  <!-- Navbar -->
  <header class="navbar">
    <div class="container navbar-container">
      <div class="logo-nav-container">
        <img src="@/assets/images/home/logo.png" alt="Logo" class="logo" />
        <nav class="nav-links" :class="{ 'show-menu': isMenuOpen }">
          <router-link to="/" class="nav-item">Home</router-link>
          <router-link to="/about" class="nav-item">About Us</router-link>
          <router-link to="/contact" class="nav-item">Contact Us</router-link>
          <router-link to="/register" class="nav-item btn-expert-mobile">Be an Expert</router-link>
        </nav>
      </div>
      <router-link to="/register" class="btn-expert">Be an Expert</router-link>

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
  color: var(--main-title-color);
  font-weight: 500;
}

.nav-item:hover {
  text-decoration: underline;
}

.burger-menu {
  display: none;
  flex-direction: column;
  justify-content: center;
  gap: 4px;
  cursor: pointer;
}

.burger-menu .line {
  width: 25px;
  height: 3px;
  background-color: var(--main-title-color);
  border-radius: 2px;
}

.btn-expert {
  background-color: var(--button-background-color);
  color: var(--button-text-color);
  padding: 10px 20px;
  border-radius: 5px;
  text-align: center;
  text-decoration: none;
  font-weight: 500;
  display: inline-block;
}

.btn-expert-mobile {
  display: none;
  background-color: var(--button-background-color);
  color: var(--button-text-color);
  padding: 10px 20px;
  border-radius: 5px;
  text-align: center;
  text-decoration: none;
  font-weight: 500;
  margin-top: 15px;
}

@media screen and (max-width: 768px) {
  .nav-links {
    display: none;
  }

  .nav-links.show-menu {
    display: block;
  }

  .burger-menu {
    display: flex;
  }

  .btn-expert {
    display: none;
  }

  .btn-expert-mobile {
    display: block;
  }
}

@media screen and (min-width: 769px) {
  .burger-menu {
    display: none;
  }

  .btn-expert-mobile {
    display: none;
  }

  .btn-expert {
    display: inline-block;
  }
}
</style>

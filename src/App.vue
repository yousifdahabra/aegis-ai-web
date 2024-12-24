
<template>
  <Login />
</template>

<script>
import Login from './pages/Login';

export default {
  name: 'App',
  components: {
    Login
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
*{
  margin: 0;
  padding: 0;
}
</style>
<style src="./assets/styles/common/flex.css"></style>
<style src="./assets/styles/pages/login.css"></style>


<template>
  <nav class="navbar navbar-expand-lg bg-white shadow-sm sticky-top">
    <div class="container-fluid d-flex align-items-center mx-4">
       <Logo />
         <router-link to="/login" class="navbar-item text-decoration-none fw-bold text-dark">
        Login
      </router-link>
    </div>
  </nav>
</template>

<script>
import Logo from "../components/Logo.vue";
export default {
  components: {
    Logo,
  },
  data() {
    return {
      imgPath: "../assets/logo.webp",
    };
  },
};
</script>

<style  scoped>
</style>
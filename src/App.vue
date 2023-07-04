<template>
  <div>
    <Navbar />
     <router-view />
    <Footer />
  </div>
</template>

<script>
import Home from './pages/Home.vue'
import Navbar from "./components/Navbar.vue";
import Footer from "./components/Footer.vue";
export default {
  components: {
    Navbar,
    Home,
    Footer,
   
  },
};
</script>

<style >
</style>
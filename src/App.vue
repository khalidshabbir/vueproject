<template>
  <div>
    <link rel="stylesheet" 
        href="https://use.fontawesome.com/releases/v5.2.0/css/all.css" 
        integrity="sha384-hWVjflwFxL6sNzntih27bfxkr27PmbbK/iSvJ+a4+0owXq79v+lsFkW54bOGbiDQ" 
        crossorigin="anonymous">
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
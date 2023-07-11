
<template>
  <nav class="navbar navbar-expand-lg bg-white shadow-sm sticky-top">
    <div class="container-fluid d-flex align-items-center mx-4">
      <Logo />
      <div>
        <router-link to="/login" class="navbar-item text-decoration-none fw-bold  me-4" style="color: #D70464;">
        Login
         
        </router-link>
        <router-link to="/addtocart" class=" nav-item text-decoration-none cursor-pointer text-dark">
          <button type="button" class="btn   position-relative m-0 p-1 ">
            <i class="fas fa-shopping-cart" style="color: #D70464;" @click="addToCart"></i>
            <span  class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger ">
             {{ totalCartItems.length }}
             
            </span>
          </button>
         
        </router-link>

      </div>

    </div>
  </nav>
</template>

<script setup>
import Logo from "../components/Logo.vue";
import {ref, watch} from "vue"
let totalCartItems=ref("")
import { useCartStore } from '../stores/addtoCart';



watch(()=>{
   const cartStore = useCartStore()
totalCartItems.value= cartStore.cartTotal
}
 

)



</script>

<style  scoped>
.cursor-pointer {
  cursor: pointer !important;
}
</style>
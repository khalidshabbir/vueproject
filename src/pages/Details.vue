<template>
  <div class="container mt-5 pt-5">
    <h1>Food Details</h1>
    <div class="row">
      <div class="col">
        <div class="d-flex align-items-center justify-conent-evenly">
          <div v-if="filteredFood" class="">
            <div class="food_details">
              <img class="food_img_details" :src="filteredFood.image_url" />
              <div
                class="d-flex align-items-center justify-content-between w-100"
              >
                <h3>{{ filteredFood.name }}</h3>
                <p>{{ filteredFood.price }}</p>
              </div>
              <p>{{ filteredFood.description }}</p>
            </div>
          </div>
        </div>
      </div>
      <div class="col text-center">
        <h1>Select Quantity</h1>
        <div class="mt-5 d-flex align-items-center justify-content-center my-5">
            <button class="btn btn-dark me-3" @click="count--">-</button>  
          <h4 class="px-5 m-0">{{ count }}</h4>
          <button class="btn btn-dark me-3" @click="count++">+</button>   
        </div>
        <div class="d-flex align-items-center justify-content-center">
          <button class="btn btn-secondary disabled me-4">Add to Card</button>
          <router-link :to="`/order_page/${filteredFood.id}/${count}`" class="text-decoration-none"> <button class="btn btn-primary">Buy Now</button></router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { food } from "../data";
import { ref } from "vue";
let count = ref(1);
import { useRoute } from "vue-router";
const route = useRoute();
const id = route.params.id;
const filteredFood = food.find((item) => item.id == id);
</script>

<style lang="scss" scoped>
.food_img_details {
  width: 400px;
}
.btn {
  padding: 15px 45px;
}
</style>


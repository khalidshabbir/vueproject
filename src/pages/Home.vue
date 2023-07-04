<template>
  <div class="home">
    <div class="carousel">
      <div
        id="carouselExampleIndicators"
        class="carousel slide"
        data-bs-ride="carousel"
      >
      
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src="../assets/Banner1.png" class="d-block w-100" alt="..." />
          </div>
          <div class="carousel-item">
            <img src="../assets/Banner2.jpg" class="d-block w-100" alt="..." />
          </div>
          <div class="carousel-item">
            <img src="../assets/Banner2.png" class="d-block w-100" alt="..." />
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </div>
    <div class="container mt-5 ">
        <h1 class="headingtext pb-5">Restaurants</h1>

        <div class="card-group d-flex align-items-center ">
            
            <Card class="mx-3" v-for="food in food" :key="food.id" :data="food" />
        </div>
      
    </div>
  </div>
</template>

<script>
import Card from "../components/Card.vue";
import {food} from '../data.js'
export default {
  components: {
    Card,
  },
  data(){
    return{
        food:food
    }
  }
};
</script>

<style lang="scss" scoped>
.carousel-item {
  min-height: 400px;
}
.headingtext{
    font-weight: 300;
}
</style>
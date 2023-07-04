<template>
  <div>
    <router-link :to="`/food_details/${data.id}`" class="text-decoration-none">
    <div class="card my-2" style="width: 18rem">
      <div class="inner">
        <img :src="data.image_url" class="card-img-top" alt="Logo" />
      </div>

      <div class="card-body m-0 p-0 mt-3">
        <div class="d-flex align-items-center justify-content-between">
          <h6 class="card-title">{{ data.name }}</h6>
          <p class="m-0 pb-2 fw-bold">${{ data.price }}</p>
        </div>
        <div class="">{{ data.description }}</div>
      </div>
    </div>
    </router-link>
  </div>
</template>

<script>
export default {
  props: {
    data: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.cardclass {
  min-width: 280px;
  min-height: 150px;
}
.card {
  border: none;
  cursor: pointer;
}
.card img {
  border-radius: 0;
  min-width: 300px;
   transition: all 0.3s ease-in-out;
 
}
.card img:hover {
  transform: scale(1.2);
}
.card-body {
  height: 150px;
}
.inner{
    overflow: hidden;
    
}
</style>
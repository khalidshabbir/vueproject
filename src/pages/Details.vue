<template>
    <div class="container mt-5 pt-5 ">
        <h1>Food Details</h1>
       <div class="d-flex align-items-center justify-conent-evenly">
         
        <div v-if="filteredFood" class="">
            <div class="food_details">
             <img class="food_img_details" :src="filteredFood.image_url" />
             <div class="d-flex align-items-center justify-content-between w-100" >
                 <h3>{{filteredFood.name}}</h3>
             <p>{{filteredFood.price}}</p>
             </div>
            
             <p>{{filteredFood.description}}</p>

            </div>
          
           
        </div>
       </div>
        
    </div>
</template>

<script>
import { food } from '../data';

export default {
    data() {
        return {
            datafood: null
        };
    },
    computed: {
        filteredFood() {
           return food.find(item => item.id == this.datafood);
        }
    },
    mounted() {
        this.datafood = this.$route.params.id;
    }
};
</script>

<style lang="scss" scoped>
.food_img_details{
    width: 400px;
}
</style>

<script setup >
import { useCartStore } from '../stores/addtoCart'

function cart(){
    const cartStore = useCartStore()
return cartStore.cartItems;
}

let item= cart();

function removeItems(item){
   
    const cartStore = useCartStore()
    cartStore.removeItem(item)
    window.location.reload();
}

</script>

<template>
    <div class="container mt-5 pt-5">
        <h4>Cart Details</h4>
        <div class="row d-flex align-items-start">
            <div class="col-12 col-md-8 col-8">
                <div  class="border border-1  p-3 mt-4" v-for="items in item" key="items.id">
            <div class="d-flex align-items-center justify-content-between">
                     <div>
                        <img :src="items.image" alt="img" style="width: auto; height: 100px;"/>
                     </div>
                   
                    <div class="mx-2 ms-3 d-flex flex-column align-items-center">
                        <h5>{{ items.name }}</h5>
                        <p> <span>Quantity :</span> {{ items.quantity }}</p>
                    </div>
                    <div class="mx-3 d-flex flex-column align-items-center">
                        <h5>Price</h5>
                        <p>{{ items.price }}</p>
                    </div>
                    <div class="mx-3 d-flex flex-column align-items-center">
                         <i class="fas fa-trash-alt cursor-pointer" @click="removeItems(items.cartId)"></i>
                    </div>
                

            </div>
        </div>
            </div>
            <div class="col-12 col-md-4 col-4">
                <div class="border border-1 p-3 mt-4">
                    <h4>Total Price</h4>
                </div>

            </div>
        </div>
        

        
    </div>
</template>

<style lang="scss" scoped>
.cursor-pointer{
    cursor: pointer;
}

</style>
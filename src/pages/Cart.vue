<script setup >
import { useCartStore } from '../stores/addtoCart'

function cart() {
    const cartStore = useCartStore()
    return cartStore.cartItems;
}
let item = cart();

function removeItems(item) {

    const cartStore = useCartStore()
    cartStore.removeItem(item)
    window.location.reload();
}

function totalpriceis(){
let price=0;
    item.forEach((item)=>{
        price=price +(item.quantity*item.price)
    })


    return  price

}
;


</script>

<template>
    <div class="container mt-5 pt-5">
        <h4>Cart Details</h4>
        <div class="row d-flex align-items-start">
            <div class="col-12 col-md-12 col-lg-8">
                <div class="border border-1  p-3 mt-4" v-for="items in item" key="items.id">
                    <div class="d-flex align-items-center justify-content-between">
                        <div>
                            <img :src="items.image" alt="img" style="width: auto; height: 100px;" />
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
            <div class="col-12 col-md-12 col-lg-4">
                <div class="border border-1 p-3 mt-4">
                    <h4>Total Price</h4>
                    <div class="mt-5">
                        <table class="table">
                            <thead>
                                <tr>

                                    <th scope="col">Name</th>
                                    <th scope="col">Quantity</th>
                                    <th scope="col">Price</th>
                                    <th scope="col">Total</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="items in item" :key="items.id">

                                    <td>{{ items.name }}</td>
                                    <td>{{ items.quantity }}</td>
                                    <td>{{ items.price }}</td>
                                    <td>{{ items.quantity * items.price }}</td>
                                </tr>


                            </tbody>
                        </table>
                    </div>

                    <div class="d-flex align-items-center justify-content-between">
                        <h5 class="">Total Bill</h5>
                     <h6 class="me-4">{{ totalpriceis() }}</h6>
                    </div>
                    
                </div>
            </div>

        </div>
    </div>
</template>

<style lang="scss" scoped>
.cursor-pointer {
    cursor: pointer;
}
</style>
<template>
  <div class="container shadow mx-auto my-5">
    <h1 class="text-center">Order Details</h1>
    <div class="p-4 d-flex align-items-center justify-content-center">
      <div class="details mt-5 w-50">
        <div class="d-flex align-items-center justify-content-between">
          <h6>Name:</h6>
          <span class="ms-5">{{ item.name }}</span>
        </div>
        <div class="d-flex align-items-center justify-content-between">
          <h6>Price per Product:</h6>
          <span class="ms-5">{{ item.price }}</span>
        </div>
        <div class="d-flex align-items-center justify-content-between">
          <h6>Quantity:</h6>
          <span class="ms-5">{{ quantity }}</span>
        </div>
        <div class="d-flex align-items-center justify-content-between">
          <h6>Total:</h6>
          <span class="ms-5">{{ quantity * item.price }}</span>
        </div>
      </div>
    </div>
    <div class="mt-5 pt-5">
      <div class="px-4 pb-5 mx-5">
        <h5 class="mb-5">Fill the details</h5>
        <form>
          <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">Name</label>
            <input type="name" class="form-control" id="exampleName" />
          </div>
          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label"
              >Email address</label
            >
            <input
              type="email"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
          </div>
          <div class="mb-3">
            <label for="selectCountry" class="form-label">Country</label>
            <select class="form-select">
              <option disabled selected>Select an option</option>
              <option>Option 1</option>
              <option>Option 2</option>
              <option>Option 3</option>
            </select>
          </div>
          <div class="mb-3">
            <label for="selectCountry" class="form-label">Country</label>
            <select class="form-select">
              <option disabled selected>Select an option</option>
              <option>Option 1</option>
              <option>Option 2</option>
              <option>Option 3</option>
            </select>
          </div>
          <div class="mb-3">
            <label for="selectCountry" class="form-label">Country</label>
            <select  class="form-select">
              <option disabled selected>Select an option</option>
              <option>Option 1</option>
              <option>Option 2</option>
              <option>Option 3</option>
            </select>
          </div>

          <button type="submit" class="btn btn-primary w-100">Confirm Order</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRoute } from "vue-router";
import { food } from "../data";
import axios from 'axios';
import {ref} from "vue"
const route = useRoute();
const id = route.params.id;
const quantity = route.params.quantity;
const item = food.find((item) => item.id == id);
let countriesData


 async function getApi() {
    
    const url = 'http://api.geonames.org/countryInfoJSON?username=khalidshabbir09';
   

    try {
      const response = await axios.get(url);
      const countries=response.data;
      console.log(countries)

   
    
      
    } catch (error) {
      console.log(error.message);
    }
}

getApi();



</script>

<style lang="scss" scoped>
</style>
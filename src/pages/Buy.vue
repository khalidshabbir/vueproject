<script setup >
import { useRoute } from "vue-router";
const route = useRoute();
import { food } from "../data";
import axios from 'axios';
import { ref } from "vue"

const id = route.params.id;
const quantity = route.params.quantity;
const item = food.find((item) => item.id == id);
let countriesData = ref("");
let statesData = ref("");
let citesData = ref("");
// ================================
// ===============================
let selectedCountry = "";
let selectedStates = ""
let selectedCity = ""
const country = ""
const getAPI = async function () {
  const url = 'https://countriesnow.space/api/v0.1/countries/states';
  try {
    const response = await axios.get(url);
    const countries = response.data;
    countriesData.value = countries.data;
  } catch (error) {
    console.log(error.message);
  }
};

const getCities = async function (state, country) {
  const url = 'https://countriesnow.space/api/v0.1/countries/state/cities';
  try {
    const response = await axios.post(url, {
      "country": country,
      "state": state
    });
    const cities = response.data;
    citesData.value = cities.data
    console.log(cities)

  } catch (error) {
    console.log(error.message);
  }
}



getAPI();


function onChange(value) {
  const Data = countriesData.value.find(country => country.name === value);
  statesData.value = Data.states;
  console.log(statesData)

}



function onChangestate(value) {

  getCities(value, selectedCountry)
}

let propsData =
            {
              name: item.name,
              price: item.price,
              quantity: quantity,
              total: quantity * item.price,
              country: selectedCountry,
              state: selectedStates,
              city: selectedCity
            }
</script>

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
        <form @submit="$router.push({
            path: '/confirm_order',
            query: propsData

          })">
          <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">Name</label>
            <input type="name" class="form-control shadow-none" required id="exampleName" />
          </div>
          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">Email address</label>
            <input type="email" class="form-control shadow-none" required id="exampleInputEmail1"
              aria-describedby="emailHelp" />
          </div>
          <!-- =========================================== -->
          <div class="mb-3">
            <label for="selectCountry" class="form-label">Country</label>
            <select class="form-select shadow-none" required placeholder="Please Select your Country"
              v-model="selectedCountry" @change="onChange(selectedCountry)">
              <option disabled selected>Select your Country</option>
              <option v-for="country in countriesData" :key="country.name" :value="country.name">{{ country.name }}
              </option>
            </select>
          </div>
          <!-- =========================================== -->
          <div class="mb-3">
            <label for="selectSate" class="form-label">States</label>
            <select class="form-select shadow-none" required placeholder="Please Select your Country"
              v-model="selectedStates" @change="onChangestate(selectedStates)">
              <option disabled selected>Select your State</option>
              <option v-for="states in statesData" :key="states.name" :value="states.name">{{ states.name }}</option>
            </select>
          </div>
          <!-- ===================================================== -->
          <!-- =========================================== -->
          <div class="mb-3">
            <label for="selectCountry" class="form-label">City</label>
            <select class="form-select shadow-none" required placeholder="Please Select your City" v-model="selectedCity">
              <option disabled selected>Select your City</option>
              <option v-for="city in citesData" :key="city.name" :value="city">{{ city }}</option>
            </select>
          </div>
          <!-- ===================================================== -->




          <!-- <button  class="btn btn-primary w-100" >Confirm Order</button> -->


          <button class="btn btn-primary" type="submit">Go to Next Page</button>

        </form>
      </div>
    </div>
  </div>
</template>

<style lang="css" scoped></style>
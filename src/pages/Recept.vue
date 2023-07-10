<template>
    <div class="container pt-5 mt-5 ">
      
      <div class=" shadow p-5">
        <h1 class="text-center">Thanks for you Order</h1>
         <div>
            <p>Name: {{ $route.query.name }}</p>
            <p>Price per Product: {{ $route.query.price}}</p>
            <p>Quantity: {{ $route.query.quantity }}</p>
            <p>Country: {{ $route.query.country }}</p>
            <p>State: {{ $route.query.state }}</p>
            <p>City: {{ $route.query.city }}</p>
           
            <p>Total Bill: {{ $route.query.total}}</p>
         </div>

         
      </div>
    
      
    </div>
  </template>
  
  <script>
  export default {
    
  };
  </script>
  
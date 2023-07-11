
import { createApp } from 'vue'
import './style.css'
import { createPinia } from 'pinia'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.css'
import Home from "./pages/Home.vue"
import Login from './pages/Login.vue'
import { createRouter, createWebHistory } from 'vue-router';
import Details from "./pages/Details.vue";
import Order_Now from "./pages/Buy.vue"
import Erorpage from "./pages/ErrorPage.vue"
import Recept from "./pages/Recept.vue"
import Cart from "./pages/Cart.vue"


const routes = [
    {
        path: '/',
        component: Home
    },
    {
        path: '/login',
        component: Login
    }
    ,
    {
        path: '/food_details/:id',
        component: Details
    },
   
    {
        path: '/order_page/:id/:quantity',
        component: Order_Now
    },
    {
        path: '/confirm_order',
        component: Recept
    },
    {
        path: '/addtocart',
        component: Cart
    },
    {
        path: '/:pathMatch(.*)*',
        component: Erorpage
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

const app = createApp(App);
app.use(router);
const pinia = createPinia()
app.use(pinia)
app.mount('#app');
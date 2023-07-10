
import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.css'
import { library } from "@fortawesome/fontawesome-svg-core";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import Home from "./pages/Home.vue"
import Login from './pages/Login.vue'
library.add(faPhone);
import { createRouter, createWebHistory } from 'vue-router';
import Details  from "./pages/Details.vue";
import Order_Now from "./pages/Buy.vue"
import Erorpage from "./pages/ErrorPage.vue"

const routes = [
    {
        path: '/',
        component: Home
    },
    {
        path:'/login',
        component:Login
        }
    ,
    {
        path:'/food_details/:id',
        component:Details
        },
    {
        path:'/order_page/:id/:quantity',
        component:Order_Now
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
app.use("font-awesome-icons",FontAwesomeIcon)
app.mount('#app');
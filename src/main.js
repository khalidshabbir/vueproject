
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
            path: '/:pathMatch(.*)*',
            component: Erorpage // Assuming you have a component named NotFound for the 404 page
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
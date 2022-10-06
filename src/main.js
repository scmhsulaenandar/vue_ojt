import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import Header from "../src/components/Header.vue"
import Navigation from "../src/components/Navigation.vue"
import Footer from "../src/components/Footer.vue"
import "bootstrap/dist/css/bootstrap.min.css"
import  "bootstrap/dist/js/bootstrap.js"
import './assets/main.css'

const app = createApp(App)
app.use(router)

app.mount('#app')
app.component('Header',Header)
app.component('Navigation',Navigation)
app.component('Footer',Footer)

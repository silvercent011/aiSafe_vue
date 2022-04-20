//Vue
import { createApp } from "vue";
//Tailwind
import './main.css'
//Vue-Router
import router from "./router";
//Pinia
import { createPinia } from "pinia";
const pinia = createPinia()
//Toastification
import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";
//Main Component
import App from "./App.vue";

const app = createApp(App)
app.use(Toast)
app.use(pinia)
app.use(router)
app.mount("#app");
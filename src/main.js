//Vue
import { createApp, markRaw } from "vue";
//Tailwind
import './main.css'
//Vue-Router
import router from "./router";
//Pinia
import { createPinia } from "pinia";
const pinia = createPinia().use(({ store }) => {
    store.$router = markRaw(router)
})
//Toastification
import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";
//Main Component
import App from "./App.vue";

//FontAwesome
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
//VueGooeleMaps
import VueGoogleMaps from '@fawmi/vue-google-maps'
const app = createApp(App)
app.use(Toast)
app.component('font-awesome-icon', FontAwesomeIcon)
app.use(VueGoogleMaps, {
    load: {
        key: import.meta.env.VITE_GOOGLE_MAPS_API_KEY,
        //language: 'br',
    },
})
app.use(pinia)
app.use(router)
app.mount("#app");

<script setup>
//Vue
import { reactive } from 'vue'
import { useRouter } from 'vue-router';
//Stores
import { useUserStore } from '../stores/user';
//Capacitor
import { Geolocation } from '@capacitor/geolocation';

const store = useUserStore()
const signin_data = reactive({
    email: '',
    password: '',
    latitude: 0,
    longitude: 0
})

const doSignIn = async () => {
    const coordinates = await Geolocation.getCurrentPosition();
    signin_data.latitude = coordinates.coords.latitude
    signin_data.longitude = coordinates.coords.longitude
    store.signIn(signin_data)
}

const router = useRouter()
const toSignUp = () => {
    router.push({ name: 'signup' })
}

</script>

<template>
    <form @submit.prevent="doSignIn">
        <div class="w-full flex flex-col">
            <label for="email">E-mail</label>
            <input class="border-2 border-black" v-model.trim="signin_data.email" type="email" name="email" id="email">
        </div>
        <div class="w-full flex flex-col">
            <label for="password">Senha</label>
            <input class="border-2 border-black" v-model.trim="signin_data.password" type="password" name="password" id="password">
        </div>
        <div class="w-full">
            <button type="submit" class="w-full p-3 my-2 bg-blue-600 text-white">Entrar</button>
            <button @click="toSignUp" type="button" class="w-full p-3 my-2">Cadastre-se</button>
        </div>

    </form>
</template>

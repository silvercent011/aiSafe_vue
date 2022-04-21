<script setup>
//Vue
import { reactive } from 'vue'
import { useRouter } from 'vue-router';
//Stores
import { useUserStore } from '../stores/user';
//Capacitor
import { Geolocation } from '@capacitor/geolocation';
//Components
import Card from '../components/Card.vue';
//Logo
import logo from '@/assets/logo.svg'

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
    <div class="min-h-screen w-full bg-blue-600 p-2">
        <Card>
            <img class="mx-auto rounded-lg h-28 w-28" :src="logo" alt="" srcset="">
            <form @submit.prevent="doSignIn">
                <div class="w-full flex flex-col">
                    <label for="email">E-mail</label>
                    <input class="" v-model.trim="signin_data.email" type="email" name="email" id="email">
                </div>
                <div class="w-full flex flex-col">
                    <label for="password">Senha</label>
                    <input class="" v-model.trim="signin_data.password" type="password" name="password" id="password">
                </div>
                <div class="w-full">
                    <button type="submit" class="w-full p-3 my-2 bg-blue-600 text-white rounded-lg">Entrar</button>
                    <div class="w-full text-center">
                        Não tem uma conta?<a @click="toSignUp" class="w-full p-3 my-2 cursor-pointer text-blue-600">Cadastre-se</a>
                    </div>
                </div>
            </form>
        </Card>
    </div>
</template>

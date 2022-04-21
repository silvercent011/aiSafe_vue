<script setup>
//Vue
import { reactive } from 'vue'
//Stores
import { useGuardStore } from '../stores/guard';
//Capacitor
import { Geolocation } from '@capacitor/geolocation';

const store = useGuardStore()
const signin_data = reactive({
    cpf: '',
    name: '',
    surname: '',
    email: '',
    password: '',
    latitude: 0,
    longitude: 0
})

const doSignUp = async () => {
    const coordinates = await Geolocation.getCurrentPosition();
    signin_data.latitude = coordinates.coords.latitude
    signin_data.longitude = coordinates.coords.longitude
    store.signUpGuard(signin_data)
}

</script>

<template>
    <form @submit.prevent="doSignUp">
        <div class="w-full flex flex-col">
            <label for="cpf">CPF</label>
            <input class="border-2 border-black" v-model.trim="signin_data.cpf" type="number" name="cpf" id="cpf">
        </div>
        <div class="w-full flex flex-col">
            <label for="nome">Nome</label>
            <input class="border-2 border-black" v-model.trim="signin_data.name" type="text" name="nome" id="nome">
        </div>
        <div class="w-full flex flex-col">
            <label for="sobrenome">Sobrenome</label>
            <input class="border-2 border-black" v-model.trim="signin_data.surname" type="text" name="sobrenome" id="sobrenome">
        </div>
        <div class="w-full flex flex-col">
            <label for="email">E-mail</label>
            <input class="border-2 border-black" v-model.trim="signin_data.email" type="email" name="email" id="email">
        </div>
        <div class="w-full flex flex-col">
            <label for="password">Senha</label>
            <input class="border-2 border-black" v-model.trim="signin_data.password" type="password" name="password" id="password">
        </div>
        <div class="w-full">
            <button type="submit" class="w-full p-3 my-2 bg-blue-600 text-white">Cadastro</button>
        </div>

    </form>
</template>

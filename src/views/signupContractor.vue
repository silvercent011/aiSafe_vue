<script setup>
//Vue
import { reactive } from 'vue'
//Stores
import { useContractorStore } from '../stores/contractor';
//Capacitor
import { Geolocation } from '@capacitor/geolocation';
//Components
import Card from '../components/Card.vue';
import { useRouter } from 'vue-router';

const store = useContractorStore()
const signin_data = reactive({
    storeName: '',
    cnpj: '',
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
    store.signUpContractor(signin_data)
}

const router = useRouter()
const toSignIn = () => {
    router.push({name: 'signin'})
}

</script>

<template>
    <div class="min-h-screen w-full bg-blue-600 p-2">
        <Card>
            <form @submit.prevent="doSignUp">
                <div class="w-full flex flex-col">
                    <label for="storename">Nome da Loja</label>
                    <input class="" v-model.trim="signin_data.storeName" type="text" name="storename" id="storename">
                </div>
                <div class="w-full flex flex-col">
                    <label for="cnpj">CNPJ</label>
                    <input class="" v-model.trim="signin_data.cnpj" type="number" name="cnpj" id="cpf">
                </div>
                <div class="w-full flex flex-col">
                    <label for="nome">Nome</label>
                    <input class="" v-model.trim="signin_data.name" type="text" name="nome" id="nome">
                </div>
                <div class="w-full flex flex-col">
                    <label for="sobrenome">Sobrenome</label>
                    <input class="" v-model.trim="signin_data.surname" type="text" name="sobrenome" id="sobrenome">
                </div>
                <div class="w-full flex flex-col">
                    <label for="email">E-mail</label>
                    <input class="" v-model.trim="signin_data.email" type="email" name="email" id="email">
                </div>
                <div class="w-full flex flex-col">
                    <label for="password">Senha</label>
                    <input class="" v-model.trim="signin_data.password" type="password" name="password" id="password">
                </div>
                <div class="w-full">
                    <button type="submit" class="w-full p-3 my-2 bg-blue-600 text-white">Cadastro</button>
                    <div class="w-full text-center">
                        Já tem uma conta?<a @click="toSignIn" class="w-full p-3 my-2 cursor-pointer text-blue-600">Login</a>
                    </div>
                </div>

            </form>
        </Card>
    </div>
</template>

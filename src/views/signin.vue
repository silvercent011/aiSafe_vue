<script setup>
//Vue
import { reactive } from 'vue'
//Stores
import { useUserStore } from '../stores/user';

const store = useUserStore()
const signin_data = reactive({
    email: '',
    password: ''
})

const doSignIn = () => {
    store.signIn(signin_data)
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
        </div>
    </form>
</template>

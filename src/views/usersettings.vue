<script setup>
import { useUserStore } from '@/stores/user';
import { reactive } from 'vue';
import Card from '@/components/Card.vue';

const userStore = useUserStore()
const userData = reactive(JSON.parse(JSON.stringify(userStore.user_data)))

</script>

<template>
    <Card v-if="userData.type === 'GUARD'">
        <h1 class="text-2xl font-bold">Dados Pessoais</h1>
        <form @submit.prevent="">
            <div class="w-full flex flex-col">
                <label for="cpf">CPF</label>
                <input class="" v-model.trim="userData.cpf" type="number" anme="cpf" id="cpf">
            </div>
            <div class="w-full flex flex-col">
                <label for="name">Nome</label>
                <input class="" v-model.trim="userData.name" type="text" name="name" id="name">
            </div>
            <div class="w-full flex flex-col">
                <label for="surname">Sobrenome</label>
                <input class="" v-model.trim="userData.surname" type="text" name="surname" id="surname">
            </div>
            <div class="w-full flex flex-col">
                <label for="email">E-mail</label>
                <input class="" v-model.trim="userData.email" type="email" name="email" id="email">
            </div>
            <div class="w-full flex flex-col">
                <label for="birthdate">Data de Nascimento</label>
                <input class="" v-model.trim="userData.birthdate" type="date" name="birthdate" id="birthdate">
            </div>
            <div class="w-full flex flex-col">
                <label for="phone">Celular</label>
                <input class="" v-model.trim="userData.phone" type="number" name="phone" id="phone">
            </div>
        </form>
    </Card>
</template>
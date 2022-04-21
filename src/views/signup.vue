<script setup>
import { useRouter } from 'vue-router';
const router = useRouter()

const toGuardSignIn = () => {
    router.push({ name: 'signupGuard' })
}

</script>

<template>
    <div class="w-full flex flex-col">
        <h1 class="text-4xl mx-auto">Eu sou:</h1>
        <button class="button" @click="toGuardSignIn">Guarda</button>
        <button class="button">Contratante</button>
    </div>
</template>

<style scoped>
.button {
    @apply m-5 bg-blue-600 text-white p-3
}
</style>
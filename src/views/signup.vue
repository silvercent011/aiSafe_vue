<script setup>
import { useRouter } from 'vue-router';
const router = useRouter()

const toGuardSignUP = () => {
    router.push({ name: 'signupGuard' })
}
const toContractorSignUp = () => {
    router.push({ name: 'signupContractor' })
}

</script>

<template>
    <div class="w-full flex flex-col">
        <h1 class="text-4xl mx-auto">Eu sou:</h1>
        <button class="button" @click="toGuardSignUP">Guarda</button>
        <button class="button" @click="toContractorSignUp">Contratante</button>
    </div>
</template>

<style scoped>
.button {
    @apply m-5 bg-blue-600 text-white p-3
}
</style>
<script setup>
//Vue-Router
import { useRouter } from 'vue-router';
//Components
import Card from '../components/Card.vue';

const router = useRouter()

const toGuardSignUP = () => {
    router.push({ name: 'signupGuard' })
}
const toContractorSignUp = () => {
    router.push({ name: 'signupContractor' })
}

</script>

<template>
    <div class="min-h-screen w-full bg-blue-600 p-2">
        <Card>
            <div class="w-full flex flex-col">
                <h1 class="text-4xl mx-auto">Eu sou:</h1>
                <button class="button" @click="toGuardSignUP">Guarda</button>
                <button class="button" @click="toContractorSignUp">Contratante</button>
            </div>
        </Card>
    </div>
</template>

<style scoped>
.button {
    @apply m-5 bg-blue-600 text-white p-3
}
</style>
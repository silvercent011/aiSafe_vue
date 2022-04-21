<script setup>
import { computed } from 'vue';
import { useGuardStore } from '../stores/guard';
const store = useGuardStore()
store.getAllGuards()
const guards = computed(() => {
    return store.guards
})

</script>

<template>
    <div v-for="guard in guards" :key="guard._id" class="p-3 bg-blue-200 m-2 rounded-lg flex items-center">
        <div>
            <img class="w-20 h-20 m-3 rounded-full" src="https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png" alt="">
        </div>
        <div>
            <h1 class="font-bold">Nome: {{ guard.name }} {{ guard.surname }}</h1>
            <h1>E-mail: {{ guard.email }}</h1>
            <h1>LOCALIZAÇÃO PLACEHOLDER</h1>
            <h1>{{guard.lastLocation}}</h1>
        </div>
    </div>
</template>
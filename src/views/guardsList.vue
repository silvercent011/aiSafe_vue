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
    <div v-for="guard in guards" :key="guard._id" class="p-3 bg-blue-200 m-2 rounded-lg ">
        <h1 class="font-bold">Nome: {{ guard.name }} {{ guard.surname }}</h1>
        <h1>E-mail: {{guard.email}}</h1>
        <h1>LOCALIZAÇÃO PLACEHOLDER</h1>
        <!-- {{ guard }} -->
    </div>
</template>
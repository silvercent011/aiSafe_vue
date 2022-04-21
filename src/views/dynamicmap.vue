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
    <h1>{{guards}}</h1>
</template>
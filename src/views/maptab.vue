<script setup>
import dynamicmap from './dynamicmap.vue';
</script>
<template>
    <Suspense>
        <dynamicmap />
        <template #fallback>
            <h1>Loading...</h1>
        </template>

    </Suspense>

</template>
<script setup>
import { faShield, faCog, faMap } from '@fortawesome/free-solid-svg-icons'
import NavBar from '@/components/NavBar.vue';
import { useRoute, useRouter } from 'vue-router';

const router = useRouter()
const navigateTo = (route) => {
    router.push({ name: route })
}

const route = useRoute()
</script>
<template>
    <NavBar />
    <router-view></router-view>
    <div class="bg-blue-600 w-full h-20 fixed bottom-0 flex justify-evenly items-center text-blue-400">
        <button @click="navigateTo('guards')" :class="{'active': route.name === 'guards' }"  class="flex flex-col items-center">
            <font-awesome-icon :icon="faShield" size="lg" />
            Guardas
        </button>
        <button @click="navigateTo('map')" :class="{'active': route.name === 'map' }"  class="flex flex-col items-center">
            <font-awesome-icon :icon="faMap" size="lg" />
            Mapa
        </button>
        <button @click="navigateTo('usersettings')" :class="{'active': route.name === 'usersettings' }" class="flex flex-col items-center">
            <font-awesome-icon :icon="faCog" size="lg" />
            Config.
        </button>
    </div>
</template>



<style scoped>

.active {
    @apply text-white font-semibold text-lg transition-all duration-100
}

</style>
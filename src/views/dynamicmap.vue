<script setup>
import { computed, reactive } from 'vue';
import { useGuardStore } from '../stores/guard';
import { useUserStore } from '../stores/user';

const userStore = useUserStore()
const coordinates = userStore.user_data.lastLocation.coordinates

const store = useGuardStore()
await store.getAllGuards()
const guards = computed(() => {
    return store.guards
})

const markers = await Promise.all(store.guards.map((guard) => {
    const loc = guard.lastLocation.coordinates
    if (loc[0] != null && loc[1] != null) {
        return { position: { lat: loc[1], lng: loc[0] } }
    }
}).filter((coord) => {
    if (coord != undefined) {
        return coord
    }
})
)

const center = reactive({ lat: coordinates[1], lng: coordinates[0] })

const options = {
    zoomControl: false,
    mapTypeControl: false,
    scaleControl: false,
    streetViewControl: false,
    rotateControl: false,
    fullscreenControl: false,
    disableDefaultUi: false
}

</script>

<template>
    <div class="">
        <GMapMap :options="options" class="h-screen fixed w-full" :center="center" :zoom="15" map-type-id="roadmap">
            <GMapMarker :key="index" v-for="(m, index) in markers" :position="m.position" :icon="'https://cdn-icons-png.flaticon.com/128/4472/4472459.png'" @click="center = m.position" :clickable="true" :draggable="false" />
        </GMapMap>
    </div>
    <!-- <h1>{{ guards }}</h1> -->
</template>
import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'signin',
            component: () => import('@/views/signin.vue')
        }
    ]
})

export default router
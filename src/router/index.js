import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'signin',
            component: () => import('@/views/signin.vue')
        },
        {
            path: '/signup',
            name: 'signup',
            component: () => import('@/views/signup.vue')
        },
        {
            path: '/signup/guard',
            name: 'signupGuard',
            component: () => import('@/views/signupGuard.vue')
        },
    ]
})

export default router
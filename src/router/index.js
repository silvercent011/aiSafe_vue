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
        {
            path: '/signup/contractor',
            name: 'signupContractor',
            component: () => import('@/views/signupContractor.vue')
        },
    ]
})

export default router
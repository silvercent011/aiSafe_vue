import { createRouter, createWebHistory } from "vue-router";
import { useUserStore } from "../stores/user";

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
        {
            path: '/home',
            component: () => import('@/views/homepage.vue'),
            children: [
                {
                    path: '',
                    name: 'guards',
                    component: () => import('@/views/guardsList.vue')
                },
                {
                    path: '/map',
                    name: 'map',
                    component: () => import('@/views/maptab.vue')
                },
                {
                    path: '/usersettings',
                    name: 'usersettings',
                    component: () => import('@/views/usersettings.vue')
                },
            ]
        },
    ]
})

export default router

router.beforeEach(async (to, from, next) => {
    const userStore = useUserStore()
    if (!userStore.user_data) {
        await userStore.fetchTokenFromStorage()
    }
    const routesWithoutAuth = ['signin', 'signup', 'signupGuard', 'signupContractor']
    if (!routesWithoutAuth.includes(to.name)) {
        if (!userStore.user_logged) {
            next({ path: "/" })
        }
        else {
            next()
        }
    } else {
        if (userStore.user_logged && to.path === '/') {
            next({ path: '/home' })
        }
        next()
    }
})
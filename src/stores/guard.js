import axios from 'axios'
import { defineStore } from 'pinia'
import { useToast } from "vue-toastification";
import { useUserStore } from './user';
const API_URL = import.meta.env.VITE_API_URL

const userStore = useUserStore()

export const useGuardStore = defineStore('guard', {
    state: () => {
        return {
            guard_created: false,
            guards: undefined
        }
    },
    actions: {
        async signUpGuard(payload) {
            await axios.post(`${API_URL}/users/guard`, payload).then((res) => {
                this.guard_created = true
                useToast().success('Cadastrado com sucesso!')
                this.$router.replace({ name: 'signin' })
            }).catch((error) => {
                useToast().error('Falha no cadastro')
            })
        },

        async getAllGuards() {
            await axios.get(`${API_URL}/guards`, { headers: { access_token: userStore.user_data.token } }).then((res) => {
                this.guards = res.data
            })
        }
    }
})
import axios from 'axios'
import { defineStore } from 'pinia'
import { useToast } from "vue-toastification";
const API_URL = import.meta.env.VITE_API_URL

export const useUserStore = defineStore('user', {
    state: () => {
        return {
            user_logged: false,
            user_data: undefined
        }
    },
    actions: {
        async signIn(payload) {
            await axios.post(`${API_URL}/users/auth`, payload).then((res) => {
                this.user_data = res.data
                this.user_logged = true
                useToast().success('Logado com sucesso!')
                this.$router.replace({ name: 'guards' })
            }).catch((error) => {
                useToast().error('Falha no login')
            })
        },
    }
})
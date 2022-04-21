import axios from 'axios'
import { defineStore } from 'pinia'
import { useToast } from "vue-toastification";
const API_URL = import.meta.env.VITE_API_URL

export const useUserStore = defineStore('user', {
    state: () => {
        return {
            user_data: undefined
        }
    },
    actions: {
        async signIn({ email, password }) {
            await axios.post(`${API_URL}/users/auth`, { email, password }).then((res) => {
                this.user_data = res.data
                useToast().success('Logado com sucesso!')
            }).catch((error) => {
                useToast().error('Falha no login')
            })
        },
    }
})
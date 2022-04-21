import axios from 'axios'
import { defineStore } from 'pinia'
import { useToast } from "vue-toastification";
const API_URL = import.meta.env.VITE_API_URL

export const useGuardStore = defineStore('guard', {
    state: () => {
        return {
            guard_created: false
        }
    },
    actions: {
        async signUpGuard(payload) {
            await axios.post(`${API_URL}/users/guard`, payload).then((res) => {
                this.guard_created = true
                router.replace({name:'signin'})
                useToast().success('Cadastrado com sucesso!')
            })
            // .catch((error) => {
            //     useToast().error('Falha no cadastro')
            // })
        },
    }
})
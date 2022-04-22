import axios from 'axios'
import { defineStore } from 'pinia'
import { useToast } from "vue-toastification";
import { useUserStore } from './user';
const API_URL = import.meta.env.VITE_API_URL

const userStore = useUserStore()
export const useContractorStore = defineStore('contractor', {
    state: () => {
        return {
            contractor_created: false
        }
    },
    actions: {
        async signUpContractor(payload) {
            await axios.post(`${API_URL}/users/contractor`, payload).then((res) => {
                this.contractor_created = true
                useToast().success('Cadastrado com sucesso!')
                this.$router.replace({ name: 'signin' })
            }).catch((error) => {
                useToast().error('Falha no cadastro')
            })
        },

        async updateUserInfo(payload) {
            const token = userStore.user_data.token
            await axios.patch(`${API_URL}/users/me`, payload, { headers: { access_token: token } }).then((data) => {
                userStore.fetchTokenFromStorage()
                useToast().success('Atualizado com sucesso!')
            }).catch((error) => {
                localStorage.clear()
                useToast().error('Falha na atualização')
            })
        }
    }
})
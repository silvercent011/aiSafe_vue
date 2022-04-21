import axios from 'axios'
import { defineStore } from 'pinia'
import { useToast } from "vue-toastification";
const API_URL = import.meta.env.VITE_API_URL

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
                this.$router.replace({name:'signin'})
                useToast().success('Cadastrado com sucesso!')
            }).catch((error) => {
            useToast().error('Falha no cadastro')
            })
        },
    }
})
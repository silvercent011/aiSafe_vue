import axios from 'axios'
import { defineStore } from 'pinia'
import { useToast } from "vue-toastification";
const API_URL = import.meta.env.VITE_API_URL
//Capacitor
import { Geolocation } from '@capacitor/geolocation';

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
                this.saveTokenToStorage()
                useToast().success('Logado com sucesso!')
                this.$router.replace({ name: 'guards' })
            }).catch((error) => {
                useToast().error('Falha no login')
            })
        },

        saveTokenToStorage() {
            localStorage.setItem('access_token', this.user_data.token);
        },


        deleteTokenFromStorage() {
            localStorage.clear()
        },

        async fetchTokenFromStorage() {
            try {
                const coordinates = await Geolocation.getCurrentPosition();
                const latitude = coordinates.coords.latitude
                const longitude = coordinates.coords.longitude
                const access_token = localStorage.getItem('access_token')
                if (access_token) {
                    await axios.post(`${API_URL}/users/me`, {latitude, longitude}, { headers: { access_token: access_token } }).then((data) => {
                        this.user_data = data.data
                        this.user_logged = true
                        this.saveTokenToStorage()
                    }).catch((error) => {
                        localStorage.clear()
                    })
                }
            } catch (error) {
                return false
            }
        },
    }
})
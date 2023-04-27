import { defineStore } from 'pinia'
export const useGlobalStore = defineStore('global', {
  state: () => ({
    loading: false,
    token: ''
  }),
  getters: {},
  actions: {
    LoadingStart() {
      this.loading = true
    },
    LoadingOff() {
      this.loading = false
    }
  },
  persist: true
})

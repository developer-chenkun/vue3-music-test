import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', {
	state: () => {
		return {
			phone: '',
			id: '',
			password: '',
		}
	},
})

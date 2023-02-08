import { defineStore } from 'pinia'
import { ref } from 'vue'
import { getMvData, getNewSongs, getSongs } from '@/utils/api'

export const useMvStore = defineStore('mvStore', () => {
	const mvData = ref<any[]>([])
	const getMv = async () => {
		mvData.value = await (await getMvData()).data.result
		console.log(mvData)
	}
	return { mvData, getMv }
})

export const useNewMusicStore = defineStore('newMusic', () => {
	const musicData = ref<any[]>([])
	const getMusic = async () => {
		musicData.value = await (await getNewSongs()).data.result
	}

	return {
		musicData,
		getMusic,
	}
})

export const useExclusiveMusic = defineStore('exclusiveMusic', () => {
	const musicData = ref<any[]>([])
	const getMusic = async () => {
		musicData.value = await (await getSongs({ limit: 10 })).data.result
	}

	return {
		musicData,
		getMusic,
	}
})

import { defineStore } from 'pinia'
import { ref } from 'vue'
import { getMvData, getNewSongs, getSongs, getBannersData } from '@/utils/api'

/**
 * 推荐banner
 */
export const useBannersStore = defineStore('bannersStore', () => {
	const bannerData = ref<any[]>([])
	const getBanner = () => {
		getBannersData({ type: 1 }).then(res => {
			bannerData.value = res.data.banners
		})
	}

	return { bannerData, getBanner }
})

/**
 * 推荐mv
 */
export const useMvStore = defineStore('mvStore', () => {
	const mvData = ref<any[]>([])
	const getMv = async () => {
		mvData.value = await (await getMvData()).data.result
	}
	return { mvData, getMv }
})

/**
 * 新歌单
 */
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

/**
 * 专属音乐
 */
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

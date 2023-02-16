import { defineStore } from 'pinia'
import { ref } from 'vue'

import { getMusicUrl } from '@/utils/api'

export const usePlayMusic = defineStore('playMusic', () => {
	const playObj = ref({
		id: 0,
		imgSrc: '',
		name: '',
		author: '',
		isPlaying: false,
		playList: [],
		musicUrl: '',
	})

	const playMusic = async ({ id = 0, imgSrc = '', name = '', author = '' }) => {
		const res = await getMusicUrl({ id, level: 'higher' })
		console.log('musicUrl', res)
		playObj.value.id = id
		playObj.value.imgSrc = imgSrc
		playObj.value.name = name
		playObj.value.author = author
		playObj.value.isPlaying = true
		playObj.value.musicUrl = res.data.data[0].url
	}

	return {
		playObj,
		playMusic,
	}
})

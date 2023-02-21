import { defineStore } from 'pinia'
import { ref } from 'vue'

import { getMusicUrl } from '@/utils/api'

type playObjType = {
	index: number
	id: number
	imgSrc: string
	name: string
	author: string
	isPlaying: boolean
	musicUrl: string
}

export const usePlayMusic = defineStore('playMusic', () => {
	const playObj = ref<playObjType>({
		index: 0,
		id: 0,
		imgSrc: '',
		name: '',
		author: '',
		isPlaying: false,
		musicUrl: '',
	})

	const playList = ref<any[]>([])

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

	const playNext = async () => {}

	return {
		playList,
		playObj,
		playMusic,
		playNext,
	}
})

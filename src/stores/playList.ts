import { defineStore } from 'pinia'
import { ref } from 'vue'
import { fetchMusicListDetail } from '@/utils/api'

type musicListDetailType = {
	coverImgUrl: string
	name: string
	creator: any
}

export const useplayListStore = defineStore('playListStore', () => {
	const detail = ref<musicListDetailType>({
		coverImgUrl: '',
		name: '',
		creator: {},
	})

	// 获取歌单详情
	const getMusicListDetail = async (id: number) => {
		const res = await fetchMusicListDetail(id)
		detail.value = res.data.playlist
		console.log('歌单详情=====', detail.value)
	}

	return {
		detail,
		getMusicListDetail,
	}
})

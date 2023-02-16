<template>
	<div>
		<Title title="推荐新音乐" />
		<div class="music-wrap">
			<div v-for="item in musicData" :key="item.id" class="music-item" @click="play(item)">
				<img :src="item.picUrl" />
				<div class="music-des">
					<div class="music-name music-detail">{{ item.name }}</div>
					<div class="music-author music-detail">{{ item.song.artists[0].name }}</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
import { defineComponent, ref, reactive, toRefs, watch, computed, getCurrentInstance, onBeforeMount } from 'vue'
import { useNewMusicStore } from '@/stores/discover'
import { usePlayMusic } from '@/stores/playMusic'
import Title from '@/components/common/Title.vue'

interface newMusicType {
	id: number
	picUrl: string
	name: string
	song: any
}

export default defineComponent({
	name: 'NewMusic',
	components: {
		Title,
	},
	setup() {
		const { musicData } = toRefs(useNewMusicStore())
		const { getMusic } = useNewMusicStore()

		onBeforeMount(async () => {
			await getMusic()
		})

		let { playObj, playMusic } = usePlayMusic()

		const { isPlaying } = playObj

		const play = (item: newMusicType) => {
			console.log('play')

			playMusic({ id: item.id, imgSrc: item.picUrl, name: item.name, author: item.song.artists[0].name })
		}

		return {
			musicData,
			getMusic,
			play,
			playObj,
		}
	},
})
</script>

<style lang="less" scoped>
.music-wrap {
	width: 100%;
	height: 120px;
	display: flex;
	flex-wrap: wrap;
	align-items: center;
	justify-content: space-between;

	.music-item {
		width: 19%;
		height: 50px;
		cursor: pointer;
		transition: all 0.2s ease;
		border-radius: 2px;
		display: flex;
		align-items: center;
		img {
			width: 55px;
			height: 55px;
			border-radius: 2px;
		}
		.music-des {
			width: calc(100% - 50px);
			height: 100%;
			padding: 0 5px;

			.music-detail {
				width: 100%;
				height: 25px;
				line-height: 25px;
				font-size: 12px;
				white-space: nowrap;
				overflow: hidden;
				text-overflow: ellipsis;
			}
			.music-author {
				color: rgb(148 163 184);
			}
		}
		&:hover {
			background-color: #e5e7eb;
		}
	}
}
</style>

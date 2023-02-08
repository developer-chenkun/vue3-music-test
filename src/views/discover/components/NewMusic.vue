<template>
	<div class="container">
		<h2>推荐新音乐</h2>
		<div class="music-wrap">
			<div v-for="item in musicData" :key="item.id" class="music-item">
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

export default defineComponent({
	name: 'NewMusic',
	setup() {
		const { musicData } = toRefs(useNewMusicStore())
		const { getMusic } = useNewMusicStore()

		onBeforeMount(async () => {
			await getMusic()
		})

		return {
			musicData,
			getMusic,
		}
	},
})
</script>

<style lang="less" scoped>
.container {
	margin-bottom: 20px;
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
}
</style>

<template>
	<div>
		<Title title="专属歌单" />
		<div class="music-wrap">
			<div class="music-item" v-for="item in musicData" :key="item.id">
				<div class="music-img">
					<cover-play :img-src="item.picUrl" :play-count="item.playCount" />
				</div>
				<div class="music-des">{{ item.name }}</div>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
import { defineComponent, toRefs, onBeforeMount } from 'vue'
import { useExclusiveMusic } from '@/stores/discover'
import CoverPlay from './CoverPlay.vue'
import Title from '@/components/common/Title.vue'

export default defineComponent({
	name: 'ExclusiveMusic',
	components: {
		CoverPlay,
		Title,
	},
	setup() {
		const { getMusic } = useExclusiveMusic()
		const { musicData } = toRefs(useExclusiveMusic())

		onBeforeMount(async () => {
			await getMusic()
		})

		return {
			getMusic,
			musicData,
		}
	},
})
</script>

<style lang="less" scoped>
.music-wrap {
	width: 100%;
	// height: 100px;
	display: flex;
	align-items: center;
	justify-content: space-between;
	position: relative;
	padding: 20px 0;
	.music-item {
		width: 100px;
		height: 120px;
		transition: all 0.15s ease;
		cursor: pointer;

		.music-img {
			width: 100px;
			height: 100px;
		}

		.music-des {
			margin-top: 5px;
			height: 15px;
			line-height: 15px;
			width: 100%;
			overflow: hidden;
			word-wrap: nowrap;
			text-overflow: ellipsis;
			font-size: 12px;
		}
	}
}
</style>

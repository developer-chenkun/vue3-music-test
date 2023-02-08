<template>
	<div class="container">
		<h2>您的专属歌单</h2>
		<div class="music-wrap">
			<div class="music-item" v-for="item in musicData" :key="item.id">
				<img :src="item.picUrl" />
			</div>
		</div>
	</div>
</template>

<script lang="ts">
import { defineComponent, ref, reactive, toRefs, watch, computed, getCurrentInstance, onBeforeMount } from 'vue'
import { useExclusiveMusic } from '@/stores/discover'

export default defineComponent({
	name: 'ExclusiveMusic',
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
.container {
	margin-bottom: 20px;
	.music-wrap {
		width: 100%;
		height: 100px;
		display: flex;
		align-items: center;
		justify-content: space-between;
		position: relative;
		.music-item {
			width: 100px;
			height: 100px;
			transition: all 0.15s ease;
			cursor: pointer;
			&:hover {
				transform: translateY(-10px);
			}

			img {
				width: 100%;
				height: 100%;
				border-radius: 5px;
			}
		}
	}
}
</style>

<template>
	<div class="container">
		<h2>推荐MV</h2>
		<div class="mv-wrap">
			<div v-for="mv in mvData" :key="mv.id" class="mv-item">
				<img :src="mv.picUrl" />
			</div>
		</div>
	</div>
</template>

<script lang="ts">
import { defineComponent, toRefs, onBeforeMount } from 'vue'
import { useMvStore } from '@/stores/discover'

export default defineComponent({
	name: 'Mv',
	setup() {
		const { mvData } = toRefs(useMvStore())
		const { getMv } = useMvStore()
		onBeforeMount(async () => {
			await getMv()
		})
		return {
			mvData,
			getMv,
		}
	},
})
</script>

<style lang="less" scoped>
.container {
	margin-bottom: 20px;
	.mv-wrap {
		width: 100%;
		height: 150px;
		display: flex;
		justify-content: space-between;
		.mv-item {
			width: 23%;
			height: 100%;
			cursor: pointer;
			img {
				border-radius: 5px;
				width: 100%;
				height: 100%;
			}
		}
	}
}
</style>

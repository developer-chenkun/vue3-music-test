<template>
	<div>
		<Title title="推荐MV" />
		<div class="mv-wrap">
			<div v-for="item in mvData" :key="item.id" class="mv-item">
				<div class="mv-image">
					<cover-play
						:img-src="item.picUrl"
						:play-count="item.playCount"
						:name="item.name"
						:author="item.artistName"
						:id="item.id"
						type="mv"
					/>
				</div>
				<div class="mv-des">
					<div class="mv-des-item">{{ item.name }}</div>
					<div class="mv-des-item text-gray">{{ item.artistName }}</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
import { defineComponent, toRefs, onBeforeMount } from 'vue'
import { useMvStore } from '@/stores/discover'
import Title from '@/components/common/Title.vue'
import CoverPlay from './CoverPlay.vue'

export default defineComponent({
	name: 'Mv',
	components: {
		Title,
		CoverPlay,
	},
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
.mv-wrap {
	width: 100%;
	height: 200px;
	display: flex;
	justify-content: flex-start;
	.mv-item {
		width: 24%;
		height: 100%;
		margin-right: 20px;
		.mv-image {
			width: 100%;
			height: 170px;
		}

		.mv-des {
			width: 100%;
			height: 30px;

			.mv-des-item {
				box-sizing: content-box;
				padding: 5px 0;
				width: 100%;
				height: 15px;
				line-height: 15px;
				font-size: 12px;
				overflow: hidden;
				white-space: nowrap;
				text-overflow: ellipsis;
			}

			.text-gray {
				color: rgb(148 163 184);
			}
		}
	}
}
</style>

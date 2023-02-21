<template>
	<div class="play-list">
		<div class="list-detail">
			<div class="list-img"><el-image :src="detail.coverImgUrl" fit="cover"></el-image></div>
			<div class="list-content">
				<div class="content-name">{{ detail.name }}</div>
				<div class="content-avator">
					<el-image :src="detail.creator.avatarUrl"></el-image>
					<div>{{ detail.creator.nickname }}</div>
					<div class="content-tag" v-for="(tag, index) in detail.creator.expertTags" :key="index">#{{ tag }}</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
import { defineComponent, onBeforeMount } from 'vue'
import { useplayListStore } from '@/stores/playList'
import { useRoute } from 'vue-router'

export default defineComponent({
	name: 'playList',
	setup() {
		const { getMusicListDetail, detail } = useplayListStore()
		const route = useRoute()
		onBeforeMount(() => {
			getMusicListDetail(Number(route.params.id))
		})

		return {
			detail,
		}
	},
})
</script>

<style lang="less" scoped>
.play-list {
	position: relative;
	.list-detail {
		width: 100%;
		height: 150px;
		display: flex;

		.list-img {
			width: 150px;
			height: 100%;
			.el-image {
				border-radius: 10px;
				width: 100%;
				height: 100%;
			}
		}
		.list-content {
			width: calc(100% - 150px);
			height: 100%;
			padding-left: 20px;
			.content-name {
				font-size: 24px;
				font-weight: 600;
				overflow: hidden;
				white-space: nowrap;
				text-overflow: ellipsis;
				height: 50px;
			}
			.content-avator {
				height: 50px;
				color: rgba(0 0 0 0.4);
				font-size: 12px;
				height: 30px;
				display: flex;
				align-items: center;

				div {
					margin-left: 5px;
					cursor: pointer;
				}

				.el-image {
					width: 30px;
					height: 30px;
					border-radius: 50%;
				}

				.content-tag:hover {
					color: #34d399;
				}
			}
		}
	}
}
</style>

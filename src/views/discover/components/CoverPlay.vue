<template>
	<div class="cover-play">
		<el-image fit="fill" :src="imgSrc"></el-image>
		<div class="mask">
			<icon-park :icon="PlayOne" :size="40" theme="filled" @click="play"></icon-park>
		</div>
		<div class="play-count">
			<IconPark :icon="Headset" :size="12" />
			<div style="color: white; overflow: hidden; word-wrap: none; text-overflow: ellipsis">
				{{ useNumberFormat(playCount) }}
			</div>
		</div>
	</div>
</template>

<script lang="ts" setup>
import { ref, reactive, toRefs, watch, computed } from 'vue'
import IconPark from '@/components/common/IconPark.vue'
import { PlayOne, Headset } from '@icon-park/vue-next'
import { useNumberFormat } from '@/utils/utils'
import { usePlayMusic } from '@/stores/playMusic'
type propsType = {
	imgSrc: string
	playCount: number
	name: string
	author: string
}
const props = withDefaults(defineProps<propsType>(), {
	imgSrc: '',
	playCount: 0,
	name: '',
	author: '',
})
console.log(props)

const { playMusic } = usePlayMusic()

const play = () => {
	console.log('play')

	playMusic({ imgSrc: props.imgSrc, name: props.name, author: props.author })
}
</script>

<style lang="less" scoped>
.cover-play {
	width: 100%;
	height: 100%;
	position: relative;
	overflow: hidden;
	transition: all 0.15s ease;
	cursor: pointer;
	.el-image {
		border-radius: 5px;
		width: 100%;
		height: 100%;
	}
	&:hover {
		transform: translateY(-10px);
	}
	&:hover .mask {
		opacity: 1;
		z-index: 1;
	}

	.mask {
		width: 100%;
		height: 100%;
		opacity: 0;
		position: absolute;
		z-index: -1;
		transition: all 0.15s ease;
		background-color: rgba(0, 0, 0, 0.5);
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		color: #34d399;
		display: flex;
		justify-content: center;
		align-items: center;
		border-radius: 5px;
	}

	.play-count {
		position: absolute;
		bottom: 10px;
		right: 5px;
		width: 60px;
		height: 14px;
		line-height: 14px;
		border-radius: 6px;
		background-color: rgba(0, 0, 0, 0.8);
		z-index: 1;
		overflow: hidden;
		padding: 0 1px;
		display: flex;
		justify-content: space-between;
		align-items: center;
		font-size: 12px;
		color: white;
	}
}
</style>

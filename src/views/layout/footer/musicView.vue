<template>
	<div class="footer-left-wrap">
		<el-image fit="cover" :src="playObj.imgSrc"></el-image>
		<div class="footer-des">
			<div class="footer-des_name">{{ playObj.name }} - {{ playObj.author }}</div>
			<div class="footer-des_icons">
				<IconPark :icon="Like" :size="18" />
				<IconPark :icon="Download" :size="18" />
				<IconPark :icon="MoreThree" :size="18" />
				<IconPark :icon="Comment" :size="18" />
			</div>
		</div>
	</div>
</template>

<script lang="ts" setup>
import { ref, reactive, toRefs, watch, computed } from 'vue'
import { Like, Download, MoreThree, Comment } from '@icon-park/vue-next'
import IconPark from '@/components/common/IconPark.vue'
import { usePlayMusic } from '@/stores/playMusic'

const { playObj } = usePlayMusic()
</script>

<style lang="less" scoped>
.footer-left-wrap {
	width: 100%;
	height: 100%;
	display: flex;
	align-items: center;
	padding: 20px 10px;
	.el-image {
		width: 60px;
		height: 60px;
		border-radius: 5px;
	}
	.footer-des {
		height: 100%;
		margin-left: 10px;
		&_name {
			height: 50%;
			width: auto;
			font-size: 12px;
		}
		&_icons {
			height: 50%;
			width: auto;
			color: #94a3b8;

			.i-icon {
				margin-right: 10px;
				cursor: pointer;
			}
		}
	}
}
</style>

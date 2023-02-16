<template>
	<div class="container">
		<div class="menu-wrap">
			<menu-view ref="menu" />
		</div>
		<div class="content-wrap">
			<div class="music-header">
				<music-header ref="header" />
			</div>
			<div class="musci-main">
				<router-view />
			</div>
			<div class="music-footer">
				<music-footer ref="footer" />
				<music-player ref="player" />
			</div>
		</div>
	</div>
</template>

<script lang="ts">
import { defineComponent, ref, reactive, toRefs, watch, computed, getCurrentInstance } from 'vue'
import MenuView from './menu/Menu.vue'
import MusicHeader from './header/index.vue'
import MusicFooter from './footer/index.vue'
import MusicPlayer from '@/components/common/MusicPlayer.vue'
import { RouterView } from 'vue-router'
export default defineComponent({
	name: 'RootView',
	components: {
		MenuView,
		MusicHeader,
		MusicFooter,
		MusicPlayer,
	},
	setup() {
		const menu = ref(null)
		const header = ref(null)
		const footer = ref(null)
		const player = ref(null)
		console.log('div===', menu, header, footer, player)

		return { menu, header, footer, player }
	},
})
</script>

<style lang="less" scoped>
.container {
	width: 100vw;
	height: 100vh;
	display: flex;

	.menu-wrap {
		background-color: #f9fafb;
		width: 12%;
	}

	.content-wrap {
		width: 88%;
		height: 100%;
		.music-header {
			width: 88%;
			height: 60px;
			background-color: #fff;
			position: fixed;
			top: 0;
			right: 0;
			z-index: 1;
		}
		.musci-main {
			width: 100%;
			height: calc(100% - 160px);
			padding: 20px;
			margin-top: 60px;
			z-index: 0;
			margin-bottom: 100px;
			overflow-y: scroll;
		}
		.music-footer {
			width: 88%;
			height: 100px;
			background-color: #fff;
			position: fixed;
			bottom: 0;
			right: 0;
			z-index: 1;
		}
	}
}
</style>

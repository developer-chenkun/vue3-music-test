<template>
	<div :class="$style['container']">
		<div :class="$style['menu-wrap']">
			<menu-view />
		</div>
		<div :class="$style['content-wrap']">
			<div :class="$style['music-header']">
				<music-header />
			</div>
			<div :class="$style['musci-main']">
				<router-view />
			</div>
		</div>
	</div>
</template>

<script lang="ts">
import { defineComponent, ref, reactive, toRefs, watch, computed, getCurrentInstance } from 'vue'
import MenuView from './menu/Menu.vue'
import MusicHeader from './header/index.vue'
import { RouterView } from 'vue-router'
export default defineComponent({
	name: 'RootView',
	components: {
		MenuView,
		MusicHeader,
		RouterView,
	},
	setup() {},
})
</script>

<style lang="less" module>
.container {
	width: 100vw;
	height: 100vh;
	display: flex;

	.menu-wrap {
		background-color: #f9fafb;
		width: 12%;
		height: 100%;
	}

	.content-wrap {
		width: 88%;
		min-height: 100%;

		.music-header {
			width: 100%;
			height: 60px;
			background-color: #fff;
		}
		.musci-main {
			width: 100%;
			min-height: calc(100vh - 60px);
		}
	}
}
</style>

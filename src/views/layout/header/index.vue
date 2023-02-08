<template>
	<div :class="$style['container']">
		<div :class="$style['handle']">
			<go-and-back />
			<search-wrap />
		</div>
		<div :class="$style['user']">
			<UserWrap />
		</div>
	</div>
</template>

<script lang="ts">
import { defineComponent, ref, reactive, toRefs, watch, computed, getCurrentInstance } from 'vue'
import GoAndBack from './goAndBack.vue'
import SearchWrap from './seachWrap.vue'
import UserWrap from './userWrap.vue'

export default defineComponent({
	name: 'MusicHeader',
	components: {
		GoAndBack,
		SearchWrap,
		UserWrap,
	},
	setup(ctx) {
		console.log(ctx)
	},
})
</script>

<style lang="less" module>
.container {
	background-color: inherit;
	width: 100%;
	height: 100%;
	line-height: 60px;
	display: flex;
	justify-content: space-between;
	.handle {
		padding: 0 20px;
		width: 400px;
		height: 100%;
		display: flex;
		align-items: center;
	}

	.user {
		width: 220px;
		height: 100%;
	}
}
</style>

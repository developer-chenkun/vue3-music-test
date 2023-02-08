<template>
	<div class="container">
		<exclusive-music />
		<new-music />
		<Mv />
	</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import NewMusic from './components/NewMusic.vue'
import Mv from './components/Mv.vue'
import ExclusiveMusic from './components/ExclusiveMusic.vue'

export default defineComponent({
	name: 'Discover',
	components: {
		Mv,
		NewMusic,
		ExclusiveMusic,
	},
	setup() {},
})
</script>

<style lang="less" scoped>
.container {
	padding: 0 20px;
	width: 100%;
	height: auto;
}
</style>

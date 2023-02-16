<template>
	<Banner />
	<exclusive-music />
	<new-music />
	<Mv />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Banner from './components/Banner.vue'
import NewMusic from './components/NewMusic.vue'
import Mv from './components/Mv.vue'
import ExclusiveMusic from './components/ExclusiveMusic.vue'

export default defineComponent({
	name: 'Discover',
	inheritAttrs: false,
	components: {
		Mv,
		NewMusic,
		ExclusiveMusic,
		Banner,
	},
	setup() {},
})
</script>

<style lang="less" scoped></style>

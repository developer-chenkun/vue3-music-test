<template>
	<audio ref="player" autoplay :src="playObj.musicUrl" controls loop="false" preload="false" />
</template>

<script lang="ts" setup>
import { ref, reactive, toRefs, watch, computed, onBeforeMount } from 'vue'
import { usePlayMusic } from '@/stores/playMusic'
import { getHotMusic } from '@/utils/api'

const { playObj } = usePlayMusic()
const player = ref(null)
console.log('player======', player)
</script>

<style lang="less" scoped>
.container {
}
</style>

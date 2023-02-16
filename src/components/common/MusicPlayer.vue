<template>
	<audio autoplay :src="playObj.musicUrl" />
</template>

<script lang="ts" setup>
import { ref, reactive, toRefs, watch, computed } from 'vue'
import { usePlayMusic } from '@/stores/playMusic'

const { playObj } = usePlayMusic()
</script>

<style lang="less" scoped>
.container {
}
</style>

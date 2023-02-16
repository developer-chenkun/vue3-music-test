<template>
	<h2>{{ title }}</h2>
</template>

<script lang="ts" setup>
import { ref, reactive, toRefs, watch, computed } from 'vue'
type propsType = {
	title: string
}

const props = defineProps<propsType>()
</script>

<style lang="less" scoped>
h2 {
	padding: 10px 0;
	font-weight: 600;
}
</style>

<template>
	<div :class="$style['container']">推荐</div>
</template>

<script lang="ts">
import { defineComponent, ref, reactive, toRefs, watch, computed, getCurrentInstance } from 'vue'

export default defineComponent({
	name: 'Discover',
	setup() {},
})
</script>

<style lang="less" module>
.container {
}
</style>

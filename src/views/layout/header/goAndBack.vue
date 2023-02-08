<template>
	<div :class="$style['container']">
		<IconPark :icon="left" theme="outline" :size="18" />
		<IconPark :icon="right" theme="outline" :size="18" />
	</div>
</template>

<script lang="ts">
import { defineComponent, ref, reactive, toRefs, watch, computed, getCurrentInstance } from 'vue'
import IconPark from '@/components/common/IconPark.vue'
import { Left, Right } from '@icon-park/vue-next'

export default defineComponent({
	name: 'GoAndBack',
	components: {
		IconPark,
	},
	setup() {
		const left = ref(Left)
		const right = ref(Right)

		return {
			left,
			right,
		}
	},
})
</script>

<style lang="less" module>
.container {
	span {
		cursor: pointer;
	}
	span:hover {
		color: #34d399;
	}
	span:last-child {
		margin-left: 10px;
	}
}
</style>

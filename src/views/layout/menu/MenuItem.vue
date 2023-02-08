<template>
	<div
		:class="[$style['hover-bg'], $style['menu-item'], menu?.key === currentKey ? $style['active'] : '']"
		@click="gotoPage(menu)"
	>
		<IconPark :class="$style['i-icon']" :icon="menu?.icon" :size="18" :theme="menu?.theme" />
		<span :class="$style['menu-des']">{{ menu?.name }}</span>
	</div>
</template>

<script lang="ts">
import type { Imenu } from './useMenu'
import { defineComponent, ref, reactive, toRefs, watch, computed, getCurrentInstance, type PropType } from 'vue'
import IconPark from '@/components/common/IconPark.vue'
import { useMenu } from './useMenu'
export default defineComponent({
	name: 'MenuItem',
	components: {
		IconPark,
	},
	props: {
		menu: {
			type: Object as PropType<Imenu>,
			require: true,
			default: () => {},
		},
	},
	setup() {
		const { currentKey, gotoPage } = useMenu()
		return {
			currentKey,
			gotoPage,
		}
	},
})
</script>

<style lang="less" module>
.menu-item {
	background-color: inherit;
	border-radius: 0.25rem;
	display: flex;
	cursor: pointer;
	align-items: center;
	padding-left: 1rem;
	padding-right: 1rem;
	padding-top: 0.375rem;
	padding-bottom: 0.375rem;
	font-size: 0.875rem;
	line-height: 1.25rem;
	transition: all cubic-bezier(0.075, 0.82, 0.165, 1) 0.15s;
	.i-icon {
		width: 18px;
		height: 18px;
	}

	.menu-des {
		margin-left: 0.25rem;
	}
}

.hover-bg {
	&:hover {
		background-color: rgba(229, 231, 235, 1);
	}
}

.active {
	background-image: linear-gradient(to right, #2dd4bf, #34d399);
	color: rgb(248, 250, 252);
}
</style>

<template>
	<div :class="$style['container']">
		<IconPark :class="$style['search-icon']" :icon="Search" theme="outline" size="12" />
		<input :class="$style['inner_input']" placeholder="搜索音乐、MV、歌单" />
	</div>
</template>

<script lang="ts">
import { defineComponent, ref, reactive, toRefs, watch, computed, getCurrentInstance } from 'vue'
import { Search } from '@icon-park/vue-next'
import IconPark from '@/components/common/IconPark.vue'

export default defineComponent({
	name: 'SearchWrap',
	components: {
		IconPark,
	},
	setup() {
		return { Search }
	},
})
</script>

<style lang="less" module>
.container {
	width: 200px;
	height: 30px;
	background-color: #f9fafb;
	margin-left: 20px;
	display: flex;
	align-items: center;
	justify-content: flex-start;
	border-radius: 16px;
	padding-left: 10px;
	border: 1px solid #e5e7eb;
	.search-icon {
		color: #e5e7eb;
	}
	.inner_input {
		width: 150px;
		height: 100%;
		background-color: inherit;
		border: none;
		outline: none;
	}
}
</style>

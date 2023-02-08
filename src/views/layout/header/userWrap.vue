<template>
	<div :class="$style['container']">
		<div :class="$style['user_login']">
			<div style="margin-right: 5px"><el-avatar :size="32">user</el-avatar></div>
			点击登录
		</div>
		<div>
			<IconPark :icon="Mail" :size="14" theme="outline" />
		</div>
		<div>
			<IconPark :icon="Platte" :size="14" theme="outline" />
		</div>
		<div>
			<IconPark :icon="HamburgerButton" :size="14" theme="outline" />
		</div>
	</div>
</template>

<script lang="ts">
import { defineComponent, ref, reactive, toRefs, watch, computed, getCurrentInstance } from 'vue'
import IconPark from '@/components/common/IconPark.vue'
import { Mail, Platte, HamburgerButton } from '@icon-park/vue-next'

export default defineComponent({
	name: 'UserWrap',
	components: {
		IconPark,
	},
	setup() {
		return { Mail, Platte, HamburgerButton }
	},
})
</script>

<style lang="less" module>
.container {
	width: 100%;
	height: 100%;
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 0 10px;

	.user_login {
		height: 100%;
		display: flex;
		align-items: center;
		justify-content: flex-start;
		cursor: pointer;
		font-size: 12px;

		&:hover {
			color: #34d399;
		}
	}
}
</style>

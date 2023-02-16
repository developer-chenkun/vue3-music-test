<template>
	<div class="footer">
		<div class="footer-item footer-left">
			<musicView />
		</div>
		<div class="footer-item footer-center"></div>
		<div class="footer-item footer-right"></div>
	</div>
</template>

<script lang="ts" setup>
import { ref, reactive, toRefs, watch, computed } from 'vue'
import musicView from './musicView.vue'
</script>

<style lang="less" scoped>
.footer {
	width: 100%;
	height: 100px;
	display: flex;
	justify-content: space-between;
	align-items: center;
	border-top: 2px solid rgba(0, 0, 0, 0.5);

	.footer-item {
		flex: 1;
		height: 100%;
	}
}
</style>

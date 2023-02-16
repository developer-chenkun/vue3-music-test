<template>
	<Title title="推荐" />
	<Swiper slides-per-group-auto slides-per-view="auto" :navigation="true" :grab-cursor="true">
		<SwiperSlide v-for="item in bannerData" :key="item.bannerId">
			<img :src="item.pic" class="banner-image" />
		</SwiperSlide>
	</Swiper>
</template>

<script lang="ts" setup>
import { ref, reactive, toRefs, watch, computed, onBeforeMount } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import { useBannersStore } from '@/stores/discover'
import Title from '@/components/common/Title.vue'

const { getBanner } = useBannersStore()
const { bannerData } = toRefs(useBannersStore())
onBeforeMount(() => {
	getBanner()
})
</script>

<style lang="less" scoped>
.swiper {
	height: 120px;
	justify-content: space-between;
	.swiper-slide {
		width: 25%;
	}
	.banner-image {
		width: 95%;
		height: 100%;
		border-radius: 5px;

		&:hover {
			box-shadow: rgb(0, 0, 0);
			opacity: 0.8;
		}
	}
}
</style>

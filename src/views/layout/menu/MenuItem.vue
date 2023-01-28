<template>
  <div :class="$style['menu-item']" class="hover-bg">
    <IconPark icon="" />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, reactive, toRefs, watch, computed, getCurrentInstance } from 'vue'
import IconPark from '@/components/common/IconPark.vue'

export default defineComponent({
  name: 'MenuItem',
  components: {
    IconPark
  }
  setup() { },
})
</script>

<style lang="less" module>
.menu-item {
  background: #f9fafb;
  width: 100%;
  height: 1.4rem;
  border-radius: 5px;
  display: flex;
  cursor: pointer;
  justify-content: flex-start;
  align-items: center;
}

.hover-bg:hover {
  background-color: rgba(229, 231, 235, 1);
}
</style>

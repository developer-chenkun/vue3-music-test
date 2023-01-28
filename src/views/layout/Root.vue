<template>
  <div :class="$style['container']">
    <div class="menu-wrap"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, reactive, toRefs, watch, computed, getCurrentInstance } from 'vue'

export default defineComponent({
  name: 'RootView',
  setup() {},
})
</script>

<style lang="less" module>
.container {
  width: 100%;
  height: 100%;
  .menu-wrap {
    background-color: #f9fafb;
    width: 20vw;
    height: 100%;
    min-height: 100vh;
  }
}
</style>

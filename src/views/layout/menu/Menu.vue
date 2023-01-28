<template>
  <div :class="$style['menu']"></div>
</template>

<script lang="ts">
import {
  defineComponent,
  ref,
  reactive,
  toRefs,
  watch,
  computed,
  getCurrentInstance,
} from "vue";

export default defineComponent({
  name: "Menu",
  setup() { },
});
</script>

<style lang="less" module>
.menu {
  width: 100%;
  height: 100%;
  padding: 1rem 1rem;
  display: flex;
  flex-direction: column;
}
</style>

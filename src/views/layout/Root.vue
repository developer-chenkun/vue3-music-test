<template>
  <div :class="$style['container']">
    <div :class="$style['menu-wrap']">
      <menu-view />
    </div>
  </div>
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
import MenuView from "./menu/Menu.vue";
export default defineComponent({
  name: "RootView",
  components: {
    MenuView,
  },
  setup() { },
});
</script>

<style lang="less" module>
.container {
  width: 100vw;
  height: 100vh;
  display: flex;

  .menu-wrap {
    background-color: #f9fafb;
    width: 12%;
    height: 100%;
  }
}
</style>

<template>
  <div :class="$style['menu']">
    <div :class="$style['menu-module']" v-for="menuItem in menus" :key="menuItem.name">
      <div :class="$style['menu-title']">
        {{ menuItem.name }}
      </div>
      <div v-for="menu in menuItem.menus" :key="menu.key">
        <menu-item :menu="menu"></menu-item>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import MenuItem from "./MenuItem.vue";
import {
  defineComponent,
  ref,
  reactive,
  toRefs,
  watch,
  computed,
  getCurrentInstance,
} from "vue";
import { useMenu } from "./useMenu";

export default defineComponent({
  name: "MusicMenu",
  components: {
    MenuItem,
  },

  setup() {
    const { menus, gotoPage } = useMenu();
    return {
      menus,
      gotoPage,
    };
  },
});
</script>

<style lang="less" module>
.menu {
  width: 100%;
  height: 100%;
  padding: 1rem 1rem;
  display: flex;
  flex-direction: column;

  .menu-module {
    margin-bottom: 3rem;

    .menu-title {
      font-size: 0.75rem;
      line-height: 1rem;
      margin-left: 0.75rem;
      margin-bottom: 1rem;
    }
  }
}
</style>

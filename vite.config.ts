import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
import VitePluginElementPlus from "vite-plugin-element-plus";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  return {
    plugins: [
      vue(),
      vueJsx(),
      VitePluginElementPlus({
        format: mode === "development" ? "esm" : "cjs",
      }),
    ],
    resolve: {
      alias: {
        "@": fileURLToPath(new URL("./src", import.meta.url)),
      },
    },
    css: {
      preprocessorOptions: {
        less: {
          math: "always",
          globalVars: {
            mainColor: "red",
          },
        },
      },
    },
  };
});

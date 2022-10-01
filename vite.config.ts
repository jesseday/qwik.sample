import { defineConfig } from "vite";
import { qwikVite } from "@builder.io/qwik/optimizer";
import { qwikCity } from "@builder.io/qwik-city/vite";
import tsconfigPaths from "vite-tsconfig-paths";

// windicss
import WindiCSS from 'vite-plugin-windicss';


export default defineConfig(() => {
  return {
    plugins: [
      WindiCSS(),
      qwikCity(),
      qwikVite(),
      tsconfigPaths(),
    ],
  };
});

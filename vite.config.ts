import { defineConfig } from "vite";
import { qwikVite } from "@builder.io/qwik/optimizer";
import { qwikCity } from "@builder.io/qwik-city/vite";
import tsconfigPaths from "vite-tsconfig-paths";

// UnoCSS
import Unocss from 'unocss/vite';
import { presetWind } from 'unocss';
import { theme } from './uno.config';


export default defineConfig(() => {
  return {
    plugins: [
      Unocss({
        presets: [
          presetWind({ theme }),
        ],
      }),
      qwikCity(),
      qwikVite(),
      tsconfigPaths(),
    ],
  };
});

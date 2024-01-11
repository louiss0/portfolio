import { defineConfig } from 'astro/config';
import unocss from '@unocss/astro';
import vue from '@astrojs/vue';

import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  vite: {
    optimizeDeps: {
      exclude: ["astro:content"]
    }
  },
  integrations: [unocss({
    injectReset: true
  }), vue({
    jsx: true
  }), icon()]
});
import { defineConfig } from 'astro/config';
import unocss from '@unocss/astro';
import markdoc from '@astrojs/markdoc';
import vue from '@astrojs/vue';

// https://astro.build/config
export default defineConfig({
  vite: {
    optimizeDeps: {
      exclude: ["astro:content"]
    }
  },
  integrations: [
    unocss({
      injectReset: true,
    }),
    vue({ jsx: true }),
    markdoc(),
  ],
});

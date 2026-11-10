// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// Project page on GitHub Pages: https://shimodos.github.io/layer-manager-site
// For a custom domain later: set `site` to the domain and remove `base`.
export default defineConfig({
  site: 'https://shimodos.github.io',
  base: '/layer-manager-site',
  compressHTML: true,
  vite: {
    plugins: [tailwindcss()],
  },
});

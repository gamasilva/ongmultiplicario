// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://imultiplicario.org.br',
  vite: {
    plugins: [tailwindcss()]
  },

  image: {
    domains: ['i.ibb.co', 'images.unsplash.com'],
  },

  integrations: [sitemap()]
});
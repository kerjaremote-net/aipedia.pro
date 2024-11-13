import { defineConfig } from 'astro/config';
import sitemap from "@astrojs/sitemap";
import tailwindcss from '@tailwindcss/vite';
export default defineConfig({
vite: {
    plugins: [tailwindcss()],
  },
    // add yur domain name here
   site: 'https://aipedia.pro',
   base: 'https://aipedia.pro',
  integrations: [sitemap()]
});
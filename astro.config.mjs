import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// GitHub Pages deploy: project page lives at <user>.github.io/<repo>/.
// When a custom domain is attached later, set `site` to the bare apex (e.g.
// 'https://rexwithyou.com') and remove `base`.
export default defineConfig({
  site: 'https://fmk-growth.github.io',
  base: '/rexwithyou-landing',
  trailingSlash: 'ignore',
  vite: {
    plugins: [tailwindcss()],
  },
});

import { defineConfig } from 'astro/config';

import partytown from "@astrojs/partytown";
import solidJs from "@astrojs/solid-js";
import cloudflare from "@astrojs/cloudflare";
import prefetch from "@astrojs/prefetch";
import sitemap from "@astrojs/sitemap";
import unocss from 'unocss/astro'

// https://astro.build/config
export default defineConfig({
  integrations: [partytown(), solidJs(), prefetch(), sitemap(), unocss()],
  output: "server",
  adapter: cloudflare(),
  site: 'https://www.gabriewf.tk'
});
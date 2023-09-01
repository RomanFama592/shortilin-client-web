import { defineConfig } from 'astro/config';
import vercel from "@astrojs/vercel"

import compressor from "astro-compressor";

// https://astro.build/config
export default defineConfig({
  output: "server",
  srcDir: "./src",
  publicDir: "./public",
  adapter: vercel(),
  integrations: [compressor({
    gzip: true,
    brotli: true
  })]
});
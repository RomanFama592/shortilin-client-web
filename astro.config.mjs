import { defineConfig } from 'astro/config';
import compressor from "astro-compressor";
import vercel from "@astrojs/vercel/serverless";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  output: "server",
  adapter: vercel(),
  srcDir: "./src",
  publicDir: "./public",
  integrations: [compressor({
    gzip: true,
    brotli: true
  }), tailwind()]
});
import { defineConfig } from 'astro/config';
import node from "@astrojs/node";

import compressor from "astro-compressor";

// https://astro.build/config
export default defineConfig({
  output: "hybrid",
  srcDir: "./src",
  publicDir: "./public",
  server: {
    port: 10000
  },
  adapter: node({
    mode: "standalone"
  }),
  integrations: [compressor({
    gzip: true,
    brotli: true
  })]
});
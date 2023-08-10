import { defineConfig } from 'astro/config';
import node from "@astrojs/node";

// https://astro.build/config
export default defineConfig({
  output: "hybrid",
  server: {
    port: 10000,
  },
  adapter: node({
    mode: "standalone"
  })
});
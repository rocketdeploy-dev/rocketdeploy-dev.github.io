import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";

export default defineConfig({
  site: "https://rocketdeploy-dev.github.io",
  integrations: [mdx()],
});
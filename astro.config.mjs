import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: "https://tonyouma.com",
  vite: {
    plugins: [tailwindcss()],
  },
});

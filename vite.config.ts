import { defineConfig, type Plugin } from "vite";
import react from "@vitejs/plugin-react";
import { SITE_URL } from "./src/constants.ts";

// Fills %SITE_URL% in index.html, since canonical, Open Graph and structured
// data URLs must be absolute.
function siteUrl(): Plugin {
  return {
    name: "site-url",
    transformIndexHtml: {
      order: "pre",
      handler: (html) => html.replaceAll("%SITE_URL%", SITE_URL),
    },
  };
}

export default defineConfig({
  // Served from the root of amberapp.dev (see public/CNAME).
  base: "/",
  plugins: [react(), siteUrl()],
});

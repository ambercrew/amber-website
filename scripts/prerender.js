// Runs after the client and SSR builds: renders the page to static HTML so
// crawlers and link previews see the full content without running JS, then
// writes robots.txt and sitemap.xml.
import { readFile, rm, writeFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";

const root = fileURLToPath(new URL("..", import.meta.url));
const dist = `${root}dist`;
const ssrDist = `${root}dist-ssr`;

const { render, SITE_URL } = await import(`${ssrDist}/entry-server.js`);

const template = await readFile(`${dist}/index.html`, "utf8");
const placeholder = '<div id="root"></div>';
if (!template.includes(placeholder)) throw new Error("Root placeholder missing from dist/index.html");
await writeFile(`${dist}/index.html`, template.replace(placeholder, `<div id="root">${render()}</div>`));

await writeFile(`${dist}/robots.txt`, `User-agent: *\nAllow: /\n\nSitemap: ${SITE_URL}sitemap.xml\n`);

const lastmod = new Date().toISOString().slice(0, 10);
await writeFile(
  `${dist}/sitemap.xml`,
  `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${SITE_URL}</loc>
    <lastmod>${lastmod}</lastmod>
  </url>
</urlset>
`,
);

await rm(ssrDist, { recursive: true, force: true });
console.log("Prerendered dist/index.html, wrote robots.txt and sitemap.xml");

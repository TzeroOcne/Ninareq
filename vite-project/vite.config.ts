import type { Plugin, ResolvedConfig } from "vite";
import { defineConfig } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";
import fs from "node:fs/promises";
import path from "node:path";

// <https://github.com/neutralinojs/neutralinojs/issues/909>.
const neutralino = (): Plugin => {
  let config: ResolvedConfig;

  return {
    name: "neutralino",

    configResolved(resolvedConfig) {
      config = resolvedConfig;
    },

    async transformIndexHtml(html) {
      if (config.mode === "development") {
        const auth_info_file = await fs.readFile(
          path.join(__dirname, "..", ".tmp", "auth_info.json"),
          {
            encoding: "utf-8",
          }
        );

        const auth_info = JSON.parse(auth_info_file);
        const port = auth_info.port;

        return html.replace(
          '<script src="__neutralino_globals.js"></script>',
          `<script src="http://localhost:${port}/__neutralino_globals.js"></script>`
        );
      }

      return html;
    },
  };
};

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svelte(), neutralino()],

  server: {
    port: 3000,
  },
});

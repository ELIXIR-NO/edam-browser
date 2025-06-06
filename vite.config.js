import { defineConfig } from "vite";
import viteReact from "@vitejs/plugin-react";
import { TanStackRouterVite } from "@tanstack/router-plugin/vite";
import { resolve } from "node:path";

const ReactCompilerConfig = {};

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		TanStackRouterVite({ autoCodeSplitting: true }),
		viteReact({
			babel: {
				plugins: [["babel-plugin-react-compiler", ReactCompilerConfig]],
			},
		}),
	],
	test: {
		globals: true,
		environment: "jsdom",
	},
	resolve: {
		alias: {
			"@": resolve(__dirname, "./src"),
		},
	},
});

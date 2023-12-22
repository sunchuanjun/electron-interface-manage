import { defineConfig } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";
import preprocess from "svelte-preprocess";
import { resolve } from "path";
import { viteStaticCopy } from "vite-plugin-static-copy";

export default defineConfig({
	base: "./",
	server: {
		port: 5000,
	},
	plugins: [
		svelte({
			preprocess: [preprocess()],
		}),
		viteStaticCopy({
			targets: [
				{
					src: "node_modules/@shoelace-style/shoelace/dist/assets",
					dest: "shoelace",
				},
			],
		}),
	],
	build: {
		outDir: "../electron/ui",
		rollupOptions: {
			input: {
				index: resolve(__dirname, "index.html"),
			},
		},
	},
});

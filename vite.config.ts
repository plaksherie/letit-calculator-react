import { defineConfig } from "vite"
import react from "@vitejs/plugin-react-swc"
import path from "path"

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	resolve: {
		alias: {
			"@": path.resolve(__dirname, "./src/"),
		},
	},
	build: {
		outDir: '../plugins/letit-calculator/inc/assets/calculator',
		emptyOutDir: true
	}
})

import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
    base: "./",

    build: {
        rollupOptions: {
            input: resolve(process.cwd(), "html/index.html")
        }
    }
});
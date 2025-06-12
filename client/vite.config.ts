import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vite.dev/config/
export default defineConfig({
    base: "/",
    plugins: [react()],
    resolve: {
        alias: {
            "@utils": path.resolve(__dirname, "src/utils"),
            "@styles": path.resolve(__dirname, "src/styles"),
        },
    },
    build: {
        manifest: "manifest.json",
        emptyOutDir: true,
    },
    server: {
        cors: {
            // the origin you will be accessing via browser
            origin: "http://my-backend.example.com",
        },
    },
});

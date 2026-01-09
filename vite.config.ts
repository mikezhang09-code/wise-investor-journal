import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const basePath = process.env.VITE_BASE_PATH || './';
  return {
    base: basePath,
    server: {
      host: "0.0.0.0",
      port: 8080,
    },
    preview: {
      allowedHosts: ["mikezhang69-ai-coding.hf.space"],
      host: "0.0.0.0",
      port: 4173,
    },
    plugins: [react(), mode === "development" && componentTagger()].filter(Boolean),
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
  };
});

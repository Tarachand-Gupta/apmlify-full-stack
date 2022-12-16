import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";
import dns from "dns";

dns.setDefaultResultOrder("verbatim");

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "app",
      remotes: {
        productAppResource:
          "https://main.d2zas40d7ywn1x.amplifyapp.com/assets/remoteEntry.js",
      },
      shared: ["react"],
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
    }),
  ],
  preview: {
    host: "localhost",
    port: 5174,
    strictPort: true,
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
  },
  build: {
    target: "esnext",
    minify: false,
    cssCodeSplit: false,
  },
  // resolve: {
  //   alias: [
  //     {
  //       find: "src",
  //       replacement: path.resolve(__dirname, "./src"),
  //     },
  //   ],
  // },
});

import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/react_weather_quote",
  // build: {
  //   assetsDir: "assets",
  // },
});

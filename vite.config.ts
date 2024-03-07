import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

const aliases = {
  "@components": "/src/components/",
  "@layouts": "/src/layouts/",
  "@pages": "/src/pages/",
  "@infra": "/src/infra/",
  "@assets": "/src/assets",
  "@utils": "/src/utils/",
  "@style": "/src/style/",
  "@hooks": "/src/hooks/",
};

// https://vitejs.dev/config/
export default defineConfig(() => {
  return {
    plugins: [react()],
    resolve: {
      alias: aliases,
    },
  };
});

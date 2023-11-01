import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
import reactRefresh from "@vitejs/plugin-react-refresh";
import path from "node:path";

// https://vitejs.dev/config/
export default () => {
  return defineConfig({
    root: "./src",
    base: "",
   
    resolve:{
      alias:{
        '@assets': path.resolve(__dirname,'./assets'),
        '@components' : path.resolve(__dirname,'./componets')
      }
    },
    plugins: [tsconfigPaths(), reactRefresh()],
  });
};

import { defineConfig } from 'vite'
import path from "path"
import vue from '@vitejs/plugin-vue'
import ElementPlus from 'unplugin-element-plus/vite'

const Src = path.resolve(__dirname, "src");

// https://vitejs.dev/config/
export default defineConfig({
  alias: {
    "/@": Src,
    "Components": path.resolve(__dirname, "./src/components"),
    "Services": path.resolve(__dirname, "./src/services"),
    "Utils": path.resolve(__dirname, "./src/utils"),
    "Styles": path.resolve(__dirname, "./src/styles"),
    "Assets": path.resolve(__dirname, './src/assets')
  },
  css: {
  },
  plugins: [
    vue(),
    ElementPlus({}),
  ],
})
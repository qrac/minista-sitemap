import { defineConfig } from "tsup"

export default defineConfig({
  entryPoints: ["src/*.ts", "src/*.tsx"],
  target: "node14", // needed for working ESM
  format: ["cjs", "esm"],
  clean: false,
  minify: false,
  dts: false,
  bundle: false,
  skipNodeModulesBundle: true,
  splitting: false,
  external: ["react", "react-dom"],
  inject: ["lib/shim-react.js"],
})

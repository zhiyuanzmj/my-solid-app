import { defineConfig } from "vite";
import solid from "vite-plugin-solid";
import jsxDirective from "@vue-macros/jsx-directive/vite";
import Inspect from "vite-plugin-inspect";

export default defineConfig({
  plugins: [{ ...jsxDirective(), enforce: "pre" }, solid(), Inspect()],
});

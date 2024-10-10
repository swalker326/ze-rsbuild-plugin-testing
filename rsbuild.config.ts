import { defineConfig } from "@rsbuild/core";
import { pluginReact } from "@rsbuild/plugin-react";
import { zephyrRsbuildPlugin } from "zephyr-rsbuild-plugin";

export default defineConfig({
  plugins: [pluginReact(), zephyrRsbuildPlugin()]
});
